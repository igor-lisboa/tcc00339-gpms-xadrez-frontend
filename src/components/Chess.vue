<template>
    <div class="containerFull">
        <div :class="{'blur-content': this.isModalIniciacaoVisible || this.isModalChoosePieceVisible || this.isModalWaitVisible}" class="content-height-blur">
             
            <div class="horizontal-position" v-if="player=='branco'">
                <div>8</div>
                <div>7</div>
                <div>6</div>
                <div>5</div>
                <div>4</div>
                <div>3</div>
                <div>2</div>
                <div>1</div>
            </div>
            <div class="horizontal-position" v-else>
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

            <div class="container" v-if="player=='branco'">
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
                    <div id="G3" @click ="getPosition($event)"></div>
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
            
            <div class="container" v-else>   
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

            <div class="informations" v-if="this.idGame">
                <img src="../assets/imgs/dog_in_chess.png" 
                    title='Desenvolvedores: 
                    Caio Wey 
                    Igor Lisboa 
                    Matheus Baldas 
                    Milena Veríssimo 
                    Victor Matheus Pereira 
                    Victor Marques'
                >
                <h3>SALA {{this.idGame}}</h3>
            </div>
            
            <div class="turn" v-if="this.idGame">
                <div class="turn-square" :class="this.turn ? 'my-turn' : 'opponent-turn'" >
                    <div class="centered" :class="{'black':  this.blackTurn}">
                        <h3 v-if="this.turn">Sua vez</h3>
                        <h3 v-else>Vez do adversário</h3>
                        <span v-if="this.turn">Realize sua jogada</span>
                        <span v-else>Espere sua vez de jogar</span>
                    </div> 
                </div>
            </div>

            <div class="button-area" v-if="this.idGame">
                <button class="des" :class="{'disabled': !this.turn}" :disabled='!this.turn' @click="openModal('des')">DESISTÊNCIA</button>
                <button class="emp" :class="{'disabled': !this.turn}" :disabled='!this.turn' @click="openModal('emp')">COMUM ACORDO</button>
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
        <modal-promo-piece
            ref="ModalPromoPiece"
            v-show="isModalPromoVisible"
        />
        <modalResultado 
            ref="modalResultado" 
            v-show="isModalResultadoVisible"
        />
        <modalWait 
            ref="modalWait" 
            v-show="isModalWaitVisible"
        />
        <modal-confirmation 
            ref="modalConfirmation" 
            v-show="isModalConfirmationVisible"
        />
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
    import ModalPromoPiece from './Modal-promo-piece.vue';
    import ModalConfirmation from './Modal-confirmation.vue';
    export default {
        name: 'Chess',
        components: { 
            modalIniciacao,
            modalChoosePiece, 
            modalResultado,
            modalWait,
            toast,
            ModalPromoPiece,
            ModalConfirmation 
        },
        data () {
            return {
                //modais
                isModalIniciacaoVisible: false,
                isModalResultadoVisible: false,
                isModalChoosePieceVisible: false,
                isModalWaitVisible: false,
                isModalPromoVisible:false,
                isModalConfirmationVisible: false,
                //configuração jogo
                idGame: undefined,
                gameMode: undefined,
                movePhase: false,
                turn: undefined,
                blackTurn: false,
                //configuração jogador
                player: "branco",
                playerconf:{ladoId:0, tipoId:0},
                kingSquare: undefined, 
                //configuração jogadas
                jogada: {posicaoPrevia:"", posicao:"", peca:"", posicoes:{}},
                mapJogada: new Map()              
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
                                    this.kingSquare = result == "branco" ? "E1" : "E8";

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
                                            this.$refs.modalWait.show("Sala " + this.idGame+ " criada. Na espera do adversário entrar na sala");
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
                            this.kingSquare = result == "branco" ? "E1" : "E8";

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
                const result = 'draw';

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
                                this.mapJogada = new Map();
                                json.data.data.forEach(this.paintNextPos);
                                this.jogada.posicoes = JSON.stringify(json.data.data);
                                this.movePhase = true;
                            }
                        } 
                    ); 
                    
                }else{    //fase de movimento de peça
                    
                    if( ev.target.style.backgroundImage.includes(this.player)  ){   //caso tenha escolhido outra de suas peças
                        
                        JSON.parse(this.jogada.posicoes).forEach(this.removePaint); 

                        this.jogada.posicaoPrevia = ev.target.id 
                        
                        this.jogada.peca = ev.target.style.backgroundImage;
                        this.jogada.posicao = ev.target.id;

                        await http.get('jogos/' + this.idGame + '/pecas/' + this.jogada.posicao + '/possiveis-jogadas', { headers: headers }).then(response => response
                        ).then(
                            json => {
                                if(json.data != null){
                                    this.mapJogada = new Map();
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
                    ev.target.style.backgroundImage = this.jogada.peca;
                    await http.post('jogos/' + this.idGame + '/pecas/' + this.jogada.posicaoPrevia + '/move/' + actualPos +'?' + this.playerconf.ladoId,{},{ headers: headers })                 //acessa endpoint de criação de sala
                        .then( response => response);
                    this.accomplishMove(this.jogada.posicaoPrevia, actualPos, null);

                    JSON.parse(this.jogada.posicoes).forEach(this.removePaint);

                    this.movePhase = false;
                }
            },

            // função para pintar as casas onde a peça pode ser movida
            paintNextPos:function(item){
                if( item.captura ){
                    document.getElementById(item.casaDestino.casa).classList.add("catch");
                    document.getElementById(item.casaDestino.casa).title = "Captura";
                }else{
                    document.getElementById(item.casaDestino.casa).classList.add("move");
                    document.getElementById(item.casaDestino.casa).title = "Movimento"
                }
                this.mapJogada.set(item.casaDestino.casa, item.nome);
                if(item.nome){
                    if(document.getElementById(item.casaDestino.casa).title == "Captura" && item.nome == "Promoção do Peão"){
                        document.getElementById(item.casaDestino.casa).title = document.getElementById(item.casaDestino.casa).title + " e " + item.nome;
                        return;
                    }
                    document.getElementById(item.casaDestino.casa).title = item.nome;
                }
                
            },

            // função para remover a pintura de casas onde peça pode ser movida
            removePaint:function(item){ 
                document.getElementById(item.casaDestino.casa).classList.remove("move");
                document.getElementById(item.casaDestino.casa).classList.remove("catch");
                document.getElementById(item.casaDestino.casa).title = "";
                 
                this.movePhase = false;
            },

            // função para realizar alteração de jogada no tabuleiro
            async accomplishMove(origin, destiny, promotedTo){
                const headers = {
                    'lado': this.playerconf.ladoId
                }
             switch(this.mapJogada.get(destiny)){
                case "En Passant":
                    var passantSum = 1;
                    if(document.getElementById(origin).style.backgroundImage.includes("branco")){
                        passantSum = passantSum * (-1);
                    }
                    var peaoCaptured = destiny.substring(0,1) + (Number(destiny.substring(1)) + passantSum).toString();
                    document.getElementById(peaoCaptured).style.backgroundImage = "";
                    break;  
                case "Roque Maior":
                    var roqueMaPos = "8";
                    if(document.getElementById(origin).style.backgroundImage.includes("branco")){
                        roqueMaPos = "1";
                    }
                    var torreRMaPosition = String.fromCharCode(destiny.substring(0,1).charCodeAt(0) + 1) + destiny.substring(1);
                    document.getElementById(torreRMaPosition).style.backgroundImage = document.getElementById("A" + roqueMaPos).style.backgroundImage;
                    document.getElementById("A" + roqueMaPos).style.backgroundImage = "";
                    break;
                case "Roque Menor":
                    var roqueMePos = "8";
                    if(document.getElementById(origin).style.backgroundImage.includes("branco")){
                        roqueMePos = "1";
                    }
                    var torreRMePosition = String.fromCharCode(destiny.substring(0,1).charCodeAt(0) - 1) + destiny.substring(1);
                    document.getElementById(torreRMePosition).style.backgroundImage = document.getElementById("H" + roqueMePos).style.backgroundImage;
                    document.getElementById("H" + roqueMePos).style.backgroundImage = "";
                    break; 
                case "Promoção do Peão":
                    if(promotedTo == null){
                        this.isModalPromoVisible = true;
                        var pieceChoosed = undefined;
                        var pieceBackgroundChoosed = undefined
                        await this.$refs.ModalPromoPiece.show(this.playerconf.ladoId).then(result => {
                            pieceChoosed = result.pieceValue;
                            try
                            {
                                http.post("/jogos/"+this.idGame+"/promove-peao/"+pieceChoosed,{},{ headers: headers })         //chama endpoint de escolha de peça
                                .then(response=>response)
                            }catch(error){
                                this.$refs.toast.show({
                                    message: 'Erro ao entrar na sala',
                                    type: 'error'
                                });
                            }        
                            pieceBackgroundChoosed = 'url(' + require('@/assets/imgs/pecas/'+ result.pieceBackground +'.png') + ')';

                            this.isModalPromoVisible = false;
                        });
                    }else{
                        let pieceColor = this.playerconf.ladoId == 1 ? "_branco" : "_preto";
                        pieceBackgroundChoosed = 'url(' + require('@/assets/imgs/pecas/'+ promotedTo.toLowerCase() + pieceColor +'.png') + ')';
                    } 
                    break;
                }           
                document.getElementById(destiny).style.backgroundImage = pieceBackgroundChoosed ? pieceBackgroundChoosed : document.getElementById(origin).style.backgroundImage;
                document.getElementById(origin).style.backgroundImage = "";

                if(document.getElementById(destiny).style.backgroundImage.includes(this.playerconf.ladoId == 0 ? "rei_branco" : "rei_preto")){
                    document.getElementById(this.kingSquare).classList.remove("check");
                    this.kingSquare = destiny;
                }

                this.turn = !this.turn;
                this.blackTurn = !this.blackTurn;
            },

            //criação do socket
            createSocket: function(){          
            this.socket = io(process.env.VUE_APP_API_URL, {query:"jogador=" + this.idGame + "-" + this.playerconf.ladoId});
            this.socket.on("connect", () => {

                this.socket.on('adversarioEntrou', () =>{
                    this.isModalWaitVisible = false;
                })

                this.socket.on("jogadaRealizada",(data) =>{
                    this.mapJogada.set(data.jogadaRealizada.casaDestino.casa, data.jogadaRealizada.nomeJogada);
                    this.accomplishMove(data.jogadaRealizada.casaOrigem.casa, data.jogadaRealizada.casaDestino.casa, data.promocaoPara);
                    if(data.chequeLadoAtual){
                        document.getElementById(this.kingSquare).classList.add("check");
                    }
                })
                this.socket.on("empateProposto", () =>{
                     this.openModal("propostaemp")
                })
                this.socket.on("empatePropostoResposta", () =>{
                   this.isModalWaitVisible=false
                     
                })
                this.socket.on("jogoFinalizado", () =>{
                   this.isModalWaitVisible=false
                     
                })

            });

            },
            openModal:function(value){
                 const headers = {
                    'lado': this.playerconf.ladoId
                    }
                switch (value) {   
                case"des":
                   this.$refs.modalConfirmation.show({
                                title: 'Vai desistir',
                                message: 'Confirme sua desistencia do jogo?',
                                type: 'create',
                                codeRoom: undefined
                            }).then(async (result) =>{
                                console.log(result)
                            })
                break;
                case "emp":
                    this.$refs.modalConfirmation.show({
                                title: 'Pediu arrego',
                                message: 'Deseja pedir empate para o  jogo?',
                                type: 'create',
                                codeRoom: undefined
                            }).then(async (result) =>{
                                if(result){
                                    try{
                                        http.put("/jogos/"+this.idGame+"/empate/propoe",{},{ headers: headers })         //chama endpoint de escolha de peça
                                        .then(response=>{
                                            response
                                             this.$refs.modalWait.show("Esperando a resposta do adversario ");
                                            this.isModalWaitVisible = true;
                                        }
                                        )
                                    }catch(error){
                                        this.$refs.toast.show({
                                         message: 'Erro no envio da proposta empate',
                                        type: 'error'
                                        });
                                    }   
                                }
                                this.isModalConfirmationVisible=false;
                            })
                break;
                case"propostaemp":
                   this.$refs.modalConfirmation.show({
                                title: 'Oponente jogou a toalha',
                                message: 'Aceita o pedido de empate?',
                                type: 'create',
                                codeRoom: undefined
                            }).then(async (result) =>{
                                
                                    try{
                                        http.post("/jogos/"+this.idGame+"/empate/responde",result,{ headers: headers })         //chama endpoint de escolha de peça
                                        .then(response=>console.log(response))
                                    }catch(error){
                                        this.$refs.toast.show({
                                         message: 'Erro no envio da resposta da proposta',
                                        type: 'error'
                                        });
                                    }   
                            
                                this.isModalConfirmationVisible=false;
                            })
                break;
                }
                 this.isModalConfirmationVisible = true;
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
        background:rgba(26, 25, 25, 0.637); 
        position:fixed; 
        width:100%; 
        height:100%; 
        top:0; 
        left:0;
    }

    /******** Indicação das casas no tabuleiro ********/
    .vertical-position {
        float: right;
        text-align: center;
        font-size: 2vw;
        justify-content: space-between;
        display: flex;
        margin-left: 28.3%;
        position: absolute;
        color:white; 
        top: 0.5vw;
    }
    .vertical-position div
    {
        float: right;
        width: 5.42vw;
    }
    .horizontal-position
    {
        position: absolute;
        margin-left: 26%;
        margin-top: 4vw;
        font-size: 2vw;
        text-align: center;
        color:white;
    }
    .horizontal-position div
    {
        height: 5.5vw;
    }

    /*******************  Tabuleiro ********************/
    .container {
        width: 43.71vw; 
        height: 43.71vw; 
        margin:auto;
        margin-top: 2.8vw; 
        padding: 0.1vw 0.1vw 0.1vw 0.1vw;
        background-color:black;
        border-radius: 0.3vw;
        box-shadow: 0 0 6vw 3vw black;
    }
    .row {
        clear: both;
        align-items: center;
        justify-content: center;
    }
    .row div {
        width:5.24vw; 
        height:5.24vw; 
        float:left; 
        margin:0.1vw; 
        font-size: 48px; 
        text-align:center;
        background-image:-moz-linear-gradient();        
        background-repeat: no-repeat;
        background-position-y: center;
        background-position-x: right;
        background-size: 100%;
        border-radius: 0.1vw;
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
        background-color:#59fc59 !important;
        pointer-events: all !important;
    }
    .catch
    {
        background-color:#62dbfa !important;
        pointer-events: all !important;
    }
    .check
    {
        background-color:#fc3030 !important;
        pointer-events: all !important;
    }

    /********************* painel de blur ***********************/
    .blur-content
    {
        filter: blur(5px); 
    }
    .content-height-blur
    {
        height: 100%;
    }

    /****************** card de turno ************************/
    .turn{
        float: right;
        text-align: center;
        font-size: 2vw;
        justify-content: space-between;
        display: flex;
        margin-left: 74%;
        position: absolute;
        width: 25%;
        height: 0;
        padding-bottom: 38%;
        top: 3%;
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
        border: 0.5vw inset #03ff2d;
    }
    .opponent-turn{
        border: 0.5vw inset #ff0404;
    }
    
    .centered {
        display: inline-block;
        vertical-align: middle;
        width: 100%;
        height: 100%;
        color: #000;
        background-color:#ffff;
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
    /****************** botões de ações ************************/
    .button-area
    {
        float: right;
        text-align: center;
        font-size: 2vw;
        justify-content: space-between;
        display: block;
        margin-left: 74%;
        position: absolute;
        width: 25vw;
        height: 0;
        padding-bottom: 38%;
        top: 65%;
    }
    .button-area button
    {
        font-size: 1.3vw;
        font-weight: 800;
        width: 23vw;
        padding: 0.5em 0.1em;
        margin: 1em;
        cursor: pointer;
        box-shadow: 0 0 0.5vw 0.3vw black;
    }
    .emp
    {
        background-color: white;
        border: 0.3vw solid #cd07ff;
        color: #af05da;
    }
    .des
    {
        background-color: white;
        border: 0.3vw solid #f80606;
        color: #db2209;
        
    }
    /****************** card de turno ************************/
    .informations
    {
        float: right;
        text-align: center;
        font-size: 2vw;
        justify-content: space-between;
        display: flex;
        position: absolute;
        width: 25%;
        padding-bottom: 38%;
        top: 3%;
        display: block;
    }
    .informations img
    {
        margin: 0 0.5em 0 0.5em;
        width: 20vw;
        border-radius: 0.4vw;
        opacity: 0.5;
    }
    .informations img:hover {
        opacity: 1.0;
    }
    .informations h3
    {
        color:white;
        text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
    }
    .disabled
    {
        opacity: .2;
    }
</style>