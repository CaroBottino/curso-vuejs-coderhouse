<template>
  <div id="modal-caro"></div>
  <hr />
  <ModalTeleport />
  <hr />
  <SuspensePokemon />
  <hr />
  <AddTask theme="light" @taskAdded="taskAddedHandler" />
  <div>
    <p>Tasks...</p>
    <ul v-for="task in tasks">
      <li>{{ task }}</li>
    </ul>
  </div>
  <hr />
  <CardSlot>
    <!-- <template v-slot:header>Titulo de la card</template> -->
    <template #header>Titulo de la card</template>
    :D
  </CardSlot>
  <hr />
  <h4>My vuelidate form</h4>
  <VuelidateForm />
</template>

<script>
import ModalTeleport from "./components/ModalTeleport.vue";
import SuspensePokemon from "./components/SuspensePokemon.vue";
import AddTask from "./components/AddTask.vue";
import CardSlot from "./components/CardSlot.vue";
import VuelidateForm from "./components/VuelidateForm.vue";
import { reactive } from "vue";

export default {
  name: "App",
  components: {
    ModalTeleport,
    SuspensePokemon,
    AddTask,
    CardSlot,
    VuelidateForm,
  },
  setup() {
    const tasks = reactive([]);

    const taskAddedHandler = (task) => {
      tasks.push(task);
    };

    return { tasks, taskAddedHandler };
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
