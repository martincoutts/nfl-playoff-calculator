<template>
  <div>
    <div v-for="(conference, index) in playoffsCombined" :key="index">
      <PlayoffConference :conference="conference" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import PlayoffConference from "./PlayoffConference";
export default {
  name: "Playoffs",
  components: { PlayoffConference },
  computed: {
    ...mapState(["afcPlayoffs", "nfcPlayoffs", "playoffsCombined"]),
  },
};
</script>

<style lang="scss" scoped></style>
