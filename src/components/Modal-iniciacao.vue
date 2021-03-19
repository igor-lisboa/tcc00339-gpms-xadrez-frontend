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
                    <input type="radio" name="optJogo" value="JxJ" checked> JxJ
                    <input type="radio" name="optJogo" value="JxIA"> JxIA
                    <input type="radio" name="optJogo" value="IAxIA"> IAxIA
                  <button @click="criarSala">Iniciar agora</button>
                </div>
            </div>
            <div class="get-in-game">
                <label>Entrar em um jogo:</label>
                <div>
                  <input placeholder="Código da sala" @keyup="keyupInput($event)" v-model="valueInput">
                  <button :class="{'disabled': this.disabledButton}" @click="entrarSala">Entrar</button>
                </div>
            </div>           
        </div>
      </div>
    </div>
  </transition>
  <modalConfirmation ref="modalConfirmation" v-show="isConfirmationVisible"/>

  </div>
</template>

<script>
  import modalConfirmation from "./Modal-confirmation";
   
  export default {
    name: 'modalIniciacao',
    components: { 
      modalConfirmation
    },
    data () {
      return {
        showPrincipal: Boolean,
        valueInput: "",
        disabledButton: true,
        isConfirmationVisible: false,
        isChoosePieceVisible :false,
        resolvePromise: undefined,
        rejectPromise: undefined
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      // função de criação do modal de inicição
      show() {
        this.showPrincipal = true;
        this.valueInput = "";
        this.disabledButton = true;
        return new Promise((resolve, reject) => {
          this.resolvePromise = resolve;
          this.rejectPromise = reject;
        })
      },
      // função de evento de keyup do input de códgio de sala
      keyupInput($event) {
        this.valueInput = $event.target.value;
        if(this.valueInput != ""){
          this.disabledButton = false;
          return;
        }
          this.disabledButton = true;
      },
      
      async criarSala() {
        console.log( "Selecionado modo de jogo: " + document.querySelectorAll("input[name=optJogo]:checked")[0].value);

        this.$refs.modalConfirmation.show({
          title: 'Criação de sala',
          message: 'Deseja realmente criar uma nova sala para iniciar um jogo?',
          type: 'create',
          codeRoom: undefined
        }).then((result) =>{
          if (result) {
            alert('Você criou uma sala.');
            this.resolvePromise(result);
          } else {
            alert('Você decidiu não criar uma sala.');
            this.showPrincipal = true;
          }
          this.isConfirmationVisible = false;
        })
        this.showPrincipal = false;
        this.isConfirmationVisible = true;
      },
      //função para entrar numa sala de jogo
      entrarSala() {
        console.log( "Selecionado entrar na sala: " + this.valueInput);

        this.$refs.modalConfirmation.show({
          title: 'Entrar em sala',
          message: 'Deseja realmente entrar na sala ' + this.valueInput + ' para iniciar um jogo?',
          type: 'enter',
          codeRoom: this.valueInput
        }).then((result) =>{
          if (result) {
            alert('Você entrou na sala ' + this.valueInput + '.');
            this.resolvePromise(result);
          } else {
            alert('Você decidiu não entrar na sala' + this.valueInput + '.');
            this.showPrincipal = true;
            this.valueInput = "";
            this.disabledButton = true;
          }
          this.isConfirmationVisible = false;
        });
        this.showPrincipal = false;
        this.isConfirmationVisible = true;
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
    z-index: 9999999999;
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
    height: 130px;
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
    margin: 0 1em 0 1em;
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
    font-size: 1.4em;
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
  }
  .new-game button,
  .get-in-game button
  {
    font-size: 1.2rem;
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