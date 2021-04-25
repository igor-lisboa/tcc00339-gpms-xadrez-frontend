<template>
  <div>
    <transition name="modal-fade">
      <div class="modal-result">
        <div class="modal-result-container"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
        <audio id="winSound" src='../assets/win_game.mp3' />
        <audio id="loseSound" src='../assets/lose_game.mp3' />
        <audio id="endSound" src='../assets/game_over.mp3' />
          <div class="header">
              <div class="title-page" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/title_page.png') + ')' }">
                <img src="../assets/imgs/dog_chess_win.png" v-if="result == 'win'">
                <img src="../assets/imgs/dog_chess_lose.png" v-if="result == 'lose'">
                <img src="../assets/imgs/dog_chess_draw.png" v-if="result == 'draw'">
                <span>{{title}}</span>
              </div>
          </div>
          <div class="body">
              <div class="message">
                  <label>{{message}}</label>
                  <div>
                    <button class="rematch" :class="{'disabled': result == 'win'}" :disabled="result == 'win'" @click="rematch">REVANCHE</button>
                    <button class="play-again" @click="newGame">NOVO JOGO</button> 
                  </div>
              </div>          
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'modalResultado',
    data() {
      return { 
        title: null,
        message: null,
        result: undefined,
        resolvePromise: undefined,
        rejectPromise: undefined
      }
    },
    methods: {
      // caso queira criar novo jogo em uma nova sala
      newGame() {
        this.resolvePromise("new");
      },
      
      // show modal
      gameResult( result, info ) {
        this.result = result;
        switch(result) {
          case 'win':
            this.title = 'Vitória';
            this.message = 'Coloca um sorriso no rosto! Você ganhou!'
            document.getElementById('winSound').play();
            break;
          case 'lose':
            this.title = 'Derrota';
            this.message = 'Não fica com raiva! Perder faz parte da vida!'
            document.getElementById('loseSound').play();
            break;
          case 'Desistência: Um jogador deixou a partida':
            this.result = 'win';
            this.title = 'Vitória';
            this.message = 'Vitória devido ao adversário fugir de medo!'
            document.getElementById('winSound').play();
            break;
          case "IA vitória":
            this.title = 'Vitória da IA';
            this.message = info + ' controlado pela IA! Mas isso era esperado...'
            document.getElementById('endSound').play();
            break;
          default:
            this.title = result;
            this.result = 'draw';
            this.message = 'Empate, né! Melhor que uma derrota...'
            document.getElementById('endSound').play();
            break;
        }
        return new Promise((resolve, reject) => {
          this.resolvePromise = resolve;
          this.rejectPromise = reject;
        })
      },

      // caso queira revanche
      rematch() {
        this.resolvePromise("rematch");
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
    height: 170px;
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
    width: 25%;
    border-radius: 90px;
  }
  .modal-result .body {
    margin-top: 170px;
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
  .disabled
  {
    opacity: .2;
  }
</style>
