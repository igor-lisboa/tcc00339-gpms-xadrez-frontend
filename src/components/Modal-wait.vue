<template>
  <transition name="modal-fade">
    <div class="modal-wait">
      <div class="modal-wait-container"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div class="header">
            <div class="title-page" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/title_page.png') + ')' }">
                <img src="../assets/imgs/dog_chess_wait.png">
                <span>{{title}}</span>
            </div>
        </div>
        <div class="body">
            <div class="message">
                <label>{{message}}</label>
            </div>          
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'modalWait',
    data () {
      return {
        title: "",
        message: ""
      }
    },
    methods: {
        // função de criação do modal de confirmação
        show(message) {
            this.title = "Esperando adversário...";
            this.message = message;
        }
    }
  };
</script>

<style>
  /******************* Estrutura do modal **********************/
  .modal-wait
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
  .modal-wait-container
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
  .modal-wait .title-page
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
  .modal-wait .title-page img
  {
    margin: 0 0.5em 0 0.5em;
    width: 22%;
    border-radius: 80px;
  }
  .modal-wait .body
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
</style>