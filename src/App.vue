<template>
  <div id="app" class="app">
    <MainNav />
    <SubNav />
    <div class="app__spinner" v-if="!hasResults">
      <a-spin size="large" />
    </div>
    <router-view class="app__router-view" v-if="hasResults" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import MainNav from "./components/MainNav";
import SubNav from "./components/SubNav";

export default {
  name: "App",
  components: { MainNav, SubNav },
  data() {
    return {};
  },
  computed: {
    ...mapState(["hasResults"])
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    ...mapActions(["fetchData"])
  }
};
</script>

<style lang="scss">
@import "./scss/index.scss";
#app {
  background-color: $color-background;
  font-family: $font-primary;

  font-size: $font-size-base;
  h1 {
    font-size: $font-size-h1;
  }
  h2 {
    font-size: $font-size-h2;
  }
  h3 {
    font-size: $font-size-h3;
  }

  body {
    margin: 0;
    padding: 0;
  }
  .app {
    height: 100vh;
    margin: 0;

    &__router-view {
      padding: 1rem;
      @include lg {
        padding: 3rem 1.2rem;
      }
    }
    &__spinner {
      padding-top: 3rem;
      display: flex;
      justify-content: center;
      align-content: center;
    }
  }
}
</style>
