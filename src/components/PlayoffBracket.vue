<template>
  <div class="bracket__wrapper">
    <div v-if="away !== undefined" class="bracket__team bracket__team--away">
      <TeamLogo :team="away" :type="'playoff'" />
    </div>
    <div
      v-if="awayText !== undefined"
      class="bracket__team bracket__team--text bracket__team--away-text"
    >
      <img class="bracket__question-mark" src="../assets/images/playoffs/questionMark.svg" />
    </div>
    <div class="bracket__team--vs">
      <span>VS</span>
    </div>
    <div v-if="home !== undefined" class="bracket__team bracket__team--home">
      <TeamLogo :team="home" :type="'playoff'" />
    </div>
    <div
      v-if="homeText !== undefined"
      class="bracket__team bracket__team--text bracket__team--home-text"
    >
      <img class="bracket__question-mark" src="../assets/images/playoffs/questionMark.svg" />
    </div>
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
    background-color: #fff;

    border: $general-border;

    @include lg {
      grid-template-rows: 1fr minmax(20px, 50px) 1fr;
      grid-template-columns: 1fr;
    }
  }

  &__team {
    display: flex;
    justify-content: center;

    &--vs {
      display: none;
      @include lg {
        display: inline;
        grid-column: 1 / span 1;
        grid-row: 2 / span 1;
        text-align: center;
        align-self: center;
      }
    }

    &--away,
    &--away-text {
      grid-column: 1 / span 1;
      @include lg {
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
        align-self: center;
      }
    }
    &--home,
    &--home-text {
      grid-column: 2 / span 1;
      border-left: $general-border;
      @include lg {
        grid-column: 1 / span 1;
        grid-row: 3 / span 1;
        align-self: center;
        border-left: none;
      }
    }

    &--away-text,
    &--home-text {
      min-height: $logo-min-size-mobile;
      min-width: $logo-min-size-mobile;
      max-height: $logo-max-size-mobile;
      max-width: $logo-max-size-mobile;
      padding: 1rem;
      align-self: center;
      justify-self: center;
      @include lg {
        min-height: $logo-min-size-desktop;
        min-width: $logo-min-size-desktop;
        max-height: $logo-max-size-desktop;
        max-width: $logo-max-size-desktop;
      }
    }
  }
}
</style>
