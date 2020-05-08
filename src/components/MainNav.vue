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

        <div class="sub-nav__links--main-nav">
          <a-divider type="vertical" />
          <router-link :class="checkUrl" to="/standings/overall">
            <h2>Overall</h2>
          </router-link>
          <router-link to="/standings/afc">
            <h2>AFC</h2>
          </router-link>
          <router-link to="/standings/nfc">
            <h2>NFC</h2>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MainNav"
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";

.main-nav {
  @include navActiveLink;

  grid-template-rows: auto;
  background-color: $color-background;

  nav {
    display: grid;
    grid-template-columns: minmax(50px, 100px) 3fr;

    align-items: center;
    column-gap: 1rem;
    border-bottom: $nav-border;

    @include lg {
      grid-template-columns: minmax(50px, 100px) auto auto;
    }

    @include navHover;
    h1 {
      margin: 0.3rem 0;
    }

    img {
      height: 100px;
      justify-self: center;
      margin-left: -10px;
    }
  }
  &__logo {
    grid-column: 1 / span 1;
  }
  &__links {
    grid-column: 2 / span 1;
    display: flex;
    a {
      padding-right: 0.5rem;
    }
  }
}

.sub-nav {
  @include navActiveLink;

  &__links {
    &--main-nav {
      display: none;
      @include lg {
        padding-left: 1rem;
        display: flex;
        gap: 1rem;
        align-items: flex-end;
      }
      h2,
      .ant-divider-vertical {
        margin: 0.5rem 0;
      }
      .ant-divider-vertical {
        height: 1.6rem;
      }
      a {
        padding-right: 0.5rem;
      }
    }
  }
}
</style>
