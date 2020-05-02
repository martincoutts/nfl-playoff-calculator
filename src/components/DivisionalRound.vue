<template>
  <div class="divisonal-round">
    <PlayoffBracket class="bracket--1" :awayText="''" :home="conference[1]" />
    <PlayoffBracket class="bracket--2" :awayText="''" :home="conference[0]" />
  </div>
</template>

<script>
import PlayoffBracket from "./PlayoffBracket";
export default {
  name: "DivisionalRound",

  components: { PlayoffBracket },
  props: ["conference"]
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";
.divisonal-round {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1rem;
  padding: 0 1rem;

  @include lg {
    padding: 0 10rem;
  }
}
</style>
