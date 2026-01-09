<template>
  <div class="container">
    <img v-if="imagen" v-bind:src="imagen" alt="No se puede ver" />

    <div class="pregunta-container">
      <input
        type="text"
        placeholder="Hazme una pregunta!..."
        v-model="pregunta"
      />
      <p>Recuerda Terminar con el signo de interrogación (?)</p>

      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta }}</h1>
    </div>
  </div>
</template>

<script>
import {
  consumirApiFacade,
  consumirApiFacade2,
} from "../clients/YesNoClient.js";

export default {
  data() {
    return {
      pregunta: "",
      respuesta: null,
      imagen: null,
    };
  },
  watch: {
    pregunta(value) {
      if (value.includes("?")) {
        this.respuesta = "Pensando...";
        this.consumir();
      }
    },
  },
  methods: {
    async consumir() {
      const resp = await consumirApiFacade();
      console.log(resp);
      console.log(resp.answer);

      this.respuesta = resp.answer;
      this.imagen = resp.image;
    },
  },
};
</script>

<style>
img {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  left: 0;
  top: 0;
}

.pregunta-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  background-color: rgba(255, 255, 255, 0.295);
  padding: 20px;
  border-radius: 15px;
  border: 2px solid black;
  box-shadow: 2px 8px black;
  text-align: center;
}

input {
  width: 100%;
  text-align: center;
  font-size: 24px;
  border: 2px solid black;
  border-radius: 15px;
  height: 30px;
  padding: 10px 15px;
  border: none;
  box-sizing: border-box;
}

input:focus {
  outline: none;
}

h1,
h2,
p {
  color: black;
}

p {
  font-size: 24px;
}

h2 {
  margin-top: 150px;
}

body {
  background-color: rgba(0, 0, 0, 0.647);
  color: black;
}
</style>
