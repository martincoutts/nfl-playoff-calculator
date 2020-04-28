<template>
  <div class="bracket__wrapper">
    <div v-if="away !== undefined" class="bracket__team bracket__team--away">{{ away.Name }}</div>
    <div
      v-if="awayText !== undefined || awayText !== ''"
      class="bracket__team bracket__team--away"
    >{{ awayText }}</div>
    <div class="bracket__spacer"></div>
    <div v-if="home !== undefined" class="bracket__team bracket__team--home">{{ home.Name }}</div>
    <div
      v-if="homeText !== undefined || homeText !== ''"
      class="bracket__team bracket__team--home"
    >{{ homeText }}</div>
    <div class="bracket__vertical-line bracket__vertical-line--left"></div>
    <div class="bracket__vertical-line bracket__vertical-line--right"></div>
    <div class="bracket__horizontal-line"></div>
  </div>
</template>

<script>
export default {
  name: "PlayoffBracket",
  props: ["away", "home", "awayText", "homeText"]
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";
.bracket {
  &__wrapper {
    display: grid;
    grid-template-columns: auto auto 1fr auto auto;
    grid-template-rows: auto auto;
  }
  &__team {
    // padding: 20px;
    border: $general-border;
    &--away {
      grid-column: 1 / span 2;
      grid-row: 1 / span 1;
    }
    &--home {
      grid-column: 4 / span 2;
      grid-row: 1 / span 1;
    }
  }
  &__vertical-line {
    padding: 20px;
    &--left {
      border-right: $playoff-line;
      grid-column: 1 / span 1;
    }
    &--right {
      border-right: $playoff-line;
      grid-column: 4 / span 1;
    }
  }
  &__horizontal-line {
    padding: 20px;
    border-top: $playoff-line;
    grid-column: 2 / span 3;
  }
}
</style>
