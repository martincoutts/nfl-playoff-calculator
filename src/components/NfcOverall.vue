<template>
  <div class="standings__nfc--overall">
    <h1 class="nfc-overall__title">NFC</h1>
    <div v-for="team in teams" :key="team.TeamID" class="nfc-overall__team">
      <p>{{ team.Name }}</p>
      <p>{{ team.Wins }}</p>
      <p>{{ team.Losses }}</p>
      <p>{{ team.Ties }}</p>
      <p>{{ team.Percentage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NfcOverall",
  props: ["teams", "sortTeams"],
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
};
</script>

<style lang="scss" scoped>
.nfc-overall {
  &__team {
    display: flex;
    p {
      padding: 0 1rem 0 0;
    }
  }
}
</style>
