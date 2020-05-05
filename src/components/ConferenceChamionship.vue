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
  justify-content: center;
  padding: 0 5rem;

  @include md {
    padding: 0 30%;
  }

  @include lg {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
}
</style>
