<template>
  <div v-if="this.$route.name !== 'Playoffs'" class="sub-nav">
    <nav>
      <div class="sub-nav__links">
        <router-link to="/standings/overall">
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
  created: function() {
    this.logRoute();
  },
  methods: {
    logRoute: function() {
      console.log(this.$route);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";

.sub-nav {
  nav {
    display: grid;
    grid-template-columns: minmax(100px, 1fr) 3fr;
    align-items: center;
    column-gap: 1rem;
    border-bottom: solid 1px black;

    h1 {
      font-size: 12pt;
      padding: 0.5rem;
    }
  }
  &__links {
    grid-column: 2 / span 1;
    display: flex;
    gap: 1rem;
  }
}
</style>
