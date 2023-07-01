<template>
  <div>
    <h1>Traditional form</h1>
    <FormComponent :users="getUsers" @submitForm="createUser" />
  </div>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "TraditionalForm",
  components: {
    FormComponent,
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },
  created() {
    this.$store.dispatch("defineActiveTabAction", 0);
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
