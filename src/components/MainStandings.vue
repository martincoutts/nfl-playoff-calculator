<template>
  <div>
    <OverallStandingsTable />
  </div>
</template>

<script>
import OverallStandingsTable from "./OverallStandingsTable";
export default {
  name: "MainStandings",
  components: { OverallStandingsTable },
  data: function() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.team-row__logo {
  height: 40px;
}
</style>
