<template>
  <div>
    <b-card-group columns>
      <b-card
        v-for="(item, i) in items"
        :key="i"
        :title="item.name"
        :img-src="item.img"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          {{ item.price | toPrice }}
        </b-card-text>
        <b-button v-on:click="addToCart(item)" variant="info">
          Add to cart
        </b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { BCardGroup, BCard, BCardText, BButton } from "bootstrap-vue";

export default {
  name: "ListadoComponent",
  components: {
    "b-card-group": BCardGroup,
    "b-card": BCard,
    "b-card-text": BCardText,
    "b-button": BButton,
  },
  props: {
    items: Array,
  },
  filters: {
    toPrice(price) {
      return "$ " + price.toFixed(2);
    },
  },
  methods: {
    addToCart(item) {
      console.log("add to cart: ", item.name);
    },
  },
};
</script>

<style scoped>
.card-columns .card {
  width: 90%;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.card {
  border-radius: 5%;
}

.card-img-top {
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  max-height: 15rem;
  max-width: 100%;
}
</style>
