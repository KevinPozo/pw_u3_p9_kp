<template>
  <h1>Hola Mundo</h1>
  <h1>Consultando los datos del estudiante</h1>
  <h3>Estudiante: {{ idEstudiante }}</h3>
  <button @click="mostrarId">Mostrar</button>
</template>

<script>
export default {
  data() {
    return {
      idEstudiante: null
    }
  },
  created() {
  /*http://localhost:8080/hola/1?anio=2026&mes=1&apellido=pozo*/
    console.log(this.$route);
    console.log(this.$route.params.id);
    console.log(this.$route.query.anio);
    console.log(this.$route.query.mes);
    console.log(this.$route.query.apellido);
  },
  methods: {
    mostrarId() {
      console.log(this.$route.params.id);
      this.idEstudiante = this.$route.params.id;
    }
  }
}
</script>

<style></style>