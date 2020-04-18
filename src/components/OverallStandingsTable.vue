<template>
  <div>
    OverallStandingsTable
    <AfcOverall :teams="this.afc" :sortTeams="this.sortTeams" />
  </div>
</template>

<script>
import AfcOverall from "./AfcOverall";
export default {
  name: "OverallStandingsTable",
  components: { AfcOverall },
  props: ["results", "sortTeams"],
  data: function() {
    return {
      afc: [],
      nfc: [],
    };
  },
  created: function() {
    this.afc = this.sortConferences(this.results, "AFC");
    this.nfc = this.sortConferences(this.results, "NFC");
  },

  methods: {
    sortConferences: function(arr, conference) {
      console.log("sortConferences");
      const tempArr = [];
      arr.map((team) => {
        team.Conference === conference ? tempArr.push(team) : null;
      });
      return tempArr;
    },
  },
};
</script>

<style lang="scss" scoped></style>
