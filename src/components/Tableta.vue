<template>
    <div class="contenedor-gde">
      <img alt="Onzas de chocolate" src="../assets/onzas.jpeg" class="imagen-chocolate">
      <h1>{{ msg }}</h1>
      <!-- Botones -->
      <div id="botones">
        <button @click="comerFila()" class="btn">COMER FILA</button>
        <button @click="comerColumna()" class="btn">COMER COLUMNA</button>
        <button @click="abrirGuardar()" class="btn">¡NO QUIERO COMER MÁS!</button>
      </div>
      <!-- Muestra la tableta -->
      <div class="tableta">
        <div v-for="(fila, indice) in tableta" :key="indice" class="fila">
          <div
            v-for="(celda, index) in fila"
            :key="celda.iden"
            class="celda"
            @click="onClick(indice, index)"
            :style="{ backgroundColor: celda.color }"
          >
            <p class="emoji" v-if="celda.secret">😋</p>
          </div>
        </div>
      </div>
      <!-- Botón para recuperar tableta guardada -->
      <button v-if="tabletaGuardada" @click="recuperarTableta()" class="btn-guardada">Tableta Guardada</button>
  
      <!-- Cuadro de diálogo -->
      <div v-if="mostrarDialogo" class="dialogo">
        <div class="dialogo-contenido">
          <p>{{ mensajeDialogo }}</p>
          <button
            v-if="mostrarSoloOk"
            @click="confirmarDialogo(true)"
          >
            OK
          </button>
          <template v-else>
            <button @click="confirmarDialogo(true)">Guardar</button>
            <button @click="confirmarDialogo(false)">No</button>
          </template>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Tableta",
    props: {
      msg: String,
    },
    data() {
      return {
        tableta: [],
        tabletaGuardada: false,
        mostrarDialogo: false,
        mensajeDialogo: "",
        callbackDialogo: null,
        mostrarSoloOk: false,
      };
    },
    created() {
      this.iniciarJuego();
    },
    methods: {
      iniciarJuego() {
        if (localStorage.getItem("tabletaGuardada")) {
          this.tabletaGuardada = true;
        }
        this.resetTableta();
      },
      resetTableta() {
        const auxArr = [];
        for (let i = 0; i < 7; i++) {
          auxArr.push([]);
          for (let j = 0; j < 5; j++) {
            auxArr[i].push({
              iden: `${i}-${j}`,
              color: "rgba(62, 15, 15, 0.8)",
              secret: false,
              anular: false,
            });
          }
        }
        this.tableta = auxArr;
      },
      onClick(indice, index) {
        const celda = this.tableta[indice][index];
        if (!celda.anular) {
          celda.secret = true;
          celda.color = "rgba(201, 97, 97, 0.8)";
          celda.anular = true;
          this.checkIfFinished();
        }
      },
      comerFila() {
        const filasDisponibles = this.tableta
          .map((fila, i) => (fila.every((celda) => celda.anular) ? null : i))
          .filter((i) => i !== null);
        if (filasDisponibles.length === 0) {
          this.mostrarFin("¡Ya te has acabado la tableta!");
          return;
        }
        const fila = filasDisponibles[Math.floor(Math.random() * filasDisponibles.length)];
        this.tableta[fila].forEach((celda) => {
          celda.secret = true;
          celda.color = "rgba(201, 97, 97, 0.3)";
          celda.anular = true;
        });
        this.checkIfFinished();
      },
      comerColumna() {
        const columnasDisponibles = this.tableta[0]
          .map((_, i) =>
            this.tableta.every((fila) => fila[i].anular) ? null : i
          )
          .filter((i) => i !== null);
        if (columnasDisponibles.length === 0) {
          this.mostrarFin("¡Ya te has acabado la tableta!");
          return;
        }
        const columna =
          columnasDisponibles[
            Math.floor(Math.random() * columnasDisponibles.length)
          ];
        this.tableta.forEach((fila) => {
          fila[columna].secret = true;
          fila[columna].color = "rgba(201, 97, 97, 0.3)";
          fila[columna].anular = true;
        });
        this.checkIfFinished();
      },
      abrirGuardar() {
        this.mostrarDialogo = true;
        this.mostrarSoloOk = false;
        this.mensajeDialogo = "¿Quieres guardar esta tableta para más tarde?";
        this.callbackDialogo = this.guardarTableta;
      },
      guardarTableta(confirmado) {
        if (confirmado) {
          localStorage.setItem("tabletaGuardada", JSON.stringify(this.tableta));
          this.tabletaGuardada = true;
          this.mostrarFin("¡Partida guardada!");
          this.resetTableta();
        } else {
          this.resetTableta();
        }
        this.mostrarDialogo = false;
      },
      recuperarTableta() {
        this.tableta = JSON.parse(localStorage.getItem("tabletaGuardada"));
        this.tabletaGuardada = false;
        localStorage.removeItem("tabletaGuardada");
      },
      checkIfFinished() {
        const terminado = this.tableta.every((fila) =>
          fila.every((celda) => celda.anular)
        );
        if (terminado) {
          this.mostrarFin("¡Ya te has acabado la tableta!");
        }
      },
      confirmarDialogo(respuesta) {
        if (this.callbackDialogo) this.callbackDialogo(respuesta);
        this.mostrarDialogo = false;
      },
      mostrarFin(mensaje) {
        this.mostrarDialogo = true;
        this.mensajeDialogo = mensaje;
        this.mostrarSoloOk = true;
        this.callbackDialogo = () => {
          this.resetTableta();
        };
      },
    },
  };
  </script>  
  
  <style scoped>
  /* Estilos de la tableta y los cuadros de diálogo */

  .contenedor-gde {
    background-color: rgb(234, 235, 222);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .imagen-chocolate {
  margin-top: 10px; /* Espaciado entre la imagen y el mensaje */
  margin-bottom: 0px;
  max-width: 80%; /* Tamaño ajustado para que no ocupe toda la pantalla */
  height: auto; /* Mantener la proporción de la imagen */
  display: block; /* Centrar horizontalmente */
  margin-left: auto;
  margin-right: auto;
  border-radius: 16px; /* Bordes redondeados para mejor estética */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Sombra ligera */
}
h1 {
    margin-top: 10px;
    text-align: center;
    color: #4a4a4a;
  }
  
  .tableta {
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .fila {
    display: flex;
  }
  
  .celda {
    width: 80px;
    height: 80px;
    margin: 2px;
    position: relative;
    cursor: pointer;
    background-color: rgba(62, 15, 15, 0.8); /* Marrón oscuro */
    transition: background-color 0.3s ease;
    border-radius: 4px;
  }
  
  .celda:hover {
    background-color: rgba(201, 97, 97, 0.8); /* Marrón más claro */
  }
  
  .emoji {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.9);
  }
  
  .btn {
    border-radius: 5px;
    background-color: rgb(181, 152, 59);
    color: white;
    width: 20vw;
    height: 40px;
    margin: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
    border: none;
  }
  
  .btn:hover {
    background-color: rgb(150, 130, 50);
  }
  
  .btn-guardada {
    border-radius: 5px;
    background-color: rgb(100, 200, 100);
    color: white;
    width: 200px;
    height: 40px;
    margin-bottom: 20px;
    cursor: pointer;
    font-weight: bold;
    border: none;
    transition: background-color 0.3s ease;
  }
  
  .btn-guardada:hover {
    background-color: rgb(80, 180, 80);
  }
  
  .dialogo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .dialogo-contenido {
    background: white;
    padding: 20px 30px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
  
  .dialogo-contenido p {
    margin-bottom: 20px;
    font-size: 1.2rem;
    color: #4a4a4a;
  }
  
  .dialogo-contenido button {
    margin: 5px;
    padding: 10px 20px;
    background-color: rgb(181, 152, 59);
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .dialogo-contenido button:hover {
    background-color: rgb(150, 130, 50);
  }
  </style>
  
