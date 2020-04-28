<template>
  <div class="wild-card">
    <PlayoffBracket :awayText="'Winner of 3rd seed Vs 6th seed'" :home="conference[1]" />
    <PlayoffBracket :awayText="'Winner of 4th seed Vs 5th seed'" :home="conference[0]" />
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
.wild-card {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1rem;
}
</style>
