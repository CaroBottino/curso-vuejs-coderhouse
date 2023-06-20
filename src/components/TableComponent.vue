<template>
  <div>
    <h2>Data registered</h2>

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
            <template v-if="header === 'actions' && item.extra.length === 0">
              <button
                type="button"
                class="btn btn-info"
                @click="submitExtra(item)"
              >
                extra
              </button>
            </template>
            <template v-else-if="header === 'extra' && item.extra.length === 0">
              <input
                type="text"
                class="form-control"
                name="extra"
                id="extra"
                v-model="extra"
                placeholder="any extra data.."
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
  data() {
    return {
      extra: "",
    };
  },
  methods: {
    submitExtra(item) {
      this.$emit("submitExtra", item, this.extra);
      this.extra = "";
    },
  },
};
</script>

<style scoped>
table {
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
}
</style>
