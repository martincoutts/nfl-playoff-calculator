<template>
  <div :class="isSticky">
    <MainNav />
    <SubNav />
    <ThirdNav />
  </div>
</template>

<script>
import MainNav from "./MainNav";
import SubNav from "./SubNav";
import ThirdNav from "./ThirdNav";
export default {
  components: { MainNav, SubNav, ThirdNav },
  computed: {
    isSticky: function() {
      const className =
        this.$route.name !== "Playoffs"
          ? "nav__wrapper nav__wrapper--sticky"
          : "nav__wrapper";
      return className;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";
.nav {
  &__wrapper {
    -webkit-box-shadow: 3px 7px 9px -1px rgba(0, 0, 0, 0.46);
    -moz-box-shadow: 3px 7px 9px -1px rgba(0, 0, 0, 0.46);
    box-shadow: 3px 7px 9px -1px rgba(0, 0, 0, 0.46);
    &--sticky {
      position: fixed;
      top: 0;
      width: 100%;
      background-color: $color-background;
    }
  }
}
</style>