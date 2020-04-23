<template>
  <div id="app">
    <MainNav />
    <SubNav />
    <router-view
      v-if="this.results.length"
      :results="this.results"
      :sortTeams="this.sortTeams"
    />
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
    this.fetchNewData();
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

    // TODO: Need to find a way to test wether team a has played team b and what the result was
    sortTeams: function(arr, customVarA, customVarB, customVarC) {
      const compare = (a, b) => {
        if (a[customVarA] > b[customVarA]) return -1;
        if (a[customVarA] === b[customVarA]) {
          if (a[customVarB] > b[customVarB]) {
            console.log(customVarB);
            return -1;
          } else if (a[customVarB] === b[customVarB]) {
            if (a[customVarC] > b[customVarC]) {
              console.log(customVarC);
              return -1;
            }
          }
        }
        if (a[customVarA] < b[customVarA]) return 1;
        return 0;
      };
      const sortedArr = arr.sort(compare);
      console.log("sortedArr", sortedArr);
      return sortedArr;
    },
  },
};
</script>

<style>
#app {
}
</style>
