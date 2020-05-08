<template>
  <div v-if="!isPlayoffs" class="third-nav">
    <nav>
      <div v-if="this.$route.name === 'OverallStandings'" class="third-nav__links">
        <a href="#AFC">
          <h2>AFC</h2>
        </a>
        <a href="#NFC">
          <h2>NFC</h2>
        </a>
      </div>
      <div v-if="this.$route.name !== 'OverallStandings'" class="third-nav__links">
        <a href="#North">
          <h2>North</h2>
        </a>
        <a href="#East">
          <h2>East</h2>
        </a>
        <a href="#South">
          <h2>South</h2>
        </a>
        <a href="#West">
          <h2>West</h2>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "thirdNav",
  computed: {
    checkUrl: function() {
      const activeClass =
        this.$route.name === "OverallStandings" ? "nav-link-active" : "";
      return activeClass;
    },
    isPlayoffs: function() {
      const isPlayoffs = this.$route.name === "Playoffs";
      return isPlayoffs;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";

.third-nav {
  @include navActiveLink;
  nav {
    display: grid;
    grid-template-columns: minmax(100px, 100px) 3fr;
    align-items: center;
    column-gap: 1rem;
    border-bottom: $nav-border;

    @include lg {
      display: none;
    }

    @include navHover;

    h2 {
      margin: 0.3rem 0;
    }
  }
  &__links {
    grid-column: 2 / span 1;
    display: flex;
    gap: 1rem;
    a {
      padding-right: 0.5rem;
    }
  }
}
</style>
