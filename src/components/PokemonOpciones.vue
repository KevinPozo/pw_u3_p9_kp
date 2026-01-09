<template>
    <div class="opciones-container">
        <ul>
            <li @click="$emit('seleccionado', pokemon.id)" v-for="pokemon in listaPokemon" :key="pokemon.id" :class="{
                correcta: idSeleccionado && pokemon.id === idCorrecto,
                incorrecta: idSeleccionado && pokemon.id === idSeleccionado && pokemon.id !== idCorrecto
            }">
                {{ pokemon.nombre }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        listaPokemon: {
            type: Array,
            required: true
        },
        idCorrecto: {
            type: Number
        },
        idSeleccionado: {
            type: Number,
            default: null
        }
    }
}
</script>

<style scoped>
.opciones-container {
    display: flex;
    justify-content: center;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #ddd;
    cursor: pointer;
    width: 250px;
    margin-top: 15px;
    text-align: center;
    padding: 12px;
    font-weight: 500;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

li:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.correcta {
    background-color: #a5d6a7 !important;
    border-color: #2e7d32 !important;
    color: #1b5e20;
}

.incorrecta {
    background-color: #ef9a9a !important;
    border-color: #c62828 !important;
    color: #b71c1c;
}
</style>