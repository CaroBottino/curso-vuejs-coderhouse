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
          <td v-for="(header, j) in headers" :key="j">{{ item[header] }}</td>
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
};
</script>

<style scoped>
table {
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
}
</style>
