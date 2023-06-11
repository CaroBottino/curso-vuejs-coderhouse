<template>
  <div>
    <b-sidebar id="sidebar-cart" title="Carrito" right shadow>
      <div class="px-3 py-2">
        <p>No hay items en su carrito</p>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { BSidebar } from "bootstrap-vue";

export default {
  name: "CarritoComponent",
  components: {
    "b-sidebar": BSidebar,
  },
};
</script>
