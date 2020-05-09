<template>
  <div :class="bemBase">
    <div class="standings-table__header">
      <TeamLogo class="standings-table__logo" :logo="logo" />
      <h1 :id="id" class="standings-table__title">
        {{ title }} {{ division }}
      </h1>
    </div>

    <div class="standings-table__table">
      <div class="standings-table__table--header">
        <h3>Team</h3>
        <h3>W</h3>
        <h3>L</h3>
        <h3>T</h3>
        <h3>PCT</h3>
      </div>
      <div class="standings-table__table--data">
        <Fragment v-if="tableType === 'overall'">
          <div
            v-for="team in sortedTeams"
            :key="team.TeamID"
            class="standings-table__table--team"
          >
            <TeamRow :team="team" />
          </div>
        </Fragment>
        <Fragment v-else-if="tableType === 'division'">
          <div
            v-for="team in teams"
            :key="team.TeamID"
            class="standings-table__table--team"
          >
            <TeamRow :team="team" />
          </div>
        </Fragment>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Fragment } from "vue-fragment";
import TeamRow from "./TeamRow";
import TeamLogo from "./TeamLogo";
export default {
  name: "StandingsTable",
  props: ["teams", "title", "conference", "tableType", "division", "id"],
  components: { TeamRow, TeamLogo },
  data: function() {
    return {
      sortedTeams: "",
      logo: "",
      bemBase: `standings-table standings-table__${this.conference} standings-table__${this.conference}--${this.division}`,
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
@import "../scss/index.scss";
.standings-table {
  display: flex;
  flex-direction: column;

  @include standings-table-box-shadow;

  @include lg {
    margin: 1rem 2rem;
  }

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: $general-border;
    border-bottom: $nav-border;
    h1 {
      //*Accounts for header being hidden behind sticky header at top of page
      scroll-margin-top: 11rem;

      @include lg {
        scroll-margin-top: 10rem;
      }
    }
  }
  &__logo {
    max-height: 100px;
    max-width: 100px;
  }
  &__title {
    margin: 1rem 0.5rem;
  }

  &__table {
    display: flex;
    flex-direction: column;
    border: $general-border;
    border-top: $nav-border;

    &--header,
    &--team {
      display: grid;
      grid-template-columns: minmax(100px, 1fr) repeat(4, 1fr);
      grid-template-rows: auto;
      text-align: center;

      padding: 1rem;
      align-items: center;
    }
    &--data {
      background-color: #fff;

      font-size: 1.2rem;
    }
    &--header {
      border-bottom: $nav-border;
    }
  }
}

.standings-table {
  &__AFC {
    .standings-table {
      &__header {
        background-color: rgba($color-afc, 0.3);
      }
    }
  }
}

.standings-table {
  &__NFC {
    .standings-table {
      &__header {
        background-color: rgba($color-nfc, 0.3);
      }
    }
  }
}
</style>
