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
                <span>Promoção do Peão</span>
            </div>
        </div>
        <div class="body">
            <div class="message">
                <label>Escolha a peça a qual o Peão será promovido:</label>
                <div class="select-piece-area" v-if="pieceColor=='0'">
                  <input type="radio" id="rainha_branco" name="optPromoB" value="1" checked> 
                    <label for="rainha_branco" title="Rainha">
                      <img src="../assets/imgs/pecas/rainha_branco.png" >
                    </label>
                  <input type="radio" id="torre_branco" name="optPromoB" value="2">
                    <label for="torre_branco"  title="Torre">
                      <img src="../assets/imgs/pecas/torre_branco.png">
                    </label> 
                  <input type="radio" id="bispo_branco" name="optPromoB" value="3">
                    <label for="bispo_branco" title="Bispo">
                      <img src="../assets/imgs/pecas/bispo_branco.png">
                    </label> 
                  <input type="radio" id="cavalo_branco" name="optPromoB" value="4">
                    <label for="cavalo_branco"  title="Cavalo">
                      <img src="../assets/imgs/pecas/cavalo_branco.png">
                    </label>    
                </div>
                <div class="select-piece-area" v-else> 
                  <input type="radio" id="rainha_preto" name="optPromoP" value="1" checked> 
                    <label for="rainha_preto" title="Rainha">
                      <img src="../assets/imgs/pecas/rainha_preto.png" >
                    </label>
                  <input type="radio" id="torre_preto" name="optPromoP" value="2">
                    <label for="torre_preto" title="Torre">
                      <img src="../assets/imgs/pecas/torre_preto.png">
                    </label> 
                  <input type="radio" id="bispo_preto" name="optPromo" value="3">
                    <label for="bispo_preto"  title="Bispo">
                      <img src="../assets/imgs/pecas/bispo_preto.png">
                    </label> 
                  <input type="radio" id="cavalo_preto" name="optPromoP" value="4">
                    <label for="cavalo_preto" title="Cavalo">
                      <img src="../assets/imgs/pecas/cavalo_preto.png">
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
        resolvePromise: undefined,
        rejectPromise: undefined,
        pieceColor : undefined
      }
    },
    methods: {
        // função de criação do modal de promoção do peão
        show(pieceColor) {
            this.pieceColor = pieceColor
            return new Promise((resolve, reject) => {
                this.resolvePromise = resolve;
                this.rejectPromise = reject;
            })
        },
        // função para evento de confirmação
        confirmar() {
          let colorSTR = this.pieceColor == '0' ? "B" : "P";

          let result = {
            pieceValue: document.querySelectorAll("input[name=optPromo" + colorSTR +"]:checked")[0].value,
            pieceBackground: document.querySelectorAll("input[name=optPromo" + colorSTR +"]:checked")[0].id
          }

          this.resolvePromise(result);
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
  /******************** opções de cor **********************/
  .select-piece-area 
  {
    margin: 10px;
    display: flex;
  }
  .select-piece-area input[type="radio"] 
  {
    opacity: 0;
    position: fixed;
    margin: 5%;
  }
  .select-piece-area label
  {
    display: inline-block;
    background-color: #ddd;
    margin: 10px;
    font-family: sans-serif, Arial;
    font-size: 16px;
    border: 2px solid #444;
    border-radius: 4px;
  }
  .select-piece-area label:hover 
  {
    background-color: #dfd;
  }
  .select-piece-area label img
  {
    width: 90%;
  }
  .select-piece-area input[type="radio"]:checked + label 
  {
    background-color: #bfb;
    border-color: #4c4;
  }
</style>