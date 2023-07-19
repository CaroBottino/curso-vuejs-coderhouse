<template>
  <div>
    Top 10 first Pokémons:

    <div v-for="(pokemon, index) in pokemons.results" :key="index">
      {{ index + 1 }}. {{ pokemon.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SuspensePokemonList",
  async setup() {
    const resp = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
    );
    const pokemons = await resp.json();

    return { pokemons };
  },
};
</script>
