<template>
  <div class="standings__afc--overall">
    <h1 class="afc-overall__title">AFC</h1>
    <table>
      <tr>
        <th>Logo</th>
        <th>Team</th>
        <th>W</th>
        <th>L</th>
        <th>T</th>
        <th>PCT</th>
      </tr>
      <tr v-for="team in teams" :key="team.TeamID" class="afc-overall__team">
        <TeamRow :team="team" />
      </tr>
    </table>
  </div>
</template>

<script>
import TeamRow from "./TeamRow";
export default {
  name: "AfcOverall",
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
.afc-overall {
  &__team {
    display: flex;
  }
}
</style>
