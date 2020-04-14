<template>
  <div id="app">
    <MainNav />
    <router-view />
  </div>
</template>

<script>
import MainNav from "./components/MainNav";

export default {
  name: "App",
  components: { MainNav },
};
</script>

<style>
#app {
}
</style>
