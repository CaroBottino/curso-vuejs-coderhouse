<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" v-for="(header, i) in headers" :key="i">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td v-for="(header, j) in headers" :key="j">
            <template
              v-if="header === 'actions' && item.email !== 'caro@mail.com'"
            >
              <button
                type="button"
                class="btn btn-info"
                @click="submitEdit(item)"
              >
                edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                @click="submitDelete(item)"
              >
                delete
              </button>
            </template>
            <template v-else-if="header === 'avatar'">
              <img :src="item[header]" />
              <input
                type="text"
                class="form-control"
                name="avatar"
                v-model="item.avatar"
                placeholder="edit your avatar.."
              />
            </template>
            <template v-else>
              {{ item[header] }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  props: {
    headers: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.$store.dispatch("defineActiveTabAction", 2);
  },
  methods: {
    submitEdit(item) {
      this.$emit("submitEdit", item);
    },
    submitDelete(item) {
      this.$emit("submitDelete", item);
    },
  },
};
</script>

<style scoped>
img {
  max-height: 80px;
  max-width: 80px;
}
</style>
