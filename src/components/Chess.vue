<template>
    <!-- VISÃO DO JOGADOR PEÇAS BRANCAS-->
    <div v-if="player=='branco'" class="containerFull">
        <div :class="{'blur-content': this.isModalIniciacaoVisible}">
            <!-- código do botão terá q sair futuramente -->
            <button @click="showModal">Mostrar modal iniciação</button>
            <button @click="showResult">Mostrar resultado</button>
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
                    <div id="A8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/torre_preto.png') + ')' }"></div>
                    <div id="B8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/cavalo_preto.png') + ')' }"></div>
                    <div id="C8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/bispo_preto.png') + ')' }"></div>
                    <div id="D8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/rainha_preto.png') + ')' }"></div>
                    <div id="E8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/rei_preto.png') + ')' }"></div>
                    <div id="F8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/bispo_preto.png') + ')' }"></div>
                    <div id="G8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/cavalo_preto.png') + ')' }"></div>
                    <div id="H8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/torre_preto.png') + ')' }"></div>
                </div>
                <div class="row line-2">
                    <div id="A7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="B7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="C7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="D7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="E7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="F7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="G7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="H7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
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
                    <div id="A4" @click ="getPosition($event)" ></div>
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
                    <div id="G3" @click ="getPosition($event)" disabled = "true"></div>
                    <div id="H3" @click ="getPosition($event)"></div>
                </div>
                <div class="row line-1">
                    <div id="A2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="B2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="C2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="D2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="E2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="F2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="G2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="H2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                </div>
                <div class="row line-2">
                    <div id="A1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/torre_branco.png') + ')' }"></div>
                    <div id="B1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/cavalo_branco.png') + ')' }"></div>
                    <div id="C1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/bispo_branco.png') + ')' }"></div>
                    <div id="D1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/rainha_branco.png') + ')' }"></div>
                    <div id="E1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/rei_branco.png') + ')' }"></div>
                    <div id="F1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/bispo_branco.png') + ')' }"></div>
                    <div id="G1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/cavalo_branco.png') + ')' }"></div>
                    <div id="H1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/torre_branco.png') + ')' }"></div>
                </div>
            </div>
        </div>
        <modal-iniciacao
            ref="modalIniciacao"
            v-show="isModalIniciacaoVisible"
        />
        <modalResultado ref="modalResultado" v-show="isModalResultadoVisible"/>
    </div>
    <!-- VISÃO DO JOGADOR PEÇAS PRETAS -->
    <div v-else class="containerFull">
        <div :class="{'blur-content': this.isModalIniciacaoVisible}">
            <!-- código do botão terá q sair futuramente -->
            <button @click="showModal">Mostrar modal iniciação</button>
            <div class="horizontal-position">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
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
                <div class="row line-2">
                    <div id="A1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/torre_branco.png') + ')' }"></div>
                    <div id="B1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/cavalo_branco.png') + ')' }"></div>
                    <div id="C1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/bispo_branco.png') + ')' }"></div>
                    <div id="D1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/rainha_branco.png') + ')' }"></div>
                    <div id="E1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/rei_branco.png') + ')' }"></div>
                    <div id="F1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/bispo_branco.png') + ')' }"></div>
                    <div id="G1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/cavalo_branco.png') + ')' }"></div>
                    <div id="H1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/torre_branco.png') + ')' }"></div>
                </div>
                <div class="row line-1">
                    <div id="A2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="B2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="C2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="D2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="E2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="F2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="G2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="H2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
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
                    <div id="A7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="B7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="C7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="D7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="E7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="F7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="G7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="H7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                </div>
                <div class="row line-1">
                    <div id="A8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/torre_preto.png') + ')' }"></div>
                    <div id="B8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/cavalo_preto.png') + ')' }"></div>
                    <div id="C8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/bispo_preto.png') + ')' }"></div>
                    <div id="D8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/rainha_preto.png') + ')' }"></div>
                    <div id="E8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/rei_preto.png') + ')' }"></div>
                    <div id="F8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/bispo_preto.png') + ')' }"></div>
                    <div id="G8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/cavalo_preto.png') + ')' }"></div>
                    <div id="H8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/torre_preto.png') + ')' }"></div>
                </div>   
            </div>
        </div>
        <modal-iniciacao
            ref="modalIniciacao"
            v-show="isModalIniciacaoVisible"
        />
        <modalResultado ref="modalResultado" v-show="isModalResultadoVisible"/>
    </div>
</template>

<script>
    import modalIniciacao from "./Modal-iniciacao";
    import modalResultado from "./Modal-resultado";

    export default {
        name: 'Chess',
        components: { 
            modalIniciacao,
            modalResultado 
        },
        data () {
            return {
                movePhase: false,
                player : "branco",
                isModalIniciacaoVisible: false,
                isModalResultadoVisible: false,
                previouspos:""
            }
        },
        mounted(){
            // iniciar modal de iniciação ao carregar página
            this.$refs.modalIniciacao.show().then((result) =>{
                if(result){
                    this.isModalIniciacaoVisible = false;
                }
            });
            this.isModalIniciacaoVisible = true;
        },
        methods: { 
            // função para mostrar modal de iniciação - DEVE SER EXCLUIDO POSTERIORMENTE
            showModal() {
                this.$refs.modalIniciacao.show().then((result) =>{
                    if(result){
                        this.isModalIniciacaoVisible = false;
                    }
                })
                this.isModalIniciacaoVisible = true;
            },
            showResult() {
                const result = 'win';

                this.$refs.modalResultado.gameResult({ result }).then((response) =>{
                    if(response) this.isModalResultadoVisible = true;
                    else this.isModalResultadoVisible = false;
                });
            },
            //função de gerenciamento da escolha de peça
            getPosition:function(ev){
                console.log(document.getElementById(ev.target.id).style.backgroundImage)
                if(!this.movePhase) {
                    if(ev.target.style.backgroundImage != ""){    
                        let pos = ev.target.id ;
                        this.previouspos = ev.target.id 
                        let jogada = {posicao:"", peca:""};
                        jogada.peca = ev.target.style.backgroundImage;
                        this.movePhase = true;
                        jogada.posicao = pos ;
                        // DEVE SER CRIADO UMA VARIAVEL EM PROPRIEDADES PARA AJUSTAR O CAMINHO DA API
                        fetch("http://localhost:3333/jogos/0/pecas/"+pos+"/possiveis-jogadas").then(response => response.json()
                        ).then(
                            json => {
                                if(json.data != null){
                                    json.data.forEach(this.paintNextPos)
                                    localStorage.setItem("positions",JSON.stringify(json.data))
                                }
                            } 
                        ).then(localStorage.setItem("jogada",JSON.stringify(jogada))); 
                    }else{
                        return;
                    }
                }else{
                    let jogada =JSON.parse( localStorage.getItem("jogada"));
                    document.getElementById(this.previouspos).style.backgroundImage = "";
                    ev.target.style.backgroundImage = jogada.peca;
                    var pos=localStorage.getItem("positions")
                    pos= JSON.parse(pos)
                    if(this.removePaint != null){
                        pos.forEach(this.removePaint)
                    } 
                    this.movePhase = false;
                }
            },
            // função para pintar as casas onde a peça pode ser movida
            paintNextPos:function(item){
                console.log(item.casa)
                 
                 document.getElementById(item.casa.casa).classList.add("greenie");
            },
            // função para remover a pintura de casas onde peça pode ser movida
            removePaint:function(item){  
                 document.getElementById(item.casa.casa).classList.remove("greenie");
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
    .greenie{
        background:#66ff99!important;
        pointer-events: all !important;
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
        background-image:-moz-linear-gradient();        
        background-repeat: no-repeat;
        background-position-y: center;
        background-position-x: right;
        background-size: 100%;
    }
    .row img
    {
        width: 100%;
        user-select: none;
    }
    .row div:first-child {
        border-left: 0;
    }
    .line-1 div:nth-child(2n+1),
    .line-2 div:nth-child(2n)
    {
        background-color: #8B4513;
    }
    .line-1 div:nth-child(2n),
    .line-2 div:nth-child(2n+1)
    {
        background-color: #FFEBCD;
    }

    /********************* demais estilos ***********************/
    .blur-content{
        filter: blur(5px); 
    }
</style>