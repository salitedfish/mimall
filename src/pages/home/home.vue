<template>
  <div>
    <nav-header><nav-header>
    <router-view><router-view>
    <nav-footer><nav-footer>
  </div>
</template>

<script>
import NavHeader from "../../components/navHeader/NavHeader.vue";
import NavFooter from "../../componentonents/NavFooter/NavFooter.vue";

export default {
  components: { NavFooter, NavHeader },
  name: "home",
};
</script>
    NavFooter

<style>
</style>