<template>
  <div>
    Main Standings
    <OverallStandingsTable :results="this.results" />
  </div>
</template>

<script>
import OverallStandingsTable from "./OverallStandingsTable";
export default {
  name: "MainStandings",
  components: { OverallStandingsTable },
  props: ["results"],
};
</script>

<style lang="scss" scoped></style>
