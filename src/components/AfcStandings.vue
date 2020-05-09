// *This is acts a container for the router

<template>
  <div class="afc-standings-table">
    <div class="afc-standings-table__table" v-for="(div, index) in AFCDivs" :key="index">
      <StandingsTable
        :title="div[0].Conference"
        :division="div[0].Division"
        :id="div[0].Division"
        :conference="div[0].Conference"
        :tableType="'division'"
        :teams="div"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import StandingsTable from "./StandingsTable";
export default {
  name: "AfcStandings",
  components: { StandingsTable },

  computed: {
    ...mapState(["AFCDivs"])
  },
  created: function() {
    this.sortConferences({
      divisions: true
    });
  },

  methods: {
    ...mapActions(["sortConferences"])
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";
.afc-standings-table {
  @include standingsTablePadding;
  margin-top: $non-playoffs-margin-top-mobile;
  @include lg {
    margin-top: $non-playoffs-margin-top-desktop;
  }
  @include widescreenTableGrid(4, 1fr);
}
</style>
