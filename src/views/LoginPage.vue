<template>
  <div>
    <LoginComponent @submit="onLoginSubmit" @register="onRegister" />
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";
import MockapiController from "@/controllers/MockapiController";

export default {
  name: "LoginPage",
  components: {
    LoginComponent,
  },
  data() {
    return {};
  },
  methods: {
    onLoginSubmit(user) {
      // como no puedo hacer un getUserByMail porque Mockapi solo me deja por id... lo hago asi jeje
      MockapiController.getUsers().then((res) => {
        console.log("res: ", res);

        let found = res.data.find((u) => {
          return u.email === user.email;
        });

        this.$router.push({ name: "user", params: { email: found.email } });
      });
    },
    onRegister(user) {
      // como no puedo hacer un getUserByMail porque Mockapi solo me deja por id... lo hago asi jeje
      MockapiController.getUsers().then((res) => {
        console.log("res: ", res);

        let found = res.data.find((u) => {
          return u.email === user.email;
        });

        if (found) {
          alert("email already used...");
          return;
        } else {
          this.saveNewUser(user);
        }
      });
    },
    saveNewUser(user) {
      // guardar...
      this.$router.push({ name: "user", params: { email: user.email } });
    },
  },
};
</script>
