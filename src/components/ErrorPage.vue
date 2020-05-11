<template>
  <div class="error-page">
    <h1>Sorry, something went wrong...</h1>
    <span>Please try again later</span>
  </div>
</template>

<script>
export default {
  name: "ErrorPage"
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";
.error-page {
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
}
</style>