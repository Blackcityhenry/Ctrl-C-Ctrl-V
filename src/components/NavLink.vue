<script>
import { RouterLink } from 'vue-router';

export default{
  name: 'NavLink',
  props: {
    title: String,
    path: String,
    icon: String
  }
}
</script>

<template>
  <RouterLink class="nav-link" :to="path">
    <i class="mdi" :class="icon"></i>
    {{ title }}
  </RouterLink>
</template>

<style lang="scss">
.nav-link {
  display: grid;
  padding-left: 15px;
  align-items: center;

  grid-template-columns: auto 1fr;

  i {
    margin-right: 5px;
  }
}
</style>
