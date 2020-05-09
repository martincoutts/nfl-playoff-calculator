<template>
  <fragment v-if="type !== 'playoff'">
    <img v-bind:src="logo" />
  </fragment>
  <fragment v-else>
    <img v-bind:src="playoffLogo" />
  </fragment>
</template>

<script>
import Fragment from "vue-fragment";
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
  @include xl {
    max-height: $logo-max-size-widescreen;
    max-width: $logo-max-size-widescreen;
  }
}
</style>
