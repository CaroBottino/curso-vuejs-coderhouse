<template>
  <div>
    <h1>Users list</h1>
    <TableComponent
      :headers="headers"
      :data="getUsers"
      @submitEdit="editAvatar"
      @submitDelete="deleteItem"
    />
  </div>
</template>

<script>
import TableComponent from "@/components/TableComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "UsersList",
  components: {
    TableComponent,
  },
  data() {
    return {
      headers: ["id", "fullname", "pass", "email", "role", "avatar", "actions"],
    };
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },
  created() {
    this.getUsersFromApi();
  },
  methods: {
    editAvatar(item) {
      this.$store
        .dispatch("editUserAction", item)
        .then(() => this.$store.dispatch("getUsersAction"))
        .finally(() => alert("avatar editado"));
    },
    getUsersFromApi() {
      this.$store.dispatch("getUsersAction");
    },
    deleteItem(item) {
      this.$store
        .dispatch("deleteUserAction", item.id)
        .then(() => this.$store.dispatch("getUsersAction"));
    },
  },
};
</script>
