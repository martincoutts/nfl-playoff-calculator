<template>
  <div class="main-nav">
    <nav>
      <div class="main-nav__logo">
        <img src="../assets/images/nflLogo.svg" />
      </div>
      <div class="main-nav__links">
        <router-link to="/standings">
          <h1>Standings</h1>
        </router-link>
        <router-link to="/playoffs">
          <h1>Playoffs</h1>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MainNav",
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";

@include sm {
  .main-nav {
    grid-template-rows: auto;
    nav {
      display: grid;
      grid-template-columns: 1fr 2fr;
      border-bottom: solid 1px black;

      h1 {
        font-size: 18pt;
        padding: 1rem;
      }

      img {
        height: 100px;

        margin-right: -20px;
      }
    }
    &__logo {
      grid-column: 1 / span 1;
    }
    &__links {
      grid-column: 2 / span 1;
      display: flex;
    }
  }
}

@include lg {
  // nav {
  //   background-color: blue;
  // }
}
</style>
