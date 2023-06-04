const { createApp } = Vue;

const HeaderComp = {
    props: {
        title: String,
        name: String,
    },
    template: `
        <div>
            <figure>
                <blockquote class="blockquote">
                    <p>{{ title }}</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                    <cite title="Source Title">por {{ name }}</cite>
                </figcaption>
            </figure>
        </div>
    `
}

const TablePersonas = {
    props: {
        columns: Array,
        personas: Array
    },
    template: `
    <div>
        <table class="table">
        <thead>
            <tr>
                <th v-for="column in columns" scope="col">{{ column }}</th>
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
        'header-component': HeaderComp,
        'table-personas': TablePersonas
    },
    data() {
        return {
            title: "Proyecto VUE web components",
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
            columns: [
                "id",
                "name",
                "phone",
                "email",
                "country",
                "img"
            ]
        }
    },
    created() {
        this.getElement();
    },
    methods: {
        getElement() {
            this.personas = data;
        }
    },
    computed: {
    }
}).mount("#app");