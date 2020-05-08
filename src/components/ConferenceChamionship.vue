<template>
  <div class="conference-championship">
    <PlayoffBracket :awayText="''" :homeText="''" />
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
@import "../scss/index.scss";
.conference-championship {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
  border: $championship-border;
  padding: 1rem 0 1rem 0;
  margin: 0 25%;

  @include md {
    padding: 0 30%;
  }

  @include lg {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;

    align-self: center;
    padding: 1rem 0 1rem 0;
    margin: 0;
  }
}
</style>
