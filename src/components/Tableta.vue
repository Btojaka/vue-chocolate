<template>
  <div class="contenedor-gde">
          <h1>{{ msg }}</h1>
          <!-- botones -->
          <div id="botones">
            <button @click="comerFila()" class="btn">COMER FILA</button>
            <button @click="comerColumna()" class="btn">COMER COLUMNA</button>
            <button @click="pararComer()" class="btn">¡NO QUIERO COMER MÁS!</button>
          </div>
          <!-- muestra la tableta  -->
      <div class="tableta">
          <div v-for="(i, indice) in tableta" :key="indice" class="fila">
              <div v-for="(j, index) in i" :key="j.iden" class="celda" @click="onClick(indice, index)" @mouseover="mouseOver(indice,index)" :id="j.color">
                  <p class="secret" v-if="pulsada && tableta[indice][index].secret === true ">¡MMM...!</p>
              </div>
          </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'Tableta',
  props: {
    msg: String
  },
  data:function(){
      return{
        tableta:[],
        colorToque: "",
        onzaSeleccionada: undefined,
        pulsada: true,
        comer: true,
      }     
  }, // creación de la tableta de chocolate
  created: function() {
        const auxArr = [] // array auxiliar
        for(let i=0; i<7;i++){
             auxArr.push([])
            for(let j=0; j<5; j++){
                auxArr[i].push({ 
                    iden: i+j, 
                    color: 'darkMarron',
                    tocada: false,
                    secret: false,
                    anular: false,
                })
            }
        }
        this.tableta = auxArr; // la tableta adopta el valor del array auxiliar 
  },
  methods: {
      // cambio de color al tocar la celda
        mouseOver(indice, index){
            // cambia a marron clarito tocada está en false
            if(this.tableta[indice][index].tocada === false && this.tableta[indice][index].anular === false){ 
                this.$set(this.tableta[indice][index], 'color', 'marron');
                this.$set(this.tableta[indice][index], 'tocada', true);
            }else if (this.tableta[indice][index].tocada === true && this.tableta[indice][index].anular === false){ // vuelve al color original porqeu tocada está en true
                this.$set(this.tableta[indice][index], 'color', 'darkMarron');
                this.$set(this.tableta[indice][index], 'tocada', false);
            }
        },
        // muestra mensaje al hacer click en una onza
        onClick(indice, index){
            // this.pulsada = !this.pulsada
            if(this.pulsada === true && this.tableta[indice][index].anular === false){
                this.$set(this.tableta[indice][index], 'secret', true);
                this.$set(this.tableta[indice][index], 'color', 'yellow');
                this.tableta[indice][index].anular = true;
            }

        },
        comerFila(){
            if(this.comer === true){
                var numF = Math.floor((Math.random() * (7 - 0 + 1)) + 0)
                for(let i=0; i<5; i++){                                    
                    this.$set(this.tableta[numF][i], 'color', 'pink');
                    this.$set(this.tableta[numF][i], 'anular', true);                                
                } 
            }else{
                alert("No puedes comer más! Estas a tope!");
            }                         

        },
        comerColumna(){
            if(this.comer === true){
            var numC = Math.floor((Math.random() * (5 - 0 + 1)) + 0)
            for(let i=0; i<7; i++){                              
                    this.$set(this.tableta[i][numC], 'color', 'pink');
                    this.$set(this.tableta[i][numC], 'anular', true);                                
            }
            }else{
                alert("No puedes comer más! Estas a tope!");
            } 
           
        },
        pararComer(){
            this.comer = false;
        }

    }
}
</script>

<style scoped>
h1 {
    text-align: center;
}
.contenedor-gde {
    background-color: rgb(234, 235, 222);
    height: 80vh;
}
.tableta{
    margin: 40px;
}
.fila {
   
    margin-top: 2px;
    margin-bottom: 2px;
    padding: 0px;
    height: 80px;   
}


.celda {
    display: inline-block;
    width:80px;
    height: 80px;
    background-color: rgba(29, 6, 6, 0.536);
    margin: 0px 1px;
    padding: 0px;    
}
.btn{
    border-radius: 0.5;
    background-color: rgb(181, 152, 59);
    width: 20vw;
    height: 5vh;
    display: inline-block;
    margin: 0px 20px;
}
.secret{
    display:table-cell;
    align-content: center;
    text-align: center;
}
#darkMarron{
    background-color: rgba(62, 15, 15, 0.536);
}
#marron{
    background-color:rgba(201, 97, 97, 0.543);
}
#yellow {
    background-color: yellow;
}
#pink{
    background-color: blueviolet;
}


</style>
