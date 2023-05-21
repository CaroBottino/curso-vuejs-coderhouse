const { createApp } = Vue;

createApp({
    data() {
        return {
            x: 9,
            title: "Desafío #1: CONTADOR",
            name: "Carolina Bottino",
        }
    },
    created() {
        console.log("ya se creo...");
    },
    methods: {
        increment() {
            console.log('Sumando... ', this.x);
            this.x = this.x + 1;
        },
        decrement() {
            console.log('Restando... ', this.x);
            this.x = this.x - 1;
        }
    },
    computed: {
        calculoComputado() {
            return this.x * 2;
        }
    }
}).mount("#app");