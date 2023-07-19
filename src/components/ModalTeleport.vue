<template>
  <div>
    <button @click="toggleModal">Toggle modal</button>
    showModal: {{ showModal }}

    <teleport to="#modal-caro">
      <div v-if="showModal">
        Este es el modal desde Teleport
        <button @click="toggleModal">Close modal</button>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ModalTeleport",
  setup() {
    const showModal = ref(false);

    const toggleModal = () => {
      showModal.value = !showModal.value;
    };

    return { showModal, toggleModal };
  },
};
</script>
