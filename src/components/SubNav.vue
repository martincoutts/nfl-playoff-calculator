<template>
  <div class="sub-nav">
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
  name: "SubNav"
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";
@include sm {
  .sub-nav {
    nav {
      display: grid;
      grid-template-columns: 1fr 2fr;
      border-bottom: solid 1px black;
      padding-left: 10px;

      h1 {
        font-size: 12pt;
        padding: 0.5rem;
      }
    }
    &__links {
      grid-column: 2 / span 1;
      display: flex;
    }
  }
}
</style>
