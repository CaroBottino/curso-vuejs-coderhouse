<template>
  <div id="app">
    <header align="center" :style="cssStyle">
      <HeaderComp :title="title" :name="name" />
    </header>

    <h4 :class="customClass">Recorrido de data:</h4>
    <TablePersonas :columns="columns" :personas="personas" />
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import TablePersonas from "./components/TablePersonas.vue";

//import data from "@/data.js";

export default {
  name: "App",
  components: {
    HeaderComp,
    TablePersonas,
  },
  data() {
    return {
      title: "De Vue CDN a Vue CLI",
      name: "Carolina Bottino",
      columns: ["id", "name", "phone", "email", "country", "img"],
      //personas: [],
      personas: [
        {
          id: 1,
          name: "Isabelle Castillo",
          phone: "(117) 106-4795",
          email: "per.conubia.nostra@aol.edu",
          country: "Indonesia",
          img: "https://th.bing.com/th/id/OIP.NyRPeI_G7ePTMobWo4mm8AHaE7?pid=ImgDet&rs=1",
        },
        {
          id: 2,
          name: "Trevor Manning",
          phone: "(732) 880-6666",
          email: "sociis.natoque.penatibus@hotmail.edu",
          country: "Mexico",
          img: "https://th.bing.com/th/id/R.b2e66599d2c02f3f62de26db9795d779?rik=tE3aLcn0r0VmWA&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1539090521412-7af9bbc1110b%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax&ehk=0zfxFmEULX5HCU879qVZF1umRSgJcrYSTm80NgWwsg8%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          id: 3,
          name: "Phoebe Larson",
          phone: "1-556-721-6080",
          email: "laoreet@protonmail.net",
          country: "New Zealand",
          img: "https://th.bing.com/th/id/OIP.XTpjqTqqg5WuHVRJ8LA9-AHaEK?pid=ImgDet&rs=1",
        },
        {
          id: 4,
          name: "Boris Whitney",
          phone: "(228) 877-1996",
          email: "nam.nulla@aol.couk",
          country: "Mexico",
          img: "https://th.bing.com/th/id/OIP.5P8MMlvjNZ6ywTJgJVLhMwHaE8?pid=ImgDet&w=600&h=400&rs=1",
        },
        {
          id: 5,
          name: "Georgia Marsh",
          phone: "(264) 424-2762",
          email: "luctus@outlook.net",
          country: "Belgium",
          img: "https://th.bing.com/th/id/OIP.0eZWhz2iI97d9cJ9L_h5xwHaJQ?pid=ImgDet&rs=1",
        },
        {
          id: 5,
          name: "Georgia Marsh",
          phone: "(264) 424-2762",
          email: "luctus@outlook.net",
          country: "Belgium",
          img: "https://th.bing.com/th/id/OIP.0eZWhz2iI97d9cJ9L_h5xwHaJQ?pid=ImgDet&rs=1",
        },
        {
          id: 5,
          name: "Georgia Marsh",
          phone: "(264) 424-2762",
          email: "luctus@outlook.net",
          country: "Belgium",
          img: "https://th.bing.com/th/id/OIP.0eZWhz2iI97d9cJ9L_h5xwHaJQ?pid=ImgDet&rs=1",
        },
      ],
      cssStyle: {
        "background-color": "pink",
      },
      customClass: "myClass",
    };
  },
  created() {
    this.getElement();
  },
  methods: {
    getElement() {
      //this.personas = data;
      console.log(this);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
