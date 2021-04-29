<template>
    <div class="containerFull">
        <audio id="sound" src='../assets/move_sound.mp3' />
        <div :class="{'blur-content': this.isModalIniciacaoVisible || this.isModalChoosePieceVisible || this.isModalWaitVisible || this.isModalResultadoVisible || this.isModalPromoVisible || this.isModalConfirmationVisible || this.showLoading}" class="content-height-blur">            
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

            <div class="vertical-position" v-if="player=='branco'">
                <div>A</div>
                <div>B</div>
                <div>C</div>
                <div>D</div>
                <div>E</div>
                <div>F</div>
                <div>G</div>
                <div>H</div>
            </div>
            <div class="vertical-position" v-else>
                <div>H</div>
                <div>G</div>
                <div>F</div>
                <div>E</div>
                <div>D</div>
                <div>C</div>
                <div>B</div>
                <div>A</div>
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
                <div class="row line-1">
                    <div id="H1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/torre_branco.png') + ')' }"></div>
                    <div id="G1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/cavalo_branco.png') + ')' }"></div>
                    <div id="F1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/bispo_branco.png') + ')' }"></div>
                    <div id="E1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/rei_branco.png') + ')' }"></div>
                    <div id="D1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/rainha_branco.png') + ')' }"></div>
                    <div id="C1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/bispo_branco.png') + ')' }"></div>
                    <div id="B1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/cavalo_branco.png') + ')' }"></div>
                    <div id="A1" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/torre_branco.png') + ')' }"></div>
                </div>
                <div class="row line-2">
                    <div id="H2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="G2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="F2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="E2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="D2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="C2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="B2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                    <div id="A2" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')' }"></div>
                </div>
                <div class="row line-1">
                    <div id="H3" @click ="getPosition($event)"></div>
                    <div id="G3" @click ="getPosition($event)"></div>
                    <div id="F3" @click ="getPosition($event)"></div>
                    <div id="E3" @click ="getPosition($event)"></div>
                    <div id="D3" @click ="getPosition($event)"></div>
                    <div id="C3" @click ="getPosition($event)"></div>
                    <div id="B3" @click ="getPosition($event)"></div>
                    <div id="A3" @click ="getPosition($event)"></div>
                </div>
                <div class="row line-2">
                    <div id="H4" @click ="getPosition($event)"></div>
                    <div id="G4" @click ="getPosition($event)"></div>
                    <div id="F4" @click ="getPosition($event)"></div>
                    <div id="E4" @click ="getPosition($event)"></div>
                    <div id="D4" @click ="getPosition($event)"></div>
                    <div id="C4" @click ="getPosition($event)"></div>
                    <div id="B4" @click ="getPosition($event)"></div>
                    <div id="A4" @click ="getPosition($event)"></div>
                </div>
                <div class="row line-1">
                    <div id="H5" @click ="getPosition($event)"></div>
                    <div id="G5" @click ="getPosition($event)"></div>
                    <div id="F5" @click ="getPosition($event)"></div>
                    <div id="E5" @click ="getPosition($event)"></div>
                    <div id="D5" @click ="getPosition($event)"></div>
                    <div id="C5" @click ="getPosition($event)"></div>
                    <div id="B5" @click ="getPosition($event)"></div>
                    <div id="A5" @click ="getPosition($event)"></div>
                </div>
                <div class="row line-2">
                    <div id="H6" @click ="getPosition($event)"></div>
                    <div id="G6" @click ="getPosition($event)"></div>
                    <div id="F6" @click ="getPosition($event)"></div>
                    <div id="E6" @click ="getPosition($event)"></div>
                    <div id="D6" @click ="getPosition($event)"></div>
                    <div id="C6" @click ="getPosition($event)"></div>
                    <div id="B6" @click ="getPosition($event)"></div>
                    <div id="A6" @click ="getPosition($event)"></div>
                </div>
                
                <div class="row line-1">
                    <div id="H7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="G7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="F7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="E7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="D7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="C7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="B7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                    <div id="A7" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')' }"></div>
                </div>
                <div class="row line-2">
                    <div id="H8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/torre_preto.png') + ')' }"></div>
                    <div id="G8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/cavalo_preto.png') + ')' }"></div>
                    <div id="F8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/bispo_preto.png') + ')' }"></div>
                    <div id="E8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/rei_preto.png') + ')' }"></div>
                    <div id="D8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/rainha_preto.png') + ')' }"></div>
                    <div id="C8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/bispo_preto.png') + ')' }"></div>
                    <div id="B8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/cavalo_preto.png') + ')' }"></div>
                    <div id="A8" @click ="getPosition($event)" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/torre_preto.png') + ')' }"></div>
                </div>   
            </div>

            <div class="informations" v-if="this.idGame">
                <img v-if='this.information' src="../assets/imgs/dog_in_chess.png" title='Jogar é fácil...' @click="changeInformation()">
                <img v-else src="../assets/imgs/dog_in_study.png" title='...sabendo as regras' @click="changeInformation()">
                <h3>SALA {{this.idGame}}</h3>
                <div class='size-move-table'>
                <div class="move-table">
                    <div class="move-table-head">
                        <div class="move-table-cell" align="center">Peça</div>
                        <div  class="move-table-cell">Origem</div>
                        <div  class="move-table-cell">Destino</div>
                    </div>
                    <div class="move-table-row" v-for="(move, i) in moves" :key="i">
                        <div class="move-table-cell" :style="{ backgroundImage: 'url(' + require('@/assets/imgs/pecas/' + move.piece + '.png' ) + ')' }">
                        </div>
                        <div class="move-table-cell">
                            {{ move.origin }}
                        </div>
                        <div class="move-table-cell">
                            {{ move.destiny }}
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
            <div class="turn" v-if="this.idGame">
                <div class="turn-square" :class="this.turn ? 'my-turn' : 'opponent-turn'" >
                    <div class="centered" :class="{'black':  this.blackTurn}">
                        <h3 v-show="this.gameMode != 2" v-if="this.turn">Sua vez</h3>
                        <h3 v-show="this.gameMode != 2" v-else>Vez do adversário</h3>
                        <h3 v-show="this.gameMode == 2" >Vez da IA</h3>
                        <span v-show="this.gameMode != 2" v-if="this.turn">Realize sua jogada</span>
                        <span v-show="this.gameMode != 2" v-else>Espere sua vez de jogar</span>
                        <span v-show="this.gameMode == 2">Assista e não durma</span>
                    </div> 
                </div>
            </div>

            <img src="../assets/imgs/dog_icon.png" class="icon-equip"  v-if="this.idGame"
                title='Desenvolvedores: 
                    Caio Wey 
                    Igor Lisboa 
                    Matheus Baldas 
                    Milena Veríssimo 
                    Victor Matheus Pereira 
                    Victor Marques'
            >

            <div class="button-area" v-if="this.idGame">
                <button class="des" :class="{'disabled': !this.turn || this.gameMode == 2}" :disabled='!this.turn || this.gameMode == 2' @click="openModal('desistencia')">DESISTÊNCIA</button>
                <button class="emp" :class="{'disabled': !this.turn || this.gameMode == 2}" :disabled='!this.turn || this.gameMode == 2' @click="openModal('empate')">COMUM ACORDO</button>
            </div>

        </div>
        <modal-iniciacao
            ref="modalIniciacao"
            v-show="isModalIniciacaoVisible"
             :class="{'loading-progress': this.showLoading}" 
        />
        <modal-choose-piece
            ref="modalChoosePiece"
            v-show="isModalChoosePieceVisible"
            :class="{'loading-progress': this.showLoading}"
        />
        <modal-promo-piece
            ref="ModalPromoPiece"
            v-show="isModalPromoVisible"
            :class="{'loading-progress': this.showLoading}"
        />
        <modalResultado 
            ref="modalResultado" 
            v-show="isModalResultadoVisible"
            :class="{'loading-progress': this.showLoading}"
        />
        <modalWait 
            ref="modalWait" 
            v-show="isModalWaitVisible"
            :class="{'loading-progress': this.showLoading}"
        />
        <modal-confirmation 
            ref="modalConfirmation" 
            v-show="isModalConfirmationVisible"
            :class="{'loading-progress': this.showLoading}"
        />
        <toast ref="toast"/>
        <div class="lds-ring" v-show="this.showLoading"><div></div><div></div><div></div><div></div></div>

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
                showLoading: false,
                //configuração jogo
                idGame: undefined,
                gameMode: undefined,
                movePhase: false,
                turn: undefined,
                blackTurn: false,
                blockClick: false,
                opponentLeft: false,
                //configuração jogador
                player: "branco",
                playerconf:{ladoId:0, tipoId:0},
                kingSquare: undefined,
                waiver: false,
                information: true, 
                //configuração jogadas
                jogada: {posicaoPrevia:"", posicao:"", peca:"", posicoes:{}},
                mapJogada: new Map(),
                moves: []             
            }
        },
        //destroyed(){
          //  this.socket.on("disconnect");
        //},
        // iniciar modal de iniciação ao carregar página 
        mounted(){
            this.showModalIniciacao();                    
        },
        methods: { 

            // função para mostrar modal de iniciação
            showModalIniciacao() {

                this.$refs.modalIniciacao.show().then(async(result) =>{
                    if(result){

                        this.showLoading = true;

                        this.isModalIniciacaoVisible = false;

                        if( localStorage.getItem("tipoJogo") == 2 ){
                            this.player = "branco";
                            this.playerconf.ladoId=0;
                            this.turn = false;
                            this.kingSquare = "E1";
                            this.idGame = localStorage.getItem("idjogo");
                            this.gameMode = localStorage.getItem("tipoJogo");
                            localStorage.clear();

                            this.createSocket();

                            this.showLoading = false;

                            return;
                        }
                        
                        
                        if ( localStorage.getItem("acao") == "criacao" ){                      // caso tenha criado uma sala
                        
                            this.$refs.modalChoosePiece.show({
                                title: 'Escolha de cor das peças',
                                message: 'Deseja qual cor de peça para iniciar o jogo?',
                                type: 'create',
                                codeRoom: undefined
                            }).then( async (result) =>{
                                if(result) {
                                    this.showLoading = true;

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
                                this.showLoading = false;
                            }); 
                            this.showLoading = false;
                            this.isModalChoosePieceVisible = true;
                        }

                        if( localStorage.getItem("acao") === "entrada")                           // caso tenha entrado em uma sala
                        {
                            this.showLoading = true;
                             
                            let result = localStorage.getItem("ladoId")==0 ? "branco" : "preto"; 
                            this.player = result;
                            this.turn = result == "branco" ? true : false;
                            this.kingSquare = result == "branco" ? "E1" : "E8";

                            this.playerconf.ladoId = localStorage.getItem("ladoId");
                            this.playerconf.tipoId = 0;
                          
                            try{
                                await http.post("jogos/"+localStorage.getItem("idjogo")+"/jogadores",this.playerconf)             //acessa endpoint de inclusão de jogador
                                    .then(response=>response)
                                    .then(json=> {
                                        localStorage.setItem("ladoId",json.data.data.id);

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
                                        });

                            }catch(error){
                                // mostra notificação de entrada na sala
                                this.$refs.toast.show({
                                    message: 'Erro ao entrar na sala',
                                    type: 'error'
                                });
                            }

                            this.showLoading = false;

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

                //verificar se é o turno do usuário ou se jogada está em andamento
                if(!this.turn || this.blockClick){
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

                    if( ev.target.style.backgroundImage.includes(this.player) && this.jogada.posicao != ev.target.id ){   //caso tenha escolhido outra de suas peças
                        
                        this.jogada.posicaoPrevia = ev.target.id 
                        
                        this.jogada.peca = ev.target.style.backgroundImage;
                        this.jogada.posicao = ev.target.id;

                        await http.get('jogos/' + this.idGame + '/pecas/' + this.jogada.posicao + '/possiveis-jogadas', { headers: headers }).then(response => response).then(
                            json => {
                                if(json.data != null){
                                    JSON.parse(this.jogada.posicoes).forEach(this.removePaint);

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
                    this.blockClick = true;
                    
                    http.post('jogos/' + this.idGame + '/pecas/' + this.jogada.posicaoPrevia + '/move/' + actualPos +'?' + this.playerconf.ladoId,{},{ headers: headers });                //acessa endpoint de criação de sala
                    
                    this.accomplishMove(this.jogada.posicaoPrevia, actualPos, null,false);

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
                if(item.nome != null ){
                    if(document.getElementById(item.casaDestino.casa).title == "Captura" && item.nome == "Promoção do Peão"){
                        document.getElementById(item.casaDestino.casa).title = document.getElementById(item.casaDestino.casa).title + " e " + item.nome;
                        return;
                    }
                    if(item.nome != "L"){
                        document.getElementById(item.casaDestino.casa).title = item.nome;
                    }
                }
                
            },
            paintPositionAdver:function(origin,destiny){
              document.getElementById(origin).classList.add("origin");  
              document.getElementById(destiny).classList.add("origin");
            },
            removePaintAdver:function(origin,destiny){
              document.getElementById(origin).classList.remove("origin");  
              document.getElementById(destiny).classList.remove("origin");
            },
            // função para remover a pintura de casas onde peça pode ser movida
            removePaint:function(item){ 
                document.getElementById(item.casaDestino.casa).classList.remove("move");
                document.getElementById(item.casaDestino.casa).classList.remove("catch");
                document.getElementById(item.casaDestino.casa).title = "";
                 
                this.movePhase = false;
            },

            // função para realizar alteração de jogada no tabuleiro
            async accomplishMove(origin, destiny, promotedTo,adver){
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
                
                this.moves.unshift({origin: origin, destiny: destiny, piece: document.getElementById(origin).style.backgroundImage.substring(10, document.getElementById(origin).style.backgroundImage.indexOf("."))});

                document.getElementById(destiny).style.backgroundImage = pieceBackgroundChoosed ? pieceBackgroundChoosed : document.getElementById(origin).style.backgroundImage;
                 if(adver){
                this.paintPositionAdver(origin,destiny);
                 setTimeout(() => {
                    this.removePaintAdver(origin,destiny);
                }, 2000);
                 }
                document.getElementById(origin).style.backgroundImage = "";
                document.getElementById(this.kingSquare).classList.remove("check");
                document.getElementById(this.kingSquare).title = "";

                if(document.getElementById(destiny).style.backgroundImage.includes(this.playerconf.ladoId == 0 ? "rei_branco" : "rei_preto")){
                    this.kingSquare = destiny;
                }

                document.getElementById('sound').play();

                this.turn = !this.turn;
                this.blackTurn = !this.blackTurn;
            },

            // abrir modal dos botões de ações desistência e comum acordo
            openModal:function(value){
                 const headers = {
                    'lado': this.playerconf.ladoId
                    }
                switch (value) {   
                    case"desistencia":
                        this.$refs.modalConfirmation.show({
                            title: 'Está desistindo',
                            message: 'Confirma sua desistência do jogo? (essa ação fará você sair da sala)'
                        }).then(async (result) =>{
                            if(result){
                                this.showLoading = true;
                                this.waiver = true;
                                http.delete("/jogos/"+this.idGame+"/jogadores/"+this.playerconf.ladoId);
                            }
                            this.isModalConfirmationVisible=false;
                        });
                        
                        break;
                    case "empate":
                        this.$refs.modalConfirmation.show({
                            title: 'Pediu arrego',
                            message: 'Deseja pedir empate para o jogo?'
                        }).then(async (result) =>{
                            if(result){
                                try{
                                    http.put("/jogos/"+this.idGame+"/empate/propoe",{},{ headers: headers })         //chama endpoint de proposta de empate comum acordo
                                    .then(response=>{
                                        response
                                        this.$refs.modalWait.show("Esperando a resposta do adversario");
                                        this.isModalWaitVisible = true;
                                    });
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
                    case"propostaEmpate":
                        this.$refs.modalConfirmation.show({
                            title: 'Oponente jogou a toalha',
                            message: 'Aceita o pedido de empate?'
                        }).then(async (result) =>{
                            
                                try{
                                    http.post("/jogos/"+this.idGame+"/empate/responde", {resposta:result},{ headers: headers })         //chama endpoint de resposta de proposta de empate comum acordo
                                }catch(error){
                                    this.$refs.toast.show({
                                    message: 'Erro no envio da resposta da proposta',
                                    type: 'error'
                                    });
                                }   
                        
                            this.isModalConfirmationVisible=false;
                        })
                        break;
                    case "revanche":
                        this.$refs.modalConfirmation.show({
                            title: 'Vai encarar de novo',
                            message: 'Deseja informar que quer uma revanche?'
                        }).then(async (result) =>{
                            if(result){
                                try{
                                    http.put("/jogos/"+this.idGame+"/reset/propoe",{},{ headers: headers })         //chama endpoint de proposta de revanche
                                    .then(response=>{
                                        response
                                        this.$refs.modalWait.show("Esperando a resposta do adversario");
                                        this.isModalWaitVisible = true;
                                    });
                                }catch(error){
                                    this.$refs.toast.show({
                                    message: 'Erro no envio da proposta de revanche',
                                    type: 'error'
                                    });
                                }   
                            }
                            this.isModalConfirmationVisible=false;
                        })
                        break;
                    case "propostaRevanche":
                        this.isModalResultadoVisible = false;
                        this.$refs.modalConfirmation.show({
                            title: 'Oponente tá nervoso',
                            message: 'Aceita o pedido de revanche?'
                        }).then(async (result) =>{
                                try{
                                    http.post("/jogos/"+this.idGame+"/reset/responde",{ resposta: result },{ headers: headers });       //chama endpoint de resposta de revanche
                                    if(result){
                                        await this.reconnectPlayer();
                                        this.resetBoard();
                                    }else{
                                        location.reload();
                                    }
                                }catch(error){
                                    this.$refs.toast.show({
                                        message: 'Erro no envio da resposta da revanche',
                                        type: 'error'
                                    });
                                }   
                        
                            this.isModalConfirmationVisible=false;
                        })
                        break;
                }
                 this.isModalConfirmationVisible = true;
            },

            // alteração de informação
            changeInformation(){
                this.information = !this.information;
            },

            // resetar tabuleiro 
            resetBoard(){

                this.showLoading = true;

                this.moves = [];

                let color = "_branco";
                let hp = ["1", "2", "3", "4", "5", "6", "7", "8"];
                let vp = ["A", "B", "C", "D", "E", "F", "G", "H"];
                
                for (var h = 0; h < hp.length; h++) {
                    for (var v = 0; v < vp.length; v++) {

                        if(hp[h] == "2")
                        {
                            document.getElementById(vp[v] + hp[h]).style.backgroundImage = 'url(' + require('@/assets/imgs/pecas/peao_branco.png') + ')';
                            continue;
                        }
                        if(hp[h] == "7")
                        {
                            color = "_preto";
                            document.getElementById(vp[v] + hp[h]).style.backgroundImage = 'url(' + require('@/assets/imgs/pecas/peao_preto.png') + ')';
                            continue;
                        }
                        if(["3", "4", "5", "6"].includes(hp[h]))
                        {
                            document.getElementById(vp[v] + hp[h]).style.backgroundImage = '';
                            continue;
                        }
                        
                        switch (vp[v]){
                            case "A":
                            case "H":
                                document.getElementById(vp[v] + hp[h]).style.backgroundImage = 'url(' + require('@/assets/imgs/pecas/torre' + color + '.png') + ')';
                                break;
                            case "B": 
                            case "G":
                                document.getElementById(vp[v] + hp[h]).style.backgroundImage = 'url(' + require('@/assets/imgs/pecas/cavalo' + color + '.png') + ')';
                                break;
                            case "C": 
                            case "F":
                                document.getElementById(vp[v] + hp[h]).style.backgroundImage = 'url(' + require('@/assets/imgs/pecas/bispo' + color + '.png') + ')';
                                break;
                            case "D":
                                document.getElementById(vp[v] + hp[h]).style.backgroundImage = 'url(' + require('@/assets/imgs/pecas/rainha' + color + '.png') + ')';
                                break;
                            case "E":
                                document.getElementById(vp[v] + hp[h]).style.backgroundImage = 'url(' + require('@/assets/imgs/pecas/rei' + color + '.png') + ')';
                                break;
                        }
                        
                    }
                }
                this.turn = this.playerconf.ladoId == 0 ? true : false;
                this.kingSquare = this.playerconf.ladoId == 0 ? "E1" : "E8";

                this.showLoading = false
                               
            },

            async reconnectPlayer(){

                this.turn = this.playerconf.ladoId == 0 ? true : false;
                this.kingSquare = this.playerconf.ladoId == 0 ? "E1" : "E8";
                this.blackTurn = false;

                this.socket.disconnect();

                await http.post("jogos/"+this.idGame+"/jogadores",this.playerconf)         //chama endpoint de escolha de peça
                    .then(() => console.log("reset"));

                this.createSocket();
            },

            //criação do socket e eventos
            createSocket: function(){          
            this.socket = io(process.env.VUE_APP_API_URL, {query:"jogador=" +(this.gameMode==2?"I.A.":this.idGame + "-" + this.playerconf.ladoId) });
            this.socket.on("connect", () => {

                //adversário entrou na sala
                this.socket.on('adversarioEntrou', () =>{
                    this.isModalWaitVisible = false;
                })

                // adversário realizaou jogada
                this.socket.on("jogadaRealizada",(data) =>{
                    this.mapJogada.set(data.jogadaRealizada.casaDestino.casa, data.jogadaRealizada.nomeJogada);
                    this.accomplishMove(data.jogadaRealizada.casaOrigem.casa, data.jogadaRealizada.casaDestino.casa, data.promocaoPara,true);
                    if(data.chequeLadoAtual && this.gameMode != 2){
                        document.getElementById(this.kingSquare).classList.add("check");
                        document.getElementById(this.kingSquare).title = "Rei em xeque";
                    }
                    this.blockClick = false;
                })

                // adversário propos empate comum acordo
                this.socket.on("empateProposto", () =>{
                    this.openModal("propostaEmpate")
                })

                // adversário recusou empate comum acordo
                this.socket.on("empatePropostoResposta", () =>{
                   this.isModalWaitVisible=false  
                })

                // jogo foi encerrado por vitória ou empate
                this.socket.on("jogoFinalizado", async (data) =>{

                    if(this.waiver){
                        location.reload();
                    }else{

                        if(data.jogoFinalizacao.toString().includes("Desistência")){
                            this.$refs.toast.show({
                                message: 'Adversário saiu da sala',
                                type: 'error'
                            });
                            this.opponentLeft = true;
                        }

                        if(this.isModalResultadoVisible){
                            return;
                        }
                    
                        this.isModalWaitVisible = false;

                        let color = this.playerconf.ladoId == 0 ? "Branco" : "Preto";

                        if(data.jogoFinalizacao.toString().includes("Vitória")){

                            if(this.gameMode == 2){

                                const delay = ms => new Promise(res => setTimeout(res, ms));
                                await delay(2000);

                                this.$refs.modalResultado.gameResult( "IA vitória", this.gameMode, data.jogoFinalizacao ).then( async() =>{
                                        http.delete("/jogos/"+this.idGame+"/jogadores/"+this.playerconf.ladoId);
                                        location.reload();
                                    })
                                this.isModalResultadoVisible = true;
                                return; 
                            }

                            if(!data.jogoFinalizacao.toString().includes(color)){
                                this.$refs.modalResultado.gameResult('lose', this.gameMode).then( async(result) =>{
                                    if(this.opponentLeft){
                                        this.showLoading = true;
                                        http.delete("/jogos/"+this.idGame+"/jogadores/"+this.playerconf.ladoId);
                                        location.reload();
                                    }

                                    if(result == "rematch"){
                                        this.isModalResultadoVisible = false;
                                        this.openModal("revanche");
                                    }else{
                                        this.showLoading = true;
                                        http.delete("/jogos/"+this.idGame+"/jogadores/"+this.playerconf.ladoId);
                                        this.waiver = true;
                                    }
                                })
                                this.isModalResultadoVisible = true;
                                return;
                            }else{ 
                                this.$refs.modalResultado.gameResult('win', this.gameMode).then( async() =>{
                                    if(this.opponentLeft){
                                        this.showLoading = true;
                                        http.delete("/jogos/"+this.idGame+"/jogadores/"+this.playerconf.ladoId);
                                        location.reload();
                                    }

                                    this.showLoading = true;
                                    http.delete("/jogos/"+this.idGame+"/jogadores/"+this.playerconf.ladoId);
                                    this.waiver = true;
                                })
                                this.isModalResultadoVisible = true;
                                return;
                            }
                        }
                        this.$refs.modalResultado.gameResult( data.jogoFinalizacao, this.gameMode).then( async(result) =>{
                                if(this.opponentLeft){
                                    this.showLoading = true;
                                    http.delete("/jogos/"+this.idGame+"/jogadores/"+this.playerconf.ladoId);
                                    location.reload();
                                }

                                if(result == "rematch"){
                                    this.isModalResultadoVisible = false;
                                    this.openModal("revanche");
                                }else{
                                    this.showLoading = true;
                                    http.delete("/jogos/"+this.idGame+"/jogadores/"+this.playerconf.ladoId);
                                    this.waiver = true;
                                }
                            })
                        this.isModalResultadoVisible = true;
                    }
                })

                // adversário solicitou revanche
                this.socket.on("resetProposto", () =>{
                    this.openModal("propostaRevanche");
                })

                // adversário recusou revanche
                this.socket.on("resetPropostoResposta", async (data) =>{
                    this.isModalWaitVisible = false;
                    if(data){
                        await this.reconnectPlayer();
                        this.resetBoard();
                    }else{
                        this.showLoading = true;
                        http.delete("/jogos/"+this.idGame+"/jogadores/"+this.playerconf.ladoId);
                        location.reload();
                    }
                     
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
    .origin{
        background-color:#FFE333 !important;
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
    /****************** informações da equipe ************************/
    .icon-equip
    {
        float: right;
        justify-content: space-between;
        display: block;
        margin-left: 82.5%;
        position: absolute;
        width: 10vw;
        padding-bottom: 38%;
        top: 35%;
        opacity: 0.9;
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
    /****************** area de informações ************************/
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
    /****************** tabela de jogadas ************************/
    .move-table{
        display:table;         
        width: 23vw;;         
        background-color:#eee;                
        border-spacing:4px;
        margin-left: 1vw;
        font-size: 0.8em;
        opacity: 0.5;
    }
    .move-table:hover {
        opacity: 1.0;
    }
    .move-table-head{
        display:table-row;
    }
    .move-table-row{
        display:table-row;
        clear:both;
        background-color:#ccc;
        overflow: auto;
        
    }
    .move-table-cell{
        display:table-cell;         
        width: 7vw; 
        height: 2.5vw;        
        border-left: 2px solid #fff;
        vertical-align: middle;
        background-image:-moz-linear-gradient();        
        background-repeat: no-repeat;
        background-position-y: center;
        background-position-x: center;
        background-size: 40%;
    }
    .size-move-table
    {
        height: 25vw;
        overflow: auto;
    }
    /* Largura da barra de rolagem */
    ::-webkit-scrollbar 
    {
        width: 0px;
    }
    

    /**************************** loading *************************/
    .loading-progress{
        z-index: 0;
        filter: blur(5px);
    }
    .lds-ring 
    {
        display: inline-block;
        width: 30vw;
        height: 30vw;
        margin-top: -32.6vw;
        margin-left: 40vw;
        position: absolute;
        z-index: 9999999999;
    }
    .lds-ring div 
    {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 20vw;
        height: 20vw;
        margin: 8px;
        border: 2vw solid #6e6e70;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #6e6e70 transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) 
    {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) 
    {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) 
    {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>