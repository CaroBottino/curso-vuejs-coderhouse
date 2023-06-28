<template>
  <div class="body">
    <h1>User info page</h1>
    <h4>Cargar info de usuario id: {{ id }}</h4>
  </div>
</template>

<script>
export default {
  name: "UserPage",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style scoped>
.body {
  margin-top: 130px;
  margin-bottom: 70px;
}
</style>
