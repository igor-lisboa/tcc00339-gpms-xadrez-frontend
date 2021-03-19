<template>
  <transition name="modal-fade">
    <div class="modal-confirmation">
      <div class="modal-confirmation-container"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div class="header">
            <div class="title-page" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/title_page.png') + ')' }">
                <img src="../assets/imgs/dog_chess_confirm.png">
                <span>{{title}}</span>
            </div>
            <div class="close-header">
                <button @click="cancelar">
                    <img src="../assets/imgs/select_checkbox.svg">
                </button>
            </div>
        </div>
        <div class="body">
            <div class="message">
                <label>{{message}}</label>
               <div>
                   <input type="radio" name="optJogo" value="branco" checked> branco 
                    <input type="radio" name="optJogo" value="preto"> preto
                    
                </div>   
                <div>
                 
                  <button class="confirm" @click="confirmar">SIM</button> 
                  <button class="cancel" @click="cancelar">NÃO</button>
                </div>
            </div>          
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'modalConfirmation',
    data () {
      return {
        type: "",
        title: "",
        message: "",
        codeRoom: "",
        resolvePromise: undefined,
        rejectPromise: undefined,
        pieceColor : ""
      }
    },
    methods: {
        // função de criação do modal de confirmação
        show(opts = {}) {
            this.title = opts.title;
            this.message = opts.message;
            this.type = opts.type;
            this.codeRoom = opts.codeRoom;
            return new Promise((resolve, reject) => {
                this.resolvePromise = document.querySelectorAll("input[name=optJogo]:checked")[0].value;
                this.rejectPromise = reject;
            })
        },
        // função para evento de confirmação
        confirmar() {
            //usar a variável type = 'create' para criar sala
            //usar a variável type = 'enter' e codeRoom para entrar numa sal
            localStorage.setItem("color",document.querySelectorAll("input[name=optJogo]:checked")[0].value);
        },
        // função para evento de desaprovação
        cancelar() {
            this.resolvePromise(false);
        }
    }
  };
</script>

<style>
  /******************* Estrutura do modal **********************/
  .modal-confirmation
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
  .modal-confirmation-container
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
  .modal-confirmation .title-page
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
  .modal-confirmation .title-page img
  {
    margin: 0 1em 0 1em;
    width: 20%;
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
  .modal-confirmation .body
  {
    margin-top: 140px;
    height: calc( 100% - 130px );
  }

  /******************** área de escolha **********************/
  .message
  {
    display: block;
    text-align: center;
    width: 100%;
    padding: 0.3em;
    font-size: 1.8em;
  }
  .message button
  {
    font-size: 1.2rem;
    font-weight: 800;
    width: 35%;
    padding: 0.3em 1em;
    margin: 2em;
    cursor: pointer;
  }
  .confirm
  {
    background-color: transparent;
    border: 1px solid #03d627;
    color: #06b153;
  }
  .cancel
  {
    background-color: transparent;
    border: 1px solid #f80606;
    color: #db2209;
  }
</style>