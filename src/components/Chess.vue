<template>
    <div class="containerFull">
        <div :class="{'blur-content': this.isModalIniciacaoVisible}">
            <!-- código do botão terá q sair futuramente -->
            <button @click="showModal">Mostrar modal iniciação</button>
        <div class="horizontal-position">
            <div>8</div>
            <div>7</div>
            <div>6</div>
            <div>5</div>
            <div>4</div>
            <div>3</div>
            <div>2</div>
            <div>1</div>
        </div>
        <div class="vertical-position">
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
            <div>E</div>
            <div>F</div>
            <div>G</div>
            <div>H</div>
        </div>
        <div class="container">
            <div class="row line-1">
                <div id="A8" @click ="getPosition($event)">♜</div>
                <div id="B8" @click ="getPosition($event)">♞</div>
                <div id="C8" @click ="getPosition($event)">♝</div>
                <div id="D8" @click ="getPosition($event)">♛</div>
                <div id="E8" @click ="getPosition($event)">♚</div>
                <div id="F8" @click ="getPosition($event)">♝</div>
                <div id="G8" @click ="getPosition($event)">♞</div>
                <div id="H8" @click ="getPosition($event)">♜</div>
            </div>
            <div class="row line-2">
                <div id="A7" @click ="getPosition($event)">♟</div>
                <div id="B7" @click ="getPosition($event)">♟</div>
                <div id="C7" @click ="getPosition($event)">♟</div>
                <div id="D7" @click ="getPosition($event)">♟</div>
                <div id="E7" @click ="getPosition($event)">♟</div>
                <div id="F7" @click ="getPosition($event)">♟</div>
                <div id="G7" @click ="getPosition($event)">♟</div>
                <div id="H7" @click ="getPosition($event)">♟</div>
            </div>
            <div class="row line-1">
                <div id="A6" @click ="getPosition($event)"></div>
                <div id="B6" @click ="getPosition($event)"></div>
                <div id="C6" @click ="getPosition($event)"></div>
                <div id="D6" @click ="getPosition($event)"></div>
                <div id="E6" @click ="getPosition($event)"></div>
                <div id="F6" @click ="getPosition($event)"></div>
                <div id="G6" @click ="getPosition($event)"></div>
                <div id="H6" @click ="getPosition($event)"></div>
            </div>
            <div class="row line-2">
                <div id="A5" @click ="getPosition($event)"></div>
                <div id="B5" @click ="getPosition($event)"></div>
                <div id="C5" @click ="getPosition($event)"></div>
                <div id="D5" @click ="getPosition($event)"></div>
                <div id="E5" @click ="getPosition($event)"></div>
                <div id="F5" @click ="getPosition($event)"></div>
                <div id="G5" @click ="getPosition($event)"></div>
                <div id="H5" @click ="getPosition($event)"></div>
            </div>
            <div class="row line-1">
                <div id="A4" @click ="getPosition($event)"></div>
                <div id="B4" @click ="getPosition($event)"></div>
                <div id="C4" @click ="getPosition($event)"></div>
                <div id="D4" @click ="getPosition($event)"></div>
                <div id="E4" @click ="getPosition($event)"></div>
                <div id="F4" @click ="getPosition($event)"></div>
                <div id="G4" @click ="getPosition($event)"></div>
                <div id="H4" @click ="getPosition($event)"></div>
            </div>
            <div class="row line-2">
                <div id="A3" @click ="getPosition($event)"></div>
                <div id="B3" @click ="getPosition($event)"></div>
                <div id="C3" @click ="getPosition($event)"></div>
                <div id="D3" @click ="getPosition($event)"></div>
                <div id="E3" @click ="getPosition($event)"></div>
                <div id="F3" @click ="getPosition($event)"></div>
                <div id="G3" @click ="getPosition($event)"></div>
                <div id="H3" @click ="getPosition($event)"></div>
            </div>
            <div class="row line-1">
                <div id="A2" @click ="getPosition($event)">♙</div>
                <div id="B2" @click ="getPosition($event)">♙</div>
                <div id="C2" @click ="getPosition($event)">♙</div>
                <div id="D2" @click ="getPosition($event)">♙</div>
                <div id="E2" @click ="getPosition($event)">♙</div>
                <div id="F2" @click ="getPosition($event)">♙</div>
                <div id="G2" @click ="getPosition($event)">♙</div>
                <div id="H2" @click ="getPosition($event)">♙</div>
            </div>
            <div class="row line-2">
                <div id="A1" @click ="getPosition($event)">♖</div>
                <div id="B1" @click ="getPosition($event)">♘</div>
                <div id="C1" @click ="getPosition($event)">♗</div>
                <div id="D1" @click ="getPosition($event)">♕</div>
                <div id="E1" @click ="getPosition($event)">♔</div>
                <div id="F1" @click ="getPosition($event)">♗</div>
                <div id="G1" @click ="getPosition($event)">♘</div>
                <div id="H1" @click ="getPosition($event)">♖</div>
            </div>
        </div>
        </div>
        <modalIniciacao
            v-show="isModalIniciacaoVisible"
            @close="closeModal"
        />
    </div>
</template>

<script>
    import modalIniciacao from "./Modal-iniciacao";

    export default {
        name: 'Chess',
        components: { 
            modalIniciacao 
        },
        data () {
                return {
                movePhase: false,
                isModalIniciacaoVisible: true
                }
            },
        methods: {
            showModal() {
                this.isModalIniciacaoVisible = true;
            },
            closeModal() {
                this.isModalIniciacaoVisible = false;
            },
            getPosition:function(ev){
                if(!this.movePhase) {
                    if(ev.target.innerText !=""){    
                        let pos = ev.target.id ;
                        let jogada={posicao:"",peca:""};
                        jogada.peca = ev.target.innerText;
                        ev.target.innerText= ""
                        this.movePhase = true;
                        jogada.posicao = pos ;
                        localStorage.setItem("jogada",JSON.stringify(jogada));
                    }else{
                        console.log(this.movePhase);
                        return;
                    }
                }else{
                    let jogada =JSON.parse( localStorage.getItem("jogada"));
                    ev.target.innerText = jogada.peca;
                    this.movePhase = false;
                }
            }

        }
    }
</script>

<style>
    *, *::before, *::after{
        box-sizing: border-box; 
        -webkit-box-sizing: border-box; 
        -moz-box-sizing: border-box; 
        -o-box-sizing: border-box;  
    }

    .containerFull {
        margin: 0 auto;
        width: 600px;
        margin: 0 auto;
        margin-top: 5px
    }

    /******** Indicação das casas no tabuleiro ********/
    .vertical-position {
        float: left;
        text-align: center;
        font-size: 2em;
        justify-content: space-between;
        display: flex;
    }
    .vertical-position div
    {
        float: left;
        width: 82px;
    }
    .horizontal-position
    {
        position:absolute;
        margin-left: -30px;
        margin-top:62px;
        font-size: 2em;
        text-align: center;
    }
    .horizontal-position div
    {
        height: 82px;
    }

    /*******************  Tabuleiro ********************/
    .container {
        border: 3px solid #000;
        width: 662px;
        height: 662px;
        border-radius: 5px;
        cursor: pointer;
        float: left;
    }
    .row {
        clear: both;
    }
    .row div {
        float: left;
        width: 82px;
        height: 82px;
        border-left: 1.5px solid #000;
        border-bottom: 1.5px solid #000;
        text-align: center;
        font-size: 350%;
    }
    .row div:first-child {
        border-left: 0;
    }
    .line-1 div:nth-child(2n+1)  {
        background: #aaa;
    }
    .line-2 div:nth-child(2n)  {
        background: #aaa;
    }

    .blur-content{
  filter: blur(5px); 
}
</style>