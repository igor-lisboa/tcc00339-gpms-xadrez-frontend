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
                    <td draggable="true" class="light">♜</td>
                    <td draggable="true" class="dark">♞</td>
                    <td draggable="true" class="light">♝</td>
                    <td draggable="true" class="dark">♛</td>
                    <td draggable="true" class="light">♚</td>
                    <td draggable="true" class="dark">♝</td>
                    <td draggable="true" class="light">♞</td>
                    <td  draggable="true" class="dark">♜</td>
                </tr>
                <tr>
                    <th>7</th>
                    <td draggable="true" class="dark">♟</td>
                    <td draggable="true" class="light">♟</td>
                    <td draggable="true" class="dark">♟</td>
                    <td draggable="true" class="light">♟</td>
                    <td  draggable="true" class="dark">♟</td>
                    <td draggable="true" class="light">♟</td>
                    <td draggable="true" class="dark">♟</td>
                    <td  draggable="true" class="light">♟</td>
                </tr>
                <tr>
                    <th>6</th>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <th>5</th>
                    <td draggable="true" @drop="drop(event)" @dragover="allowDrop(event)" class="dark"></td>
                    <td  draggable="true" @drop="drop(event)" @dragover="allowDrop(event)" class="light"></td>
                    <td draggable="true"  @drop="drop(event)" @dragover="allowDrop(event)" class="dark"></td>
                    <td  draggable="true"  @drop="drop(event)" @dragover="allowDrop(event)" class="light"></td>
                    <td  draggable="true"  @drop="drop(event)" @dragover="allowDrop(event)" class="dark"></td>
                    <td  draggable="true"  @drop="drop(event)" @dragover="allowDrop(event)" class="light"></td>
                    <td  draggable="true"  @drop="drop(event)" @dragover="allowDrop(event)" class="dark"></td>
                    <td  draggable="true"  @drop="drop(event)" @dragover="allowDrop(event)" class="light"></td>
                </tr>
                <tr>
                    <th>4</th>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    <th>3</th>
                    <td class="dark"  v-on:drop ="drop($event)" @dragover.stop @dragenter.prevent ></td>
                    <td class="light"  v-on:drop ="drop($event)" @dragover.stop @dragenter.prevent></td>
                    <td class="dark"  v-on:drop ="drop($event)" @dragover.stop @dragenter.prevent></td>
                    <td class="light"  v-on:drop ="drop($event)" @dragover.stop @dragenter.prevent></td>
                    <td class="dark"  v-on:drop ="drop($event)" @dragover.stop @dragenter.prevent></td>
                    <td class="light"  v-on:drop ="drop($event)" @dragover.stop @dragenter.prevent></td>
                    <td class="dark"  v-on:drop ="drop($event)" @dragover.stop @dragenter.prevent></td>
                    <td class="light"  v-on:drop ="drop($event)" @dragover.stop @dragenter.prevent></td>
                </tr>
                <tr>
                    <th>2</th>
                    <td  class="light" v-on:drop ="drop($event)" @dragover.stop @dragenter.prevent><div :draggable="true" @drag="drag($event)"   >♙</div></td>
                    <td  class="dark"  v-on:drop ="drop($event)" @dragover.stop @dragenter.prevent><div :draggable="true" @drag="drag($event)"  >♙</div></td>
                    <td   class="light" v-on:drop ="drop($event)" @dragover.stop @dragenter.prevent><div :draggable="true" @drag="drag($event)"  >♙</div></td>
                    <td   class="dark"  v-on:drop ="drop($event)" @dragover.stop @dragenter.prevent><div :draggable="true" @drag="drag($event)"  >♙</div></td>
                    <td   class="light"  v-on:drop ="drop($event)" @dragover.stop @dragenter.prevent><div :draggable="true" @drag="drag($event)"  >♙</div></td>
                    <td   class="dark" v-on:drop ="drop($event)" @dragover.stop @dragenter.prevent><div :draggable="true" @drag="drag($event)"  >♙</div></td>
                    <td  class="light"  v-on:drop ="drop($event)" @dragover.stop @dragenter.prevent><div :draggable="true" @drag="drag($event)"  >♙</div></td>
                    <td   class="dark" v-on:drop ="drop($event)" @dragover.stop @dragenter.prevent><div :draggable="true" @drag="drag($event)" >♙</div></td>
                </tr>
                <tr>
                    <th>1</th>
                    <td :draggable="true" @drag="drag($event)" @drop="drop($event)" @dragover.stop class="dark">♖</td>
                    <td :draggable="true" @drag="drag($event)" @drop="drop($event)" @dragover.stop class="light">♘</td>
                    <td :draggable="true" @drag="drag($event)" @drop="drop($event)" @dragover.stop class="dark">♗</td>
                    <td :draggable="true" @drag="drag($event)" @drop="drop($event)" @dragover.stop class="light">♕</td>
                    <td :draggable="true" @drag="drag($event)" @drop="drop($event)" @dragover.stop class="dark">♔</td>
                    <td :draggable="true" @drag="drag($event)" @drop="drop($event)" @dragover.stop class="light">♗</td>
                    <td :draggable="true" @drag="drag($event)" @drop="drop($event)" @dragover.stop class="dark">♘</td>
                    <td :draggable="true" @drag="drag($event)" @drop="drop($event)" @dragover.stop class="light">♖</td>
                </tr>
            </tbody>
        </table>
</template>

<script>


export default {
  name: 'Chess',
  methods: {
    drag: function(ev) {
       ev.dataTransfer.setData("piece", ev.target.id);
        ev.dataTransfer.dropEffect ="move";
        
      
       console.log(ev);
    },
    drop:function(ev){
    
        ev.preventDefault();
        var data = ev.dataTransfer.getData("piece");
        var piece = document.getElementById(data);
        piece.style.display= "block";
        ev.target.appendChild(piece);
        console.log("drop")
    } ,
   
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