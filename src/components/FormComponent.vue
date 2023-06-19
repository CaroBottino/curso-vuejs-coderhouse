<template>
  <div class="form-demo">
    Formulario

    <form @submit.prevent="submitHandler">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" />
      <button>Enviar</button>
    </form>

    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    submitHandler() {
      if (this.name === "") {
        alert("El nombre es obligatorio");
        return;
      }
      alert("Formulario enviado");
    },
  },
};
</script>

<style scoped>
.form-demo {
  margin-left: 20%;
  margin-right: 20%;
}
</style>
