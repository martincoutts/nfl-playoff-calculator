<template>
  <div class="conference-championship">
    <PlayoffBracket :awayText="'?'" :homeText="'?'" />
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
.conference-championship {
  justify-content: center;
}
</style>
