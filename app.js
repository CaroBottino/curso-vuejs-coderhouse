const { createApp } = Vue;

createApp({
    data() {
        return {
            title: "Ejercicios de clase",
            name: "Carolina Bottino",
            show: true,
            cssProperties: {
                "bg-warning": true,
                "text-secondary": true
            },
            cssStyle: {
                "background-color": 'pink',
                "font-family": "Apple Color Emoji"
            },
            customClass: "myClass",
            personas: [],
        }
    },
    created() {
        console.log("ya se creo...");
        this.getElement();
    },
    methods: {
        changeState() {
            this.show ? this.show = false : this.show = true;
        },
        getElement() {
            this.personas = data;
        }
    },
    computed: {
    }
}).mount("#app");