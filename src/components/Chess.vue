<template>
 <table class="chess-board">
            <tbody>
                <tr>
                    <th></th>
                    <th draggable="true" >a</th>
                    <th>b</th>
                    <th>c</th>
                    <th>d</th>
                    <th>e</th>
                    <th>f</th>
                    <th>g</th>
                    <th>h</th>
                </tr>
                <tr>
                    <th>8</th>
                    <td id="a8" class="light"  @click ="getPosition($event)" >♜</td>
                    <td id="b8"  class="dark"  @click ="getPosition($event)">♞</td>
                    <td id="c8" class="light"  @click ="getPosition($event)">♝</td>
                    <td  id="d8"  class="dark" @click ="getPosition($event)">♛</td>
                    <td id="e8" class="light"  @click ="getPosition($event)">♚</td>
                    <td  id="f8" class="dark"  @click ="getPosition($event)">♝</td>
                    <td  id="g8" class="light" @click ="getPosition($event)">♞</td>
                    <td id="h8"  class="dark"  @click ="getPosition($event)">♜</td>
                </tr>
                <tr>
                    <th>7</th>
                    <td id="a7" class="dark" @click ="getPosition($event)">♟</td>
                    <td id="b7" class="light" @click ="getPosition($event)">♟</td>
                    <td id="c7" class="dark" @click ="getPosition($event)" >♟</td>
                    <td id="d7" class="light" @click ="getPosition($event)"  >♟</td>
                    <td id="e7"  class="dark" @click ="getPosition($event)">♟</td>
                    <td id="f7" class="light" @click ="getPosition($event)">♟</td>
                    <td id="g7" class="dark" @click ="getPosition($event)">♟</td>
                    <td  id="h7" class="light" @click ="getPosition($event)">♟</td>
                </tr>
                <tr>
                    <th>6</th>
                     <td class="light" @click ="getPosition($event)" id="a6" ></td>
                    <td class="dark"  @click ="getPosition($event)" id="b6" ></td>
                    <td class="light" @click ="getPosition($event)" id="c6" ></td>
                    <td class="dark"  @click ="getPosition($event)" id="d6" ></td>
                    <td class="light" @click ="getPosition($event)" id="f6" ></td>
                    <td class="dark"  @click ="getPosition($event)" id="e6" ></td>
                    <td class="light" @click ="getPosition($event)" id="g6" ></td>
                    <td class="dark"  @click ="getPosition($event)" id="h6" ></td>
                </tr>
                <tr>
                    <th>5</th>
                     <td class="dark"      @click ="getPosition($event)" id="a5" ></td>
                    <td class="light"     @click ="getPosition($event)" id="b5"></td>
                    <td class="dark"      @click ="getPosition($event)" id="c5"></td>
                    <td class="light"     @click ="getPosition($event)" id="d5"></td>
                    <td class="dark"      @click ="getPosition($event)" id="f5"></td>
                    <td class="light"     @click ="getPosition($event)" id="e5"></td>
                    <td class="dark"      @click ="getPosition($event)" id="f5"></td>
                    <td class="light"     @click ="getPosition($event)" id="g5"></td>
                </tr>
                <tr>
                    <th>4</th>
                    <td class="light" @click ="getPosition($event)" id="a4" ></td>
                    <td class="dark"  @click ="getPosition($event)" id="b4" ></td>
                    <td class="light" @click ="getPosition($event)" id="c4" ></td>
                    <td class="dark"  @click ="getPosition($event)" id="d4" ></td>
                    <td class="light" @click ="getPosition($event)" id="f4" ></td>
                    <td class="dark"  @click ="getPosition($event)" id="e4" ></td>
                    <td class="light" @click ="getPosition($event)" id="g4" ></td>
                    <td class="dark"  @click ="getPosition($event)" id="h4" ></td>
                </tr>
                <tr>
                    <th>3</th>
                    <td class="dark"      @click ="getPosition($event)" id="a3" ></td>
                    <td class="light"     @click ="getPosition($event)" id="b3"></td>
                    <td class="dark"      @click ="getPosition($event)" id="c3"></td>
                    <td class="light"     @click ="getPosition($event)" id="d3"></td>
                    <td class="dark"      @click ="getPosition($event)" id="f3"></td>
                    <td class="light"     @click ="getPosition($event)" id="e3"></td>
                    <td class="dark"      @click ="getPosition($event)" id="f3"></td>
                    <td class="light"     @click ="getPosition($event)" id="g3"></td>
                </tr>
                <tr>
                    <th>2</th>
                    <td  class="light"  @click ="getPosition($event)" id="a2" >♙</td>
                    <td  class="dark"   @click ="getPosition($event)" id="b2"  >♙</td>
                    <td   class="light" @click ="getPosition($event)" id="c2" >♙</td>
                    <td   class="dark"  @click ="getPosition($event)" id="d2" >♙</td>
                    <td   class="light" @click ="getPosition($event)" id="e2" >♙</td>
                    <td   class="dark"  @click ="getPosition($event)" id="f2" >♙</td>
                    <td  class="light"  @click ="getPosition($event)" id="g2" >♙</td>
                    <td   class="dark"  @click ="getPosition($event)" id="h2">♙</td>
                </tr>
                <tr>
                    <th>1</th>
                    <td   @click ="getPosition($event)" id="a1" class="dark">♖</td>
                    <td   @click ="getPosition($event)" id="b1" class="light">♘</td>
                    <td   @click ="getPosition($event)" id="c1" class="dark">♗</td>
                    <td   @click ="getPosition($event)" id="d1" class="light">♕</td>
                    <td   @click ="getPosition($event)" id="e1" class="dark">♔</td>
                    <td   @click ="getPosition($event)" id="f1" class="light">♗</td>
                    <td   @click ="getPosition($event)" id="g1" class="dark">♘</td>
                    <td   @click ="getPosition($event)" id="h1" class="light">♖</td>
                </tr>
            </tbody>
        </table>
</template>

<script>


export default {
  name: 'Chess',
  data () {
        return {
          movePhase: false
        }
    },
  methods: {
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
           console.log(this.movePhase) ;
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
   .chess-board { border-spacing: 0; border-collapse: collapse; }
            .chess-board th { padding: .5em; }
            .chess-board th + th { border-bottom: 1px solid #000; }
            .chess-board th:first-child,
            .chess-board td:last-child { border-right: 1px solid #000; }
            .chess-board tr:last-child td { border-bottom: 1px solid; }
            .chess-board th:empty { border: none; }
            .chess-board td { width: 1.5em; height: 1.5em; text-align: center; font-size: 32px; line-height: 0;}
            .chess-board .light { background: #eee; }
            .chess-board .dark { background: #aaa; }
</style>