<template>
    <div class="pokemon-view">
        <h1 v-if="!pokemonGanador">Espere por favor...</h1>

        <div v-else>

            <PokemonImagen v-if="mostrarImagen && pokemonGanador" :pokemonId="pokemonGanador" />

            <PokemonOpciones :listaPokemon="pokemonaArr" :idCorrecto="pokemonGanador" :idSeleccionado="seleccionUsuario"
                @seleccionado="evaluarGanador($event)" />

            <div v-if="mensaje" class="mensaje-resultado fade-in">
                <h2>{{ mensaje }}</h2>
            </div>
        </div>
    </div>
</template>

<script>
import PokemonOpciones from '@/components/PokemonOpciones.vue';
import PokemonImagen from '@/components/PokemonImagen.vue';
import { obtenerVectorNumericoFacade, obtenerAleatorioFacade } from '../clients/PokemonClient';

export default {
    components: {
        PokemonOpciones,
        PokemonImagen
    },
    data() {
        return {
            mostrarImagen: true,
            pokemonaArr: [],
            pokemonGanador: null,
            mensaje: null,
            seleccionUsuario: null
        }
    },
    mounted() {
        this.iniciarJuego();
    },
    methods: {
        async iniciarJuego() {
            this.pokemonaArr = await obtenerVectorNumericoFacade();
            const idAleatorio = obtenerAleatorioFacade(0, 3);
            this.pokemonGanador = this.pokemonaArr[idAleatorio].id;
            this.mensaje = null;
            this.seleccionUsuario = null;
            this.mostrarImagen = true;
        },
        evaluarGanador(idGanador) {
            if (this.seleccionUsuario) return;

            this.seleccionUsuario = idGanador;

            if (idGanador === this.pokemonGanador) {
                this.mensaje = `¡Correcto! Es ${this.pokemonaArr.find(p => p.id === idGanador).nombre}`;
            } else {
                this.mensaje = `Oops, era ${this.pokemonaArr.find(p => p.id === this.pokemonGanador).nombre}`;
            }

            setTimeout(() => {
                this.iniciarJuego();
            }, 3000);
        }
    }
}
</script>

<style scoped>
.pokemon-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.mensaje-resultado {
    margin: 20px 0;
    padding: 15px 30px;
    background-color: #fff;
    border-radius: 50px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    color: #34495e;
    font-weight: bold;
}

.fade-in {
    animation: fadeIn 0.5s;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
