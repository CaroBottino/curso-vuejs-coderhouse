<template>
  <div>Task</div>
  theme: {{ props.theme }}

  <form @submit.prevent="submitHandler">
    <label for="task">Añadir tarea: </label>
    <input type="text" id="task" v-model="task" />

    <button>Enviar!</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
// vue me largo un mensaje de que defineProps y defineEmits ahora son compiler macros. por lo que no necesitan ser importadas :)

const props = defineProps({
  theme: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["taskAdded"]);

const task = ref("");

const submitHandler = () => {
  emits("taskAdded", task.value);
  task.value = "";
};
</script>
