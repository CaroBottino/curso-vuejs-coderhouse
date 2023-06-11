<template>
  <div>
    <b-sidebar id="sidebar-cart" title="Carrito" right shadow>
      <div v-if="quantity == 0" class="px-3 py-2">
        <p>No hay items en su carrito</p>
      </div>
      <div v-else>
        <b-card
          v-for="(item, i) in items"
          :key="i"
          no-body
          class="overflow-hidden"
          style="max-width: 540px"
        >
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img :src="item.img" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body :title="item.name">
                <b-card-text>
                  <b-button-group class="float-center">
                    <b-button v-on:click="subtract(item)">-</b-button>
                    <b-button disabled>{{ item.q }}</b-button>
                    <b-button v-on:click="add(item)">+</b-button>
                  </b-button-group>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>

      <template #footer>
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <strong class="mr-auto">Total: </strong>
          {{ totalPrice | toPrice }}

          <b-button @click="buy" id="buy-btn">Pagar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "CarritoComponent",
  components: {},
  data() {
    return {
      items: [
        {
          name: "Fugazzeta con jamón",
          img: "https://images.deliveryhero.io/image/pedidosya/products/87d1409b-f779-4db8-8262-947f2ed22a32.jpg?quality=90&width=1280",
          price: 4800,
          q: 1,
        },
        {
          name: "Pizza de pepperoni",
          img: "https://images.deliveryhero.io/image/pedidosya/products/34281550-aeef-4317-870f-124be3862017.jpg?quality=90&width=1280",
          price: 4160,
          q: 2,
        },
      ],
      quantity: 2, //this.items.length(),
      totalPrice: 0,
    };
  },
  filters: {
    toPrice(price) {
      return "$ " + price.toFixed(2);
    },
  },
  methods: {
    add(item) {
      item.q++;
    },
    subtract(item) {
      item.q == 0 ? (item.q = 0) : item.q--;
    },
    buy() {
      console.log("iniciar compra...");
    },
  },
};
</script>

<style scoped>
.card-title {
  font-size: 1rem;
}

button {
  font-size: x-small;
}

#buy-btn {
  margin-left: 2rem;
  font-size: small;
}
</style>
