// *This is acts a container for the router

<template>
  <div class="afc-standings-table">
    <h1>AFC STANDINGS</h1>
    <!-- <div v-for="(div, index) in afcDivs" :key="index">
      <StandingsTable
        :title="div.value[0].Conference"
        :conference="div.value[0].Conference"
        :tableType="'division'"
      />
    </div> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import StandingsTable from "./StandingsTable";
export default {
  name: "AfcStandings",
  // components: { StandingsTable },

  //   data: function() {
  //     return {};
  //   },
  computed: {
    ...mapState(["afcDivs"]),
  },
  created: function() {
    this.sortConferences({
      divisions: true,
    });
  },

  methods: {
    ...mapActions(["sortConferences"]),
  },
};
</script>

<style lang="scss" scoped></style>
