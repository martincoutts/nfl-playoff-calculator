<template>
  <div class="superbowl__wrapper">
    <img
      class="superbowl__image superbowl__image--championship"
      src="../assets/images/playoffs/afcChampionship.svg"
    />
    <img class="superbowl__image" src="../assets/images/playoffs/superbowl.svg" />
    <img
      class="superbowl__image superbowl__image--championship"
      src="../assets/images/playoffs/nfcChampionship.svg"
    />
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 1rem;
    justify-items: center;
    align-items: center;
  }
  &__image {
    max-height: $superbowl-logo-max-size-mobile;
    max-width: $superbowl-logo-max-size-mobile;

    @include md {
      max-height: $superbowl-logo-max-size-desktop;
      max-width: $superbowl-logo-max-size-desktop;
    }
  }
  &__image {
    &--championship {
      align-self: center;
    }
  }
}
</style>