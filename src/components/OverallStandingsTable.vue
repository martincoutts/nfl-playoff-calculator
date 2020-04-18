<template>
  <div class="overall-standings-table">
    <AfcOverall
      v-if="this.conference === 'AFC'"
      :teams="this.afc"
      :sortTeams="this.sortTeams"
    />
    <NfcOverall
      v-if="this.conference === 'NFC'"
      :teams="this.nfc"
      :sortTeams="this.sortTeams"
    />
  </div>
</template>

<script>
import AfcOverall from "./AfcOverall";
import NfcOverall from "./NfcOverall";
export default {
  name: "OverallStandingsTable",
  components: { AfcOverall, NfcOverall },
  props: ["results", "sortTeams", "conference"],
  data: function() {
    return {
      afc: [],
      nfc: [],
    };
  },
  created: function() {
    this.sortConferences(this.results, "AFC", this.afc);
    this.sortConferences(this.results, "NFC", this.nfc);
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
