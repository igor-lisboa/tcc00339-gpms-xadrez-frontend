<template>
    <!-- VISÃO DO JOGADOR PEÇAS BRANCAS-->
    <div v-if="player=='branco'" class="containerFull">
        <div :class="{'blur-content': this.isModalIniciacaoVisible || this.isModalChoosePieceVisible || this.isModalWaitVisible}">
            <!-- código do botão terá q sair futuramente -->
            <!-- <button @click="showResult">Mostrar resultado</button> -->
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
            <div class="turn">
                <div class="turn-square" :class="this.turn ? 'my-turn' : 'opponent-turn'" >
                    <div class="centered" :class="{'black':  this.blackTurn}">
                        <h3 v-if="this.turn">Sua vez</h3>
                        <h3 v-else>Vez do adversário</h3>
                        <span v-if="this.turn">Realize sua jogada</span>
                        <span v-else>Espere sua vez de jogar</span>
                    </div> 
                </div>
            </div>
        </div>
        <modal-iniciacao
            ref="modalIniciacao"
            v-show="isModalIniciacaoVisible"
        />
        <modal-choose-piece
            ref="modalChoosePiece"
            v-show="isModalChoosePieceVisible"
        />
        <modalResultado ref="modalResultado" v-show="isModalResultadoVisible"/>
        <modalWait ref="modalWait" v-show="isModalWaitVisible"/>
        <toast ref="toast"/>
    </div>
    <!-- VISÃO DO JOGADOR PEÇAS PRETAS -->
    <div v-else class="containerFull">
        <div :class="{'blur-content': this.isModalIniciacaoVisible || this.isModalChoosePieceVisible || this.isModalWaitVisible}">
            <!-- código do botão terá q sair futuramente -->
            <!-- <button @click="showResult">Mostrar resultado</button> -->
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
            <div class="turn">
                <div class="turn-square" :class="this.turn ? 'my-turn' : 'opponent-turn'" >
                    <div class="centered" :class="{'black':  this.blackTurn}">
                        <h3 v-if="this.turn">Sua vez</h3>
                        <h3 v-else>Vez do adversário</h3>
                        <span v-if="this.turn">Realize sua jogada</span>
                        <span v-else>Espere sua vez de jogar</span>
                    </div> 
                </div>
            </div>
        </div>
        <modal-iniciacao
            ref="modalIniciacao"
            v-show="isModalIniciacaoVisible"
        />
        <modal-choose-piece
            ref="modalChoosePiece"
            v-show="isModalChoosePieceVisible"
        />
        <modalResultado ref="modalResultado" v-show="isModalResultadoVisible"/>
        <modalWait ref="modalWait" v-show="isModalWaitVisible"/>
        <toast ref="toast"/>
    </div>
</template>

<script>
    import modalIniciacao from "./Modal-iniciacao";
    import modalChoosePiece from "./Choose-piece";
    import modalResultado from "./Modal-resultado";
    import modalWait from "./Modal-wait";
    import toast from "./Toast";
    import http from './config/Http';
    import io from 'socket.io-client';
    
    export default {
        name: 'Chess',
        components: { 
            modalIniciacao,
            modalChoosePiece, 
            modalResultado,
            modalWait,
            toast 
        },
        data () {
            return {
                //modais
                isModalIniciacaoVisible: false,
                isModalResultadoVisible: false,
                isModalChoosePieceVisible: false,
                isModalWaitVisible: false,
                //configuração jogo
                idGame: undefined,
                gameMode: undefined,
                movePhase: false,
                turn: undefined,
                blackTurn: false,
                //configuração jogador
                player: "branco",
                playerconf:{ladoId:0, tipoId:0}, 
                //configuração jogadas
                jogada: {posicaoPrevia:"", posicao:"", peca:"", posicoes:{}}                
            }
        },
        destroyed(){
            this.socket.on("disconnect");
        },
        mounted(){
            this.showModalIniciacao();                 // iniciar modal de iniciação ao carregar página    
        },
        methods: { 

            // função para mostrar modal de iniciação - DEVE SER EXCLUIDO POSTERIORMENTE
            showModalIniciacao() {

                this.$refs.modalIniciacao.show().then(async(result) =>{
                    if(result){

                        this.isModalIniciacaoVisible = false;
                        
                        if ( localStorage.getItem("acao") == "criacao" ){                      // caso tenha criado uma sala
                        
                            this.$refs.modalChoosePiece.show({
                                title: 'Escolha de cor das peças',
                                message: 'Deseja qual cor de peça para iniciar o jogo?',
                                type: 'create',
                                codeRoom: undefined
                            }).then( async (result) =>{
                                if(result) {

                                    this.player = result;
                                    result == "branco" ? this.playerconf.ladoId=0 : this.playerconf.ladoId=1;
                                    this.turn = result == "branco" ? true : false;

                                    try
                                    {
                                        await http.post("jogos/"+localStorage.getItem("idjogo")+"/jogadores",this.playerconf)         //chama endpoint de escolha de peça
                                            .then(response=>response)
                                                .then(json=> localStorage.setItem("ladoId",json.data.data.id));
                                        this.idGame = localStorage.getItem("idjogo");
                                        this.gameMode = localStorage.getItem("tipoJogo");

                                        this.createSocket();                                                            //iniciar socket jogoId-lado

                                        // mostra notificação de sucesso ao criar sala
                                        this.$refs.toast.show({
                                            message: 'Criado jogo na sala de código ' + this.idGame,
                                            type: 'success'
                                        });

                                        if(this.gameMode == 0){
                                            this.$refs.modalWait.show(this.idGame);
                                            this.isModalWaitVisible = true;
                                        }

                                    }
                                    catch(error)
                                    {
                                        // mostra notificação de erro ao escolher cor da peça
                                        this.$refs.toast.show({
                                            message: 'Erro ao criar sala (escolha de cor de peça)',
                                            type: 'error'
                                        });
                                        this.isModalIniciacaoVisible = true;      
                                    }
                                    
                                    localStorage.clear();
                                }                              
                                this.isModalChoosePieceVisible = false;
                            }); 
                            this.isModalChoosePieceVisible = true;
                        }

                        if( localStorage.getItem("acao") === "entrada")                           // caso tenha entrado em uma sala
                        {
                            let result = localStorage.getItem("ladoId")==0 ? "branco" : "preto"; 
                            this.player = result;
                            this.turn = result == "branco" ? true : false;

                            this.playerconf.ladoId = localStorage.getItem("ladoId");
                            this.playerconf.tipoId = 0;
                          
                            //let playerconf = {ladoId: localStorage.getItem("ladoId"), tipoId:0, jogadorId: this.jogadorId};
                            try{
                            await http.post("jogos/"+localStorage.getItem("idjogo")+"/jogadores",this.playerconf)             //acessa endpoint de inclusão de jogador
                                .then(response=>response)
                                .then(json=> localStorage.setItem("ladoId",json.data.data.id));
                            }catch(error){
                                // mostra notificação de entrada na sala
                                this.$refs.toast.show({
                                    message: 'Erro ao entrar na sala',
                                    type: 'error'
                                });
                            }

                            //função de iniciar socket jogoId-lado
                            this.idGame = localStorage.getItem("idjogo");
                            this.gameMode = localStorage.getItem("tipoJogo");
                            localStorage.clear();

                            // mostra notificação de entrada na sala
                            this.$refs.toast.show({
                                message: 'Entrada na sala com sucesso',
                                type: 'success'
                            });

                            this.createSocket();                                                            //iniciar socket jogoId-lado
                        }
                    }
                });
                this.isModalIniciacaoVisible = true;
            },

            //função para mostrar modal de resultado da partida
            showResult() {
                const result = 'win';

                this.$refs.modalResultado.gameResult({ result }).then((response) =>{
                    if(response) this.isModalResultadoVisible = true;
                    else this.isModalResultadoVisible = false;
                });
            },

            //função de gerenciamento da escolha de peça
            async getPosition(ev){

                //verificar se é o turno do usuário
                if(!this.turn){
                    return;
                }

                // criação do headers da requisições
                const headers = {
                    'lado': this.playerconf.ladoId
                }

                if(!this.movePhase) {                            //fase de escolha de peça
                                                                 
                    if( ev.target.style.backgroundImage == "" ){       //caso não tenha escolhido uma casa sem peça
                        return;
                    }

                    if( !ev.target.style.backgroundImage.includes(this.player) ){   //caso não tenha escolhido uma de suas peças
                        return;
                    }
                    
                    this.jogada.posicaoPrevia = ev.target.id 
                    
                    this.jogada.peca = ev.target.style.backgroundImage;
                    this.jogada.posicao = ev.target.id;
                         

                    await http.get('jogos/' + this.idGame + '/pecas/' + this.jogada.posicao + '/possiveis-jogadas', { headers: headers }).then(response => response
                    ).then(
                        json => {
                            if(json.data != null){
                                json.data.data.forEach(this.paintNextPos);
                                this.jogada.posicoes = JSON.stringify(json.data.data);
                                this.movePhase = true;
                            }
                        } 
                    ); 
                    
                }else{    //fase de movimento de peça
                    
                    if( ev.target.style.backgroundImage.includes(this.player)  ){   //caso tenha escolhido outra de suas peças
                        
                        let pos = JSON.parse(this.jogada.posicoes)
                        
                        if(this.removePaint != null){
                            pos.forEach(this.removePaint)
                        } 

                        this.jogada.posicaoPrevia = ev.target.id 
                        
                        this.jogada.peca = ev.target.style.backgroundImage;
                        this.jogada.posicao = ev.target.id;

                        await http.get('jogos/' + this.idGame + '/pecas/' + this.jogada.posicao + '/possiveis-jogadas', { headers: headers }).then(response => response
                        ).then(
                            json => {
                                if(json.data != null){
                                    json.data.data.forEach(this.paintNextPos);
                                    this.jogada.posicoes = JSON.stringify(json.data.data);
                                    this.movePhase = true;
                                }
                            } 
                        ); 

                        return;
                    }

                    if( !ev.target.classList.contains("move") && !ev.target.classList.contains("catch") ){       //caso não tenha escolhido uma casa possível de realizar o movimento
                        return;
                    }

                    let actualPos = ev.target.id ;
                    document.getElementById(this.jogada.posicaoPrevia).style.backgroundImage = "";
                    ev.target.style.backgroundImage = this.jogada.peca;
                    await http.post('jogos/' + this.idGame + '/pecas/' + this.jogada.posicaoPrevia + '/move/' + actualPos +'?' + this.playerconf.ladoId,{},{ headers: headers })                 //acessa endpoint de criação de sala
                        .then( response => response);
                    let pos = JSON.parse(this.jogada.posicoes)
                    
                    if(this.removePaint != null){
                        pos.forEach(this.removePaint)
                    } 
                    this.movePhase = false;
                    this.turn = !this.turn;
                    this.blackTurn = !this.blackTurn;
                }
            },

            // função para pintar as casas onde a peça pode ser movida
            paintNextPos:function(item){
                
                if(document.getElementById(item.casa.casa).style.backgroundImage != "" ){
                    document.getElementById(item.casa.casa).classList.add("catch");
                }else{
                    document.getElementById(item.casa.casa).classList.add("move");
                }
                
            },

            // função para remover a pintura de casas onde peça pode ser movida
            removePaint:function(item){  
                document.getElementById(item.casa.casa).classList.remove("move");
                document.getElementById(item.casa.casa).classList.remove("catch");
                 
                this.movePhase = false;
            },

            //criação do socket
            createSocket: function(){          
            this.socket = io(process.env.VUE_APP_API_URL, {query:"jogador=" + this.idGame + "-" + this.playerconf.ladoId});
            this.socket.on("connect", () => {

                this.socket.on('adversarioEntrou', () =>{
                    this.isModalWaitVisible = false;
                })

                this.socket.on("jogadaRealizada",(data) =>{
                    document.getElementById(data.casaDestino.casa).style.backgroundImage = document.getElementById(data.casaOrigem.casa).style.backgroundImage;
                    document.getElementById(data.casaOrigem.casa).style.backgroundImage = "";
                    this.turn = !this.turn;
                    this.blackTurn = !this.blackTurn;
                })
            });

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
        overflow: hidden; 
    }

    .containerFull {
        width: 100%;
        margin-top: 5px;
        
    }

    /******** Indicação das casas no tabuleiro ********/
    .vertical-position {
        float: right;
        text-align: center;
        font-size: 2em;
        justify-content: space-between;
        display: flex;
        margin-left: 22%;
        position: absolute;
    }
    .vertical-position div
    {
        float: right;
        width: 82px;
    }
    .horizontal-position
    {
        position: absolute;
        margin-left: 20%;
        margin-top: 62px;
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
        float: right;
        position: absolute;
        margin-top: 40px;
        margin-left: 22%;
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
    .move
    {
        background-color:#66ff99 !important;
        pointer-events: all !important;
    }
    .catch
    {
        background-color:#ff7866 !important;
        pointer-events: all !important;
    }

    /********************* demais estilos ***********************/
    .blur-content{
        filter: blur(5px); 
    }

    /****************** card de turno ************************/
    .turn{
        float: right;
        text-align: center;
        font-size: 2em;
        justify-content: space-between;
        display: flex;
        margin-left: 70%;
        position: absolute;
        width: 25%;
        height: 0;
        padding-bottom: 38%;
    }
    .turn-square{
        position: absolute;
        text-align: center;
        width: 100%;
        height: 25%;
        border-radius: 5px;
    }
    .turn-square:before {
        display: inline-block;
        height: 10%; 
        vertical-align: middle;
        margin-right: -0.25em;
    }
    .my-turn{
        border: 5px solid #03ff2d;
    }
    .opponent-turn{
        border: 5px solid #ff0404;
    }
    
    .centered {
        display: inline-block;
        vertical-align: middle;
        width: 100%;
        height: 100%;
    }
    .centered h3,
    .centered span
    {
        margin: 5%;
    }
    .black
    {
        color: #ffff;
        background-color:#000;
    }
</style>