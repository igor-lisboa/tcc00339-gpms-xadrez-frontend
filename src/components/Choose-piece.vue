<template>
  <transition name="modal-fade">
    <div class="modal-choose">
      <div class="modal-choose-container"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div class="header">
            <div class="title-page" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/title_page.png') + ')' }">
                <img src="../assets/imgs/dog_chess_confirm.png">
                <span>{{title}}</span>
            </div>
        </div>
        <div class="body">
            <div class="message">
                <label>{{message}}</label>
                <div class="select-color-area">
                  <input type="radio" id="branco" name="optPeca" value="branco" checked> 
                    <label for="branco" title="BRANCO">
                      <img src="../assets/imgs/pecas/rei_branco.png" >
                    </label> 
                  <input type="radio" id="preto" name="optPeca" value="preto">
                    <label for="preto"  title="PRETO">
                      <img src="../assets/imgs/pecas/rei_preto.png">
                    </label>  
                </div>   
                <div>
                  <button class="confirm" @click="confirmar">CONFIRMAR ESCOLHA</button> 
                </div>
            </div>          
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'modalChoose',
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
            return new Promise((resolve, reject) => {
                this.resolvePromise = resolve;
                this.rejectPromise = reject;
            })
        },
        // função para evento de confirmação
        confirmar() {
          this.resolvePromise(document.querySelectorAll("input[name=optPeca]:checked")[0].value);
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
  .modal-choose
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
  .modal-choose-container
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
  .modal-choose .title-page
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
  .modal-choose .title-page img
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
  .modal-choose .body
  {
    margin-top: 160px;
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

  /******************** opções de cor **********************/
  .select-color-area 
  {
    margin: 10px;
    display: flex;
  }
  .select-color-area input[type="radio"] 
  {
    opacity: 0;
    position: fixed;
    margin: 5%;
  }
  .select-color-area label
  {
    display: inline-block;
    background-color: #ddd;
    margin: 10px;
    font-family: sans-serif, Arial;
    font-size: 16px;
    border: 2px solid #444;
    border-radius: 4px;
  }
  .select-color-area label:hover 
  {
    background-color: #dfd;
  }
  .select-color-area label img
  {
    width: 30%;
  }
  .select-color-area input[type="radio"]:checked + label 
  {
    background-color: #bfb;
    border-color: #4c4;
  }
</style>