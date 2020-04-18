<template>
  <div>
    Main Standings
    <OverallStandingsTable
      :results="this.results"
      :sortTeams="this.sortTeams"
    />
  </div>
</template>

<script>
import OverallStandingsTable from "./OverallStandingsTable";
export default {
  name: "MainStandings",
  components: { OverallStandingsTable },
  props: ["results", "sortTeams"],
};
</script>

<style lang="scss" scoped></style>
