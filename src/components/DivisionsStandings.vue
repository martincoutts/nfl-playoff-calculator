<template>
  <div class="divisions-standings">
    <AfcStandings />
    <NfcStandings />
  </div>
</template>

<script>
import AfcStandings from "./AfcStandings";
import NfcStandings from "./NfcStandings";
export default {
  name: "DivisionsStandings",
  components: {
    AfcStandings,
    NfcStandings
  }
};
</script>

<style lang="scss" scoped>
</style>