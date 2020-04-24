<template>
  <div class="standings__nfc--overall">
    <h1 class="nfc-overall__title">NFC</h1>
    <table>
      <tr>
        <th>Logo</th>
        <th>Team</th>
        <th>W</th>
        <th>L</th>
        <th>T</th>
        <th>PCT</th>
      </tr>
      <div v-for="team in teams" :key="team.TeamID" class="nfc-overall__team">
        <TeamRow :team="team" />
      </div>
    </table>
  </div>
</template>

<script>
import TeamRow from "./TeamRow";
export default {
  name: "NfcOverall",
  props: ["teams", "sortTeams"],
  components: { TeamRow },
  data: function() {
    return {
      sortedTeams: [],
    };
  },
  created: function() {
    this.sortedTeams = this.sortTeams(
      this.teams,
      "Wins",
      "DivisionWins",
      "ConferenceWins"
    );
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
table,
th,
td {
  border: 1px solid black;
  padding: 0 1rem 0 0;
}
.nfc-overall {
  &__team {
    display: flex;
  }
}
</style>
