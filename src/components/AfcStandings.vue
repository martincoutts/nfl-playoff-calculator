// *This is acts a container for the router

<template>
  <div class="afc-standings-table">
    <h1>AFC STANDINGS</h1>
    <div v-for="(arr, index) in combinedConferences" :key="index">
      <StandingsTable
        :title="arr[0].Conference"
        :conference="arr[0].Conference"
        :tableType="'overall'"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import StandingsTable from "./StandingsTable";
export default {
  name: "AfcStandings",
  components: { StandingsTable },

  //   data: function() {
  //     return {};
  //   },
  //   computed: {
  //     ...mapState(["results", "combinedConferences"]),
  //   },
  created: function() {
    this.sortConferences({
      conference: "AFC",
      conferenceArray: "afc",
    });
  },

  methods: {
    ...mapActions(["sortConferences"]),
  },
};
</script>

<style lang="scss" scoped></style>
