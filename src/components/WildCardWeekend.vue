<template>
  <div class="wild-card">
    <PlayoffBracket :away="conference[4]" :home="conference[3]" />
    <PlayoffBracket :away="conference[5]" :home="conference[2]" />
  </div>
</template>

<script>
import PlayoffBracket from "./PlayoffBracket";
export default {
  name: "WildCardWeekend",

  components: { PlayoffBracket },
  props: ["conference"]
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";
.wild-card {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1rem;

  @include lg {
    padding: 0 2rem;
  }
}
</style>
