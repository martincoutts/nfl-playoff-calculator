<template>
  <div :class="bemBase">
    <div class="inner-wrapper">
      <PlayoffBracket :awayText="''" :homeText="''" />
    </div>
  </div>
</template>

<script>
import PlayoffBracket from "./PlayoffBracket";
export default {
  name: "ConferenceChampionship",

  components: { PlayoffBracket },
  props: ["conference"],
  data: function() {
    return {
      bemBase: `conference-championship conference-championship__${this.conference[0].Conference}`
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";
.conference-championship {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;

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

  &__AFC {
    border: $championship-border-afc;
    background-color: rgba($color-afc, 0.7);
  }

  &__NFC {
    border: $championship-border-nfc;
    background-color: rgba($color-nfc, 0.7);
  }

  .inner-wrapper {
    background-color: #fff;
  }
}
</style>
