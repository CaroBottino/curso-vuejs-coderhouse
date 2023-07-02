<template>
    <div>
        <h1>Counter</h1>
        <p>{{ getCounter }}</p>
        <button @click="contarClickHandler">Add</button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "ACounter",
    computed: {
        ...mapGetters("counter", ["getCounter"]),
    },
    methods: {
        contarClickHandler() {
            this.$store.dispatch("counter/increment");
        },
    },
};
</script>
