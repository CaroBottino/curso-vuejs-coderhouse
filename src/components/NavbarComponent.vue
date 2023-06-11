<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="custom-navbar">
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
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import {
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BNavbarNav,
  BCollapse,
  BNavItem,
  BNavForm,
  BFormInput,
  BButton,
  BNavItemDropdown,
  BDropdownItem,
} from "bootstrap-vue";

export default {
  name: "NavbarComponent",
  components: {
    "b-navbar": BNavbar,
    "b-navbar-brand": BNavbarBrand,
    "b-navbar-toggle": BNavbarToggle,
    "b-navbar-nav": BNavbarNav,
    "b-collapse": BCollapse,
    "b-nav-item": BNavItem,
    "b-nav-form": BNavForm,
    "b-form-input": BFormInput,
    "b-button": BButton,
    "b-nav-item-dropdown": BNavItemDropdown,
    "b-dropdown-item": BDropdownItem,
  },
  props: {},
};
</script>

<style scoped>
.custom-navbar {
  position: sticky;
}
</style>
