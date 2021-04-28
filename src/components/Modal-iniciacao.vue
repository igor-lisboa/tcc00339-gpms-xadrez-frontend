<template>
<div>
  <transition name="modal-fade" v-if="showPrincipal">
    <div class="modal-initiation">
      <div class="modal-initiation-container"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div class="header">
            <div class="title-page" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/title_page.png') + ')' }">
                <img src="../assets/imgs/dog_chess.png">
                <span>Bem-vindo ao Jogo de xadrez</span>
            </div>
        </div>
        <div class="body">
          <div class="show-information">
                <div>
                    <label>Desenvolvedores:</label>
                    <span> Caio Wey | Igor Lisboa | Matheus Baldas | Milena Veríssimo | Victor Matheus Pereira | Victor Marques</span>
                </div>
            </div>
            <div class="new-game">
                <label>Iniciar novo jogo: </label>
                <div>
                    <input type="radio" id="JxJ" name="optJogos" value="0" checked> 
                      <label for="JxJ"> JxJ </label>
                    <input type="radio" id="JxIA" name="optJogos" value="1"> 
                      <label for="JxIA"> JxIA </label>
                    <input type="radio" id="IAxIA" name="optJogos" value="2"> 
                      <label for="IAxIA"> IAxIA </label>
                  <button @click="criarSala">INICIAR AGORA</button>
                </div>
            </div>
            <div class="get-in-game">
                <label>Entrar em um jogo:</label>
                <div>
                  <input placeholder="Código da sala" @keyup="keyupInput($event)" v-model="valueInput">
                  <button :class="{'disabled': this.disabledButton}" :disabled='this.disabledButton' @click="entrarSala">ENTRAR</button>
                </div>
            </div>           
        </div>
      </div>
    </div>
  </transition>
  <modalConfirmation ref="modalConfirmation" v-show="isConfirmationVisible"/>
  <toast ref="toast"/>
  </div>
</template>

<script>
  import modalConfirmation from "./Modal-confirmation";
  import toast from "./Toast";
  import http from './config/Http';
  
  export default {
    name: 'modalIniciacao',
    components: { 
      modalConfirmation,
      toast
    },
    data () {
      return {
        showPrincipal: Boolean,                 // variável que indica se modal de iniciação deve ser visível
        valueInput: "",                         // valor do campo que possui código da sala
        disabledButton: true,                   // variável que indica se botão deve ser desabilitado
        isConfirmationVisible: false,           // variável que indica se o modal de confiramção deve ser visível
        isChoosePieceVisible :false,            // variável que indica se o modal de escolha de peça deve ser visiível
        gameMode: undefined,                    // variável que carrega o tipo de jogo escolhido
        resolvePromise: undefined,              // variável para retorno das informações do modal
        rejectPromise: undefined                // variável para retorno das informações do modal
      }
    },
    methods: {

      // função de criação do modal de inicição
      show() {
        this.showPrincipal = true;
        this.valueInput = "";
        this.disabledButton = true;
        document.getElementById("JxJ").checked = true;
        return new Promise((resolve, reject) => {
          this.resolvePromise = resolve;
          this.rejectPromise = reject;
        })
      },

      // função de evento de keyup do input de códgio de sala
      keyupInput($event) {
        this.valueInput = $event.target.value;

        if(this.valueInput != ""){                           // habilita o botão se houver se for informado um código de sala
          this.disabledButton = false;
          return;
        }
          this.disabledButton = true;
      },
      
      //função de criação de sala
      async criarSala() {

        this.gameMode = document.querySelectorAll("input[name=optJogos]:checked")[0].value;

        //aciona modal de confirmação
        this.$refs.modalConfirmation.show({
          title: 'Criação de sala',
          message: 'Deseja realmente criar uma nova sala ' + document.querySelectorAll("input[name=optJogos]:checked")[0].id + ' para iniciar um jogo?',
          type: 'create'
        }).then(async (result) =>{ 

          if (result)                                          //caso seja confirmado criação da sala
          { 
            try
            {   
              await http.post("jogos", {"tipoJogo": this.gameMode})                  //acessa endpoint de criação de sala
                .then( response => response)
                  .then(data=>{
                    localStorage.setItem("idjogo",data.data.data.id);
                    localStorage.setItem("tipoJogo", this.gameMode);
                  });
              
            }
            catch(error)
            {
              // mostra notificação de erro ao tentar criar sala e retorna para iniciação
              this.$refs.toast.show({
                message: 'Erro ao criar a sala',
                type: 'error'
              });
              this.showPrincipal = true;
              this.resolvePromise(false);
            }

            localStorage.setItem("acao", "criacao");
            this.resolvePromise(result); 

          }
          else                                               //caso não seja confirmado pelo back a criação da sala
          {                                                   
            this.showPrincipal = true;
            //document.getElementById("jogo1").checked = true;
          }
          this.isConfirmationVisible = false;
        });

        this.showPrincipal = false;
        this.isConfirmationVisible = true;
      },

      //função para entrar numa sala de jogo
      entrarSala() {

        //aciona modal de confirmação
        this.$refs.modalConfirmation.show({
          title: 'Entrar em sala',
          message: 'Deseja realmente entrar na sala ' + this.valueInput + ' para iniciar um jogo?',
          type: 'enter',
          codeRoom: this.valueInput
        }).then(async (result) =>{

          if (result)                                                      //caso seja confirmado entrar na sala
          {
            try
            {
              await http.get('jogos/' + this.valueInput )                           //acessa endpoint de entrada em sala
                .then(async (response) =>{
                  if(response.status==200){

                    let ladoSemJogador = this.getLadoSemJogador(response.data.data);

                    if(ladoSemJogador != -1 || ladoSemJogador != null)       //verificação se pode entrar em sala
                    {     
                      localStorage.setItem("idjogo", this.valueInput);  
                      localStorage.setItem("ladoId", ladoSemJogador);
                      localStorage.setItem("acao", "entrada");
                    }
                    else                                                          //caso sala esteja cheia
                    {
                      // mostra notificação de sala cheia
                      this.$refs.toast.show({
                        message: 'Sala cheia! Não é possível ter mais jogadores',
                        type: 'error'
                      }); 
                      this.showPrincipal = true;
                      this.resolvePromise(false); 
                    }

                  }
                  if(response.status==500){
                    // mostra notificação de erro ao tentar entrar sala e retorna para iniciação
                    this.$refs.toast.show({
                      message: 'Sala não encontrada',
                      type: 'error'
                    }); 
                    this.showPrincipal = true;
                    this.resolvePromise(false); 
                  }
                }            
              );

              this.resolvePromise(result);
            }
            catch(error)                                                       //caso não seja confirmado pelo back a entrada na sala
            {
              // mostra notificação de erro ao tentar entrar sala e retorna para iniciação
              this.$refs.toast.show({
                message: 'Sala não encontrada',
                type: 'error'
              }); 
              this.showPrincipal = true;
              this.resolvePromise(false); 
            }
          } 
          else                                                               //caso não seja confirmado entrar na sala 
          {
            this.showPrincipal = true;
            this.valueInput = "";
            this.disabledButton = true;
          }
          this.isConfirmationVisible = false;
        });

        this.showPrincipal = false;
        this.isConfirmationVisible = true;
      },

      getLadoSemJogador(data){
        let ladoBranco = data.ladoBranco.tipo;
        let ladoPreto = data.ladoPreto.tipo;
        if(ladoPreto == null){
          if(ladoBranco == null){
            return null;
          }
          return 1;                      //retorna lado preto sem jogador
        }
        else
        {
          if(ladoBranco == null){
            return 0;                   //retorna lado branco sem jogador
          }
          return -1;                    //retorna que não hpa lado sem jogador
        }
      }
    }
  };
</script>

<style>
  /******************* Estrutura do modal **********************/
  .modal-initiation
  {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, .4);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-initiation-container
  {
    display: flex;
    flex-direction: column;
    width: 750px;
    background-color: #fff;
    border-radius: 4px;
    padding: 1.5em;
    box-shadow: 1px 1px 5px -1px #000000ad;
    position: relative;
  }
  .modal-initiation .title-page
  {
    position: absolute;
    height: 150px;
    left: 0;
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: right;
    background-size: 170%;
    padding: 0 2em 0 0;
    font-size: 2.1em;
    font-weight: bold;
  }
  .modal-initiation .title-page img
  {
    margin: 0 0.5em 0 0.5em;
    width: 22%;
    border-radius: 80px;
  }
  div.close-header
  {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  div.close-header button
  {
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: .2s;
  }
  div.close-header button img
  {
    width: 60%;
  }
  .modal-initiation .body
  {
    margin-top: 140px;
    height: calc( 100% - 130px );
  }
  
  /******************* área de informação **********************/
  .show-information
  {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #6e6e70;
  }
  .show-information div
  {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 1.6em;
    width: 100%;
    margin-left: 5%;
    padding: 0 10px;
  }

  /***************** área de escolha de sala *******************/
  .new-game
  {
    display: block;
    text-align: center;
    width: 100%;
    padding: 0.3em;
    font-size: 1.4em;
    border-bottom: 1px solid #6e6e70;
  }
  .new-game input[type=radio]
  {
    border: 0px;
    width: 3.3%;
    height: 2em;
    margin-left: 2em;
  }
  .get-in-game
  {
    display: block;
    text-align: center;
    font-size: 1.4em;
    width: 100%;
    padding: 0.3em;
  }
  .get-in-game input
  {
    width:45%;
    height: 35px;
    font-size: 1em;
  }
  .new-game button,
  .get-in-game button
  {
    font-size: 1.3rem;
    font-weight: 800;
    padding: 0.3em 1em;
    margin: 1em;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #02135e;
    color: #0625b3;
  }

  /******************* demais estilos *********************/
  .show-information label,
  .new-game label,
  .get-in-game label
  {
    font-size: 1.5em;
  }
  .disabled
  {
    opacity: .2;
  }
</style>