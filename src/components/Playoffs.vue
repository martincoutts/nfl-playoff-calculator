<template>
  <div>
    <h1>Playoffs</h1>
    <PlayoffBracket />
  </div>
</template>

<script>
import { mapState } from "vuex";
import PlayoffBracket from "./PlayoffBracket";
export default {
  name: "Playoffs",
  components: { PlayoffBracket },
  computed: {
    ...mapState(["afcPlayoffs", "nfcPlayoffs"]),
  },
};
</script>

<style lang="scss" scoped></style>
