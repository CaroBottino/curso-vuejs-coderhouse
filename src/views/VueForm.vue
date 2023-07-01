<template>
  <div>
    <h1>Vue form</h1>
    <VueFormComponent :users="getUsers" @submitForm="createUser" />
  </div>
</template>

<script>
import VueFormComponent from "@/components/VueFormComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "VueForm",
  components: {
    VueFormComponent,
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },
  created() {
    this.$store.dispatch("defineActiveTabAction", 1);
  },
  methods: {
    createUser(form) {
      this.$store
        .dispatch("addUserAction", form)
        .then(() => this.$store.dispatch("getUsersAction"))
        .finally(() => alert("usuario creado"));
    },
  },
};
</script>
