<template>
  <div>
    <b-navbar class="navbar navbar-expand-lg fixed-top navbar-scroll">
      <div class="container-fluid">
        <b-navbar-brand href="#">App de pedidos</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">
                <b-icon icon="search" class="nav-icon"></b-icon>
              </b-button>
            </b-nav-form>

            <b-dropdown right no-caret>
              <template #button-content>
                <b-icon icon="person-circle" class="nav-icon"></b-icon>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-dropdown>

            <div class="dropdown">
              <button
                class="nav-btn"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <b-icon icon="person-circle" class="nav-icon"></b-icon>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>

            <b-button v-b-toggle.sidebar-cart class="nav-btn">
              <b-icon icon="cart" class="nav-icon"></b-icon>
            </b-button>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  components: {},
  props: {},
};
</script>

<style scoped>
.navbar {
  width: 100%;
  min-width: 20rem;
  min-height: 4rem;
  z-index: 9;
  color: crimson;
  background: rgba(241, 241, 241, 0.676);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.navbar-scrolled .nav-link,
.navbar-scrolled .navbar-toggler .fa-bars {
  background: rgba(241, 241, 241, 0.676);
}

.navbar-light .navbar-brand {
  color: crimson;
}

.nav-icon {
  color: white;
}

button {
  border-radius: 50%;
  margin-left: 0.5rem;
  background-color: orange;
  border-color: orange;
  padding: 13px;
}

.button-content {
  border-radius: 50%;
  margin-left: 1rem;
  background-color: orange;
  border-color: orange;
}
</style>
