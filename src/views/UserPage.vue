<template>
  <div class="body">
    <h1>User info page</h1>
    <div class="col d-flex justify-content-center">
      <div class="card">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="user.avatar" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ user.fullname }}</h5>
              <p class="card-text">email: {{ user.email }}</p>
              <p class="card-text">role: {{ user.role }}</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
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
      id: this.$route.params.id,
      user: {},
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      MockapiController.getUserById(this.id).then((res) => {
        this.user = res.data;
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

img {
  min-height: 12rem;
  min-width: 12rem;
  padding: 1rem;
}
</style>
