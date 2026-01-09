<template>
    <div class="pokemon-container">
        <img :src="srcImagen" alt="No se puede renderizar" class="pokemon-img">
    </div>
</template>

<script>
export default {
    props: {
        pokemonId: {
            type: Number,
            required: true
        }
    },
    computed: {
        srcImagen() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        }
    }
}
</script>

<style scoped>
.pokemon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
}

.pokemon-img {
    height: 200px;
    width: auto; 
    display: block;
    
    filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
    transition: transform 0.3s ease;
}

.pokemon-img:hover {
    transform: scale(1.05);
}
</style>