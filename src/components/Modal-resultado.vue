<template>
  <div>
    <transition name="modal-fade">
      <div class="modal-result">
        <div class="modal-result-container"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <div class="header">
              <div class="title-page" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/title_page.png') + ')' }">
                  <img src="../assets/imgs/dog_chess.png" alt="logo">
                  <span>{{title}}</span>
              </div>
          </div>
          <div class="body">
              <div class="message">
                  <label>{{message}}</label>
                  <div>
                      <button class="rematch">REVANCHE</button>
                      <button class="play-again" @click="newGame">NOVO JOGO</button> 
                  </div>
              </div>          
          </div>
        </div>
      </div>
    </transition>
    <modalInitiation ref="modalIniciacao" v-show="isIniciationVisible"/>
  </div>
</template>

<script>
    import modalInitiation from "./Modal-iniciacao";

    export default {
        data() {
            return { 
              title: null,
              message: '',
              isIniciationVisible: false
            }
        },
        name: 'modalResultado',
        components: {
            modalInitiation
        },
        methods: {
            newGame() {
                this.isIniciationVisible = true;
            },
            gameResult(event) {
              const { result } = event;

              switch(result) {
                case 'win':
                  this.title = 'Vitória';
                  break;
                case 'lose':
                  this.title = 'Perdeu';
                  break;
                case 'tie':
                  this.title = 'Empatou';
                  break;
              }

              return Promise.resolve(result);
            }
        },
    }

</script>

<style>
  .modal-result {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, .4);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-result-container {
    display: flex;
    flex-direction: column;
    width: 750px;
    background-color: #fff;
    border-radius: 4px;
    padding: 1.5em;
    box-shadow: 1px 1px 5px -1px #000000ad;
    position: relative;
  }
  .modal-result .title-page {
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
  .modal-result .title-page img {
    margin: 0 1em 0 1em;
    width: 20%;
    border-radius: 80px;
  }
  div.close-header {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  div.close-header button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: .2s;
  }
  div.close-header button img {
    width: 60%;
  }
  .modal-result .body {
    margin-top: 140px;
    height: calc( 100% - 130px );
  }
  .message {
    display: block;
    text-align: center;
    width: 100%;
    padding: 0.3em;
    font-size: 1.8em;
  }
  .message button {
    font-size: 1.2rem;
    font-weight: 800;
    width: 35%;
    padding: 0.3em 1em;
    margin: 2em;
    cursor: pointer;
  }
  .play-again {
    background-color: transparent;
    border: 1px solid #20b198;
    color: #20b198;
  }
  .rematch {
    background-color: transparent;
    border: 1px solid #fc4e32;
    color: #fc4e32;
  }
</style>
