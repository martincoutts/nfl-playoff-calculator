<template>
  <div id="app">
    <MainNav />
    <SubNav />
    <router-view :results="this.results" />
  </div>
</template>

<script>
import MainNav from "./components/MainNav";
import SubNav from "./components/SubNav";

export default {
  name: "App",
  components: { MainNav, SubNav },
  data() {
    return {
      results: {},
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(
          `https://api.sportsdata.io/v3/nfl/scores/json/Standings/2019t?key=140e225b3d41407a9e77efaed16b3247`
        );
        const data = await res.json();
        this.results = data;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
#app {
}
</style>
