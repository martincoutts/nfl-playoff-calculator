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

  @include lg {
    padding: 0 20rem;
  }
}
</style>
