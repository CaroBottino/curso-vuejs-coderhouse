<template>
  <div>
    <LoginComponent @logged="onLoginSubmit" />
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";

export default {
  name: "LoginPage",
  components: {
    LoginComponent,
  },
  data() {
    return {
      logged: false,
      show: false,
      user: {},
    };
  },
  methods: {
    onLoginSubmit(user) {
      this.show = false;
      this.logged = true;
      this.user = user;
    },
  },
};
</script>
