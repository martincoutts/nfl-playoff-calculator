<template>
  <div v-if="!isPlayoffs" class="third-nav">
    <nav>
      <div class="third-nav__links" v-if="this.$route.name === 'OverallStandings'">
        <a class="third-nav__link" v-on:click="addActiveLinkClass" href="#AFC">
          <h2>AFC</h2>
        </a>
        <a class="third-nav__link" v-on:click="addActiveLinkClass" href="#NFC">
          <h2>NFC</h2>
        </a>
      </div>
      <div v-if="this.$route.name !== 'OverallStandings'" class="third-nav__links">
        <a class="third-nav__link" v-on:click="addActiveLinkClass" href="#North">
          <h2>North</h2>
        </a>
        <a class="third-nav__link" v-on:click="addActiveLinkClass" href="#East">
          <h2>East</h2>
        </a>
        <a class="third-nav__link" v-on:click="addActiveLinkClass" href="#South">
          <h2>South</h2>
        </a>
        <a class="third-nav__link" v-on:click="addActiveLinkClass" href="#West">
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
  },
  created: function() {
    this.removeActiveLinkClass();
  },
  methods: {
    removeActiveLinkClass: function() {
      const links = document.getElementsByTagName("h2");

      links.forEach(link => {
        link.classList.remove("nav-link-active");
      });
    },
    addActiveLinkClass: function(e) {
      const links = document.getElementsByTagName("h2");

      links.forEach(link => {
        link.classList.remove("nav-link-active");
      });

      e.target.classList.add("nav-link-active");
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
