<template>
  <div>
    <nav>
      <img src="../assets/images/nflLogo.svg" />
      <router-link to="/standings"><h1>Standings</h1></router-link>
      <router-link to="/playoffs"><h1>Playoffs</h1></router-link>
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
  nav {
    display: flex;
    border-bottom: solid 1px black;
    a {
      align-self: center;
      h1 {
        font-size: 18pt;
        padding: 1rem;
      }
    }
    img {
      height: 100px;

      margin-right: -20px;
    }
  }
}

@include lg {
  nav {
    background-color: blue;
  }
}
</style>
