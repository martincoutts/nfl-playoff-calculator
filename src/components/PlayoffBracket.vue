<template>
  <div class="bracket__wrapper">
    <div v-if="away !== undefined" class="bracket__team bracket__team--away">
      <TeamLogo :team="away" :type="'playoff'" />
    </div>
    <div
      v-if="awayText !== undefined"
      class="bracket__team bracket__team--text bracket__team--away-text"
    >{{ awayText }}</div>

    <div v-if="home !== undefined" class="bracket__team bracket__team--home">
      <TeamLogo :team="home" :type="'playoff'" />
    </div>
    <div
      v-if="homeText !== undefined"
      class="bracket__team bracket__team--text bracket__team--home-text"
    >{{ homeText }}</div>
  </div>
</template>

<script>
import TeamLogo from "./TeamLogo";
export default {
  name: "PlayoffBracket",

  props: ["away", "home", "awayText", "homeText"],
  components: {
    TeamLogo
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";
.bracket {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    border: $general-border;
  }

  &__team {
    display: flex;
    justify-content: center;

    &--away,
    &--away-text {
      grid-column: 1 / span 1;
    }
    &--home,
    &--home-text {
      grid-column: 2 / span 1;
      border-left: $general-border;
    }

    &--away-text,
    &--home-text {
      height: $logo-max-size-mobile;
      width: $logo-max-size-mobile;

      @include md {
        height: $logo-max-size-desktop;
        width: $logo-max-size-desktop;
      }
    }
  }
}
</style>
