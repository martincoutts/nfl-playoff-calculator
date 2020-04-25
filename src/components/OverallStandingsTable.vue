<template>
  <div class="overall-standings-table">
    <!-- <AfcOverall
      v-if="this.conference === 'AFC'"
      :teams="this.afc"
      :sortTeams="this.sortTeams"
    />
    <NfcOverall
      v-if="this.conference === 'NFC'"
      :teams="this.nfc"
      :sortTeams="this.sortTeams"
    /> -->
    <div v-for="(arr, index) in data" :key="index">
      <StandingsTable :teams="arr" :sortTeams="this.sortTeams" />
    </div>
  </div>
</template>

<script>
// import AfcOverall from "./AfcOverall";
// import NfcOverall from "./NfcOverall";
import StandingsTable from "./StandingsTable";
export default {
  name: "OverallStandingsTable",
  components: { StandingsTable },
  props: ["results", "sortTeams"],
  data: function() {
    return {
      afc: [],
      nfc: [],
      data: [],
    };
  },
  created: function() {
    this.sortConferences(this.results, "AFC", this.afc);
    this.sortConferences(this.results, "NFC", this.nfc);
    this.data.push(this.afc);
    this.data.push(this.nfc);
  },

  methods: {
    sortConferences: function(arr, conference, conferenceArr) {
      arr.map((team) => {
        team.Conference === conference ? conferenceArr.push(team) : null;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
