<template>
  <Fragment class="team-row">
    <TeamLogo :logo="logo" />

    <p class="table__data-cell">{{ team.Wins }}</p>

    <p>{{ team.Losses }}</p>

    <p>{{ team.Ties }}</p>

    <p>{{ team.Percentage }}</p>
  </Fragment>
</template>

<script>
import TeamLogo from "./TeamLogo";
import { Fragment } from "vue-fragment";
export default {
  name: "TeamRow",
  components: { TeamLogo, Fragment },
  props: ["team"],
  data: function() {
    return {
      teamName: this.team.Team,
      html: "",
      logo: ""
    };
  },
  created: function() {
    this.imageImport();
  },
  methods: {
    imageImport: function() {
      this.logo = require(`../assets/images/teamImages/svg/${this.team.Conference}/${this.teamName}.svg`);
    }
  }
};
</script>

<style lang="scss" scoped>
.team-row {
  padding: 1rem 0;
}
p {
  margin: 1rem 0;
}
</style>
