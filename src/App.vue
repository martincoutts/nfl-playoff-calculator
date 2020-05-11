<template>
  <div id="app" class="app">
    <Nav />

    <router-view class="app__router-view" v-if="hasResults && !hasError" />
    <div class="app__spinner" v-if="!hasResults && !hasError">
      <a-spin size="large" />
    </div>
    <ErrorPage v-if="hasError" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Nav from "./components/Nav";
import ErrorPage from "./components/ErrorPage";

export default {
  name: "App",
  components: { Nav, ErrorPage },
  data() {
    return {};
  },
  computed: {
    ...mapState(["hasResults", "hasError"])
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
      padding: 1rem 1.2rem;
      @include xl {
        height: auto;
        margin-bottom: 0;
        padding-bottom: 100px;
      }
    }
    &__spinner {
      height: 100vh;
      background-color: #fff;
      display: flex;

      justify-content: center;
      align-items: center;
    }
  }
}
</style>
