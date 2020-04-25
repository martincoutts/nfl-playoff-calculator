<template>
  <div class="standings-table">
    <div class="standings-table__header">
      <TeamLogo class="standings-table__logo" :logo="logo" />
      <h1 class="standings-table__title">{{ title }}</h1>
    </div>

    <div class="standings-table__table">
      <div class="standings-table__table--header">
        <h3>Team</h3>
        <h3>W</h3>
        <h3>L</h3>
        <h3>T</h3>
        <h3>PCT</h3>
      </div>
      <div v-if="tableType === 'overall'">
        <div v-for="team in sortedTeams" :key="team.TeamID" class="standings-table__table--team">
          <TeamRow :team="team" />
        </div>
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
      bemBase: `${this.conference}-${this.tableType}`
    };
  },
  created: function() {
    this.defineConference();
    this.imageImport();
  },
  computed: {
    ...mapGetters(["sortedAfc", "sortedNfc"])
  },
  methods: {
    defineConference: function() {
      if (this.conference === "AFC") {
        this.sortedTeams = this.sortedAfc;
      } else {
        this.sortedTeams = this.sortedNfc;
      }
    },
    imageImport: function() {
      this.logo = require(`../assets/images/conferences//${this.conference}.svg`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";
.standings-table {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: $general-border;
  }
  &__logo {
    max-height: 100px;
    max-width: 100px;
  }

  &__table {
    display: flex;
    flex-direction: column;
    border: $general-border;
    &--header,
    &--team {
      display: grid;
      grid-template-columns: minmax(100px, 1fr) repeat(4, 1fr);
      grid-template-rows: auto;
      text-align: center;
      padding: 1rem;
      align-items: center;
    }
    &--header {
      border-bottom: $general-border;
    }
  }
}
</style>
