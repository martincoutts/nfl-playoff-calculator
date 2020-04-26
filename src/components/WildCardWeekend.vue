<template>
  <div class="wild-card">
    <PlayoffBracket :away="conference[5]" :home="conference[2]" />
    <PlayoffBracket :away="conference[4]" :home="conference[3]" />
  </div>
</template>

<script>
import PlayoffBracket from "./PlayoffBracket";
export default {
  name: "WildCardWeekend",

  components: { PlayoffBracket },
  props: ["conference"],
};
</script>

<style lang="scss" scoped>
.wild-card {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1rem;
}
</style>
