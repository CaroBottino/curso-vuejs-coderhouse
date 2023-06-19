<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col></b-col>
        <b-col>
          <!-- login form -->
          <b-form v-if="show" @submit="onSubmit" @reset="onReset">
            <b-form-group
              id="input-group-1"
              label="Email:"
              label-for="input-1"
              description="Nunca vamos a compartir tu email con otras compañías."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Tu email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.pass"
                placeholder="Tu contraseña"
                type="password"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="select-group-3">
              <p>
                ¿Aún no estás registrado? Registrate
                <a href="#" v-on:click="changeForm">aquí.</a>
              </p>
            </b-form-group>

            <b-button type="submit" variant="primary">Ingresar</b-button>
          </b-form>

          <!-- registration form -->
          <b-form v-else @submit="onSubmit" @reset="onReset">
            <b-form-group
              id="input-group-1"
              label="Email:"
              label-for="input-1"
              description="Nunca vamos a compartir tu email con otras compañías."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Tu email, que será tu user"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Nombre:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.name"
                type="text"
                placeholder="Tu nombre"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Apellido:"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="form.surname"
                type="text"
                placeholder="Tu apellido"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              label="Password:"
              label-for="input-4"
            >
              <b-form-input
                id="input-4"
                v-model="form.pass"
                placeholder="Ingresar contraseña"
                type="password"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="select-group-3">
              <p>
                ¿Ya tenés una cuenta? Ingresá
                <a href="#" v-on:click="changeForm">aquí.</a>
              </p>
            </b-form-group>

            <b-button type="submit" variant="primary">Registrarse</b-button>
          </b-form>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      form: {
        name: "",
        surname: "",
        email: "",
        pass: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log("usuario a loguear: ", JSON.stringify(this.form));
      this.$emit("logged", this.form);
    },
    changeForm() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.cabecera {
  height: 80px;
}

form {
  color: antiquewhite;
  margin-top: 130px;
  margin-bottom: 70px;
}

button {
  margin-right: 1rem;
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
