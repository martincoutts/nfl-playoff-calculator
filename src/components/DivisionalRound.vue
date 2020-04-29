<template>
  <div class="divisonal-round">
    <PlayoffBracket class="bracket--1" :awayText="'?'" :home="conference[1]" />
    <PlayoffBracket class="bracket--2" :awayText="'?'" :home="conference[0]" />
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
.divisonal-round {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1rem;

  .bracket {
    &--1 {
      grid-column: 2 / span 1;
    }
    &--2 {
      grid-column: 4 / span 1;
    }
  }
}
</style>
