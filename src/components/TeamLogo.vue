<template>
  <td><img v-bind:src="logo" /></td>
</template>

<script>
export default {
  name: "TeamLogo",
  props: ["logo"],
};
</script>

<style lang="scss" scoped>
img {
  max-height: 100px;
  max-width: 100px;
}
</style>
