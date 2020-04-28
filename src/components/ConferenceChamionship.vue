<template>
  <div class="wild-card">
    <PlayoffBracket
      :awayText="'Winner of 2nd seed divisional match'"
      :homeText="'Winner of 1st seed divisional match'"
    />
  </div>
</template>

<script>
import PlayoffBracket from "./PlayoffBracket";
export default {
  name: "ConferenceChampionship",

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
