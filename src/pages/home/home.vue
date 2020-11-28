<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "../../components/navheader/NavHeader";
import NavFooter from "../../components/navfooter/NavFooter";


export default {
  name: "home",
  components: { NavHeader,NavFooter },
};
</script>

<style>
</style>