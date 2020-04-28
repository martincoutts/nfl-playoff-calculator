<template>
  <div>
    <div v-for="(conference, index) in playoffsCombined" :key="index">
      <PlayoffConference :conference="conference" />
    </div>
    <Superbowl />
  </div>
</template>

<script>
import { mapState } from "vuex";

import PlayoffConference from "./PlayoffConference";
import Superbowl from "./Superbowl";
export default {
  name: "Playoffs",
  components: { PlayoffConference, Superbowl },
  computed: {
    ...mapState(["afcPlayoffs", "nfcPlayoffs", "playoffsCombined"])
  }
};
</script>

<style lang="scss" scoped></style>
