<template>
  <div class="superbowl__wrapper">
    <img class="superbowl__image" src="../assets/images/playoffs/afcChampionship.svg" />
    <img class="superbowl__image" src="../assets/images/playoffs/superbowl.svg" />
    <img class="superbowl__image" src="../assets/images/playoffs/nfcChampionship.svg" />
  </div>
</template>

<script>
export default {
  name: "Superbowl"
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";
.superbowl {
  &__wrapper {
    border: $general-border;
  }
  &__image {
    max-height: 200px;
    max-width: 200px;
  }
}
</style>