<template>
  <div>
    <router-link to="/standings/overall"><h1>Overall</h1></router-link>
    <router-link to="/standings/afc"><h1>AFC</h1></router-link>
    <router-link to="/standings/nfc"><h1>NFC</h1></router-link>
  </div>
</template>

<script>
export default {
  name: "SubNav",
};
</script>

<style lang="scss" scoped></style>
