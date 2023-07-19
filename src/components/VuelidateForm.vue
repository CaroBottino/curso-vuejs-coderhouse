<template>
  <form @submit.prevent="submitHandler">
    <div>
      <label for="email">email:</label>
      <input type="email" id="email" v-model="formState.email" />
      <span v-if="v$.email.$error">
        <li v-for="error in v$.email.$errors">{{ error.$message }}</li>
      </span>
    </div>
    <div>
      <label for="pass">password:</label>
      <input type="password" id="pass" v-model="formState.password.pass" />
      <span v-if="v$.password.pass.$error">
        <li v-for="error in v$.password.pass.$errors">{{ error.$message }}</li>
      </span>
    </div>
    <div>
      <label for="confirm">repita password:</label>
      <input
        type="password"
        id="confirm"
        v-model="formState.password.confirm"
      />
      <span v-if="v$.password.confirm.$error">
        <li v-for="error in v$.password.confirm.$errors">
          {{ error.$message }}
        </li>
      </span>
    </div>
    <div>
      <label for="code">codigo acceso:</label>
      <input type="text" id="code" v-model="formState.code" />
      <span v-if="v$.code.$error">
        <li v-for="error in v$.code.$errors">{{ error.$message }}</li>
      </span>
    </div>

    <button>Submit!</button>
  </form>
</template>

<script setup>
import { reactive, computed } from "vue";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const formState = reactive({
  email: "",
  password: {
    pass: "",
    confirm: "",
  },
  code: "",
});

const customValidation = (value) => {
  return /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/.test(value);
};

// hasta acá todo igual que siempre... ahora empieza a jugar vuelidate, con las rules :)
// guarda con esto! son COMPUTED
const rules = computed(() => {
  return {
    email: {
      required,
      email,
    },
    password: {
      pass: {
        required,
        minLength: minLength(6),
        customValidation: helpers.withMessage(
          "contraseña debe tener mayúscula, minúscula y número.",
          customValidation
        ),
      },
      confirm: {
        required,
        sameAs: helpers.withMessage(
          "las contraseñas deben coincidir",
          sameAs(formState.password.pass)
        ),
      },
    },
    code: { required },
  };
});

// v$ es por convencion, lo propone la doc
const v$ = useVuelidate(rules, formState);

// ahora submitHandler pasa a ser SINCRONA, porque espera la validacion
const submitHandler = async () => {
  console.log("submit! ", formState);

  const result = await v$.value.$validate();
  console.log("v$: ", v$);
  console.log("result: ", result);
};
</script>
