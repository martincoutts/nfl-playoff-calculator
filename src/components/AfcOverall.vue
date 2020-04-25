<template>
  <div class="standings__afc--overall">
    <div class="afc-overall__header">
      <img
        class="afc-overall__logo"
        src="../assets/images/conferences/AFC.svg"
      />
      <h1 class="afc-overall__title">AFC</h1>
    </div>

    <div class="nfc-overall__table">
      <div class="nfc-overall__table--header">
        <h3>Logo</h3>
        <h3>Team</h3>
        <h3>W</h3>
        <h3>L</h3>
        <h3>T</h3>
        <h3>PCT</h3>
      </div>
      <div v-for="team in teams" :key="team.TeamID" class="afc-overall__team">
        <TeamRow :team="team" />
      </div>
    </div>
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
.afc-overall {
  &__header {
    display: flex;
  }
  &__logo {
    max-height: 100px;
    max-width: 100px;
  }
  &__team {
    display: flex;
  }
  &__table {
    &--header {
      display: flex;
    }
  }
}
</style>
