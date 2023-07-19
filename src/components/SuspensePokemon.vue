<template>
  <div>Pokemon</div>
  <Suspense>
    <template #default>
      <SuspensePokemonList />
    </template>
    <template #fallback> Cargando... </template>
  </Suspense>
</template>

<script>
import SuspensePokemonList from "./SuspensePokemonList.vue";

export default {
  name: "SuspensePokemon",
  components: {
    SuspensePokemonList,
  },
  setup() {},
};
</script>
