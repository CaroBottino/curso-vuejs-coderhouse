<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th v-for="(header, i) in headers" :key="i">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, j) in items" :key="item.id">
          <th scope="row">{{ j + 1 }}</th>
          <td v-for="(header, k) in headers" :key="k">{{ item[header] }}</td>
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
      Array,
      required: true,
    },
    items: {
      Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.table {
  background-color: white;
  max-width: 90%;
  margin-left: 5%;
}
</style>
