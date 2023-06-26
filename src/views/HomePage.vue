<template>
  <div>
    <ListadoComponent
      :items="listado"
      :itemsCart="itemsCarrito"
      @addToCart="onAddToCart"
    />
  </div>
</template>

<script>
import ListadoComponent from "@/components/ListadoComponent.vue";

import items from "@/assets/json/items.json";

export default {
  name: "HomePage",
  components: {
    ListadoComponent,
  },
  data() {
    return {
      listado: items,
      itemsCarrito: [],
    };
  },
  methods: {
    onAddToCart(item) {
      this.updateStock(item);

      if (this.isInCart(item)) {
        this.itemsCarrito.forEach((i) => {
          if (i.id === item.id) {
            i.q = i.q + item.q;
          }
        });
      } else {
        this.itemsCarrito.push(item);
      }
    },
    updateStock(i) {
      this.listado.forEach((item) => {
        if (item.id === i.id) {
          console.log(`stock: ${item.stock}, q: ${i.q}`);
          item.stock = item.stock - i.q;
        }
      });

      // this.itemsCarrito.forEach((item) => {
      //   if (item.name === i.name) {
      //     item.q++;
      //   }
      // });
    },
    isInCart(i) {
      return this.itemsCarrito.find((item) => item.id === i.id);
    },
  },
};
</script>
