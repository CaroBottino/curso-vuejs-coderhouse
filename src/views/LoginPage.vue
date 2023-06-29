<template>
  <div>
    <LoginComponent @submit="onLoginSubmit" @register="onRegisterSubmit" />
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";
import MockapiController from "@/controllers/MockapiController";
import store from "@/store";

export default {
  name: "LoginPage",
  components: {
    LoginComponent,
  },
  methods: {
    onLoginSubmit(form) {
      // como no puedo hacer un getUserByMail porque Mockapi solo me deja por id... lo hago asi jeje
      MockapiController.getUsers().then((res) => {
        console.log("onLoginSubmit - res: ", res);

        let found = res.data.find((user) => {
          return user.email === form.email;
        });

        if (found) {
          store.loggingUser(found);
          this.$router.push({ name: "user" });
        } else {
          alert("user or pass not correct");
          return;
        }
      });
    },
    onRegisterSubmit(form) {
      // como no puedo hacer un getUserByMail porque Mockapi solo me deja por id... lo hago asi jeje
      MockapiController.getUsers().then((res) => {
        console.log("res: ", res);

        let found = res.data.find((user) => {
          return user.email === form.email;
        });

        if (found) {
          alert("email already used...");
          return;
        } else {
          this.saveNewUser(form);
        }
      });
    },
    saveNewUser(form) {
      let newUser = {
        fullname: form.fullname,
        pass: form.pass,
        email: form.email,
        role: "buyer",
      };

      MockapiController.createUser(newUser)
        .then((res) => {
          store.loggingUser(res.data);
          this.$router.push({ name: "user" });
        })
        .catch((err) => {
          alert("error creando user: ", err);
        });
    },
  },
};
</script>
