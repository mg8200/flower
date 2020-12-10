<template>
  <div id="app">
    <router-view />
    <vue-Navbar
      v-if="/(home)|(information)|(mine)/.test(this.$route.name)"
    />
  </div>
</template>
<script>
import vueNavbar from "./components/public/navbar";
import jwtDecode from "jwt-decode";
export default {
  components: {
    vueNavbar,
  },
  created() {
    const token = window.localStorage.getItem("token");
    if (token) {
      const DecodeToken = jwtDecode(token);
      this.$store.commit("changeUser", DecodeToken);
      this.$store.commit("changeIsLogin", true);
    }
  },
};
</script>