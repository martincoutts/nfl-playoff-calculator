<template>
  <div class="standings-table">
    <div class="nfc-overall__header">
      <TeamLogo class="nfc-overall__logo" :logo="logo" />
      <h1 class="nfc-overall__title">{{ title }}</h1>
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
      <div
        v-for="team in sortedTeams"
        :key="team.TeamID"
        class="nfc-overall__team"
      >
        <TeamRow :team="team" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TeamRow from "./TeamRow";
import TeamLogo from "./TeamLogo";
export default {
  name: "StandingsTable",
  props: ["teams", "title", "conference", "tableType"],
  components: { TeamRow, TeamLogo },
  data: function() {
    return {
      sortedTeams: "",
      logo: "",
      bemBase: `${this.conference}-${this.tableType}`,
    };
  },
  created: function() {
    this.defineConference();
    this.imageImport();
  },
  computed: {
    ...mapGetters(["sortedAfc", "sortedNfc"]),
  },
  methods: {
    defineConference: function() {
      if (this.conference === "AFC") {
        console.log("1", this.conference);
        this.sortedTeams = this.sortedAfc;
      } else {
        this.sortedTeams = this.sortedNfc;
      }
    },
    imageImport: function() {
      this.logo = require(`../assets/images/conferences//${this.conference}.svg`);
    },
  },
};
</script>

<style lang="scss" scoped>
.nfc-overall {
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
