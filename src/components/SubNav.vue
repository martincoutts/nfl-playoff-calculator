<template>
  <div v-if="this.$route.name !== 'Playoffs'" class="sub-nav">
    <nav>
      <div class="sub-nav__links">
        <router-link :class="checkUrl" to="/standings/overall">
          <h1>Overall</h1>
        </router-link>
        <router-link to="/standings/afc">
          <h1>AFC</h1>
        </router-link>
        <router-link to="/standings/nfc">
          <h1>NFC</h1>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SubNav",
  computed: {
    checkUrl: function() {
      const activeClass =
        this.$route.name === "OverallStandings" ? "nav-link-active" : "";
      return activeClass;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";

.sub-nav {
  @include navActiveLink;
  nav {
    display: grid;
    grid-template-columns: minmax(100px, 100px) 3fr;
    align-items: center;
    column-gap: 1rem;
    border-bottom: $nav-border;

    @include navHover;

    h1 {
      font-size: 12pt;
      padding: 0.3rem 0;
    }
  }
  &__links {
    grid-column: 2 / span 1;
    display: flex;
    gap: 1rem;
  }
}
</style>
