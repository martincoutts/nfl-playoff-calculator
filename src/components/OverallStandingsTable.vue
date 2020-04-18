<template>
  <div>
    OverallStandingsTable
    <AfcOverall :teams="this.afc" />
  </div>
</template>

<script>
import AfcOverall from "./AfcOverall";
export default {
  name: "OverallStandingsTable",
  components: { AfcOverall },
  props: ["results"],
  data: function() {
    return {
      afc: [],
      nfc: [],
    };
  },
  created: function() {
    this.sortConferences();
  },
  methods: {
    sortConferences: function() {
      this.results.map((team) => {
        team.Conference && team.Conference === "AFC"
          ? this.afc.push(team)
          : this.nfc.push(team);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
