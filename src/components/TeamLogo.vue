<template>
  <div v-if="type !== 'playoff'">
    <img v-bind:src="logo" />
  </div>
  <div v-else>
    <img v-bind:src="playoffLogo" />
  </div>
</template>

<script>
export default {
  name: "TeamLogo",
  props: ["logo", "type", "team"],
  data: function() {
    return {
      teamName: this.team.Team,

      playoffLogo: ""
    };
  },
  created: function() {
    this.imageImport();
  },
  methods: {
    imageImport: function() {
      if (this.type === "playoff") {
        this.playoffLogo = require(`../assets/images/teamImages/svg/${this.team.Conference}/${this.teamName}.svg`);
      } else return;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";
img {
  max-height: $logo-max-size-mobile;
  max-width: $logo-max-size-mobile;

  @include md {
    max-height: $logo-max-size-desktop;
    max-width: $logo-max-size-desktop;
  }
}
</style>
