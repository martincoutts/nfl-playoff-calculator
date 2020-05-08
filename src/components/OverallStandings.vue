// *This is acts a container for the router

<template>
  <div class="overall-standings-table">
    <div
      class="overall-standings-table__table"
      v-for="(arr, index) in combinedConferences"
      :key="index"
    >
      <StandingsTable
        :title="arr[0].Conference"
        :conference="arr[0].Conference"
        :id="arr[0].Conference"
        :tableType="'overall'"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import StandingsTable from "./StandingsTable";
export default {
  name: "OverallStandings",
  components: { StandingsTable },

  data: function() {
    return {};
  },
  computed: {
    ...mapState(["results", "combinedConferences"])
  },
  created: function() {
    this.sortConferences({
      conference: "AFC",
      conferenceArray: "afc"
    });
    this.sortConferences({
      conference: "NFC",
      conferenceArray: "nfc"
    });
  },

  methods: {
    ...mapActions(["sortConferences"])
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";
.overall-standings-table {
  @include standingsTablePadding;
}
</style>
