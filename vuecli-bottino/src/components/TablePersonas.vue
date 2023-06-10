<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column" scope="col">
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(person, i) in personas"
          :key="i"
          :class="i % 2 == 0 ? 'odd' : null"
        >
          <th>{{ i }}</th>
          <td>{{ person.name }}</td>
          <td>{{ person.phone }}</td>
          <td>{{ person.email }}</td>
          <td>{{ person.country }}</td>
          <td><img :src="person.img" alt="" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TablePersonas",
  props: {
    columns: Array,
    personas: Array,
  },
};
</script>
