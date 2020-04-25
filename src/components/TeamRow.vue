<template>
  <Fragment>
    <TeamLogo :logo="logo" />

    <p>{{ team.Wins }}</p>

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
</style>
