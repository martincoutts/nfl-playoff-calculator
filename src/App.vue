<template>
  <div id="app">
    <MainNav />
    <SubNav />
    <router-view />
  </div>
</template>

<script>
import MainNav from "./components/MainNav";
import SubNav from "./components/SubNav";

export default {
  name: "App",
  components: { MainNav, SubNav },
};
</script>

<style>
#app {
}
</style>
