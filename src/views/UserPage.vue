<template>
  <div class="body">
    <h1>User info page</h1>
    <div v-if="!loading" class="col d-flex justify-content-center">
      <div class="card">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="user.avatar" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ user.fullname }}</h5>
              <div v-if="edit">
                <div>
                  <label for="fullname">Fullname</label>
                  <input
                    type="text"
                    id="role"
                    v-model="user.fullname"
                    name="fullname"
                  />
                </div>
                <div>
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    v-model="user.email"
                    name="email"
                  />
                </div>
                <div>
                  <label for="pass">Password</label>
                  <input
                    type="text"
                    id="pass"
                    v-model="user.pass"
                    name="pass"
                  />
                </div>
                <div>
                  <label for="role">Role</label>
                  <select id="role" v-model="user.role">
                    <option value="admin">admin</option>
                    <option value="buyer">buyer</option>
                  </select>
                </div>
                <div>
                  <label for="fullname">Avatar</label>
                  <input
                    type="text"
                    id="avatar"
                    v-model="user.avatar"
                    name="avatar"
                  />
                </div>

                <b-button v-on:click="editUser()">
                  <b-icon icon="check" class="nav-icon"></b-icon>
                </b-button>
              </div>
              <div v-else>
                <p class="card-text">email: {{ user.email }}</p>
                <p class="card-text">Password: {{ user.pass }}</p>
                <p class="card-text">role: {{ user.role }}</p>

                <b-button v-on:click="showEditMode()">
                  <b-icon icon="pencil" class="nav-icon"></b-icon>
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MockapiController from "@/controllers/MockapiController";

export default {
  name: "UserPage",
  data() {
    return {
      param: this.$route.params.email,
      user: {
        id: "",
        fullname: "",
        pass: "",
        role: "",
        email: "",
        avatar: "",
        cart: [],
      },
      edit: false,
      roles: ["admin", "buyer"],
      loading: true,
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      // como no puedo hacer un getUserByMail porque Mockapi solo me deja por id... lo hago asi jeje
      MockapiController.getUsers().then((res) => {
        console.log("res: ", res);
        console.log("param: ", this.param);

        this.user = res.data.find((user) => {
          return user.email === this.param;
        });

        this.loading = false;
      });
    },
    showEditMode() {
      this.edit = true;
    },
    editUser() {
      MockapiController.updateUser(1, this.user)
        .then((res) => {
          this.user = res.data;
          this.edit = false;
        })
        .catch((err) => {
          alert("error editando user: ", err);
        });
    },
  },
};
</script>

<style scoped>
.body {
  margin-top: 80px;
  margin-bottom: 70px;
  color: whitesmoke;
  align-content: center;
  background-color: #222222;
}

.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: black;
}

label {
  margin-right: 1rem;
}

img {
  min-height: 16rem;
  min-width: 16rem;
  padding: 1rem;
}
</style>
