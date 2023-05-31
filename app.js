const { createApp } = Vue;

const CompCustom = {
    // props: [ 'titulo' ] // Vue2
    props: {
        titulo: String,
        subtitulo: String,
        link: String
    },
    template: `
        <div>
            <h1>{{ titulo }}</h1>
            <p>{{ subtitulo }}</p>
            <div class="alert alert-success" role="alert">
                Un alert success de bootstrap, que recibe un <a :href="link" class="alert-link">link desde props</a> :).
            </div>
        </div>
    `
}

const TablePersonas = {
    props: {
        personas: Array
    },
    template: `
    <div>
        <table class="table">
        <thead>
            <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">phone</th>
            <th scope="col">email</th>
            <th scope="col">country</th>
            <th scope="col">img</th>
            </tr>
        </thead>
        <tbody>
            <tr
            v-for="(person, i) in personas"
            :class="(i%2) == 0 ? 'odd' : null"
            >
            <th>{{ i }}</th>
            <td>{{ person.name}}</td>
            <td>{{ person.phone }}</td>
            <td>{{ person.email }}</td>
            <td>{{ person.country }}</td>
            <td><img :src="person.img" alt="" /></td>
            </tr>
        </tbody>
        </table>
    </div>
    `
}

createApp({
    components: {
        'custom-component': CompCustom,
        'table-personas': TablePersonas
    },
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