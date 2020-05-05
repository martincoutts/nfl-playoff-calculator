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

  @include md {
    padding: 0 5%;
  }

  @include lg {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    padding: 10% 0;
  }
}
</style>
