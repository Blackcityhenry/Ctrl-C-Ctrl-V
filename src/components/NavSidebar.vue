<script>
import { useRouter } from 'vue-router';
import NavLink from './NavLink.vue';

export default {
  name: 'NavSidebar',
  components: {
    NavLink
  },
  computed: {
    routes(){
      return useRouter().options.routes;
    }
  }
}
</script>

<template>
  <div class="nav">
    <NavLink v-for="route in routes" v-bind="route" />
    <!-- <router-link to="/">Landing</router-link> -->
    <!-- <router-link to="/dancing-racoon">Dancing Racoon</router-link>  -->
  </div>
</template>

<style lang="scss">
.nav {
  display: grid;
  grid-auto-columns: minmax(1fr, auto);
  grid-auto-rows: 40px;
  background-color: #ddd;
  box-shadow: 0 0 0 2px #ccc;
}
</style>
