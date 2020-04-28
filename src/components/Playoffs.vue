<template>
  <div>
    <div v-for="(conference, index) in playoffsCombined" :key="index">
      <PlayoffConference :conference="conference" />
    </div>
    <Superbowl />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import PlayoffConference from "./PlayoffConference";
import Superbowl from "./Superbowl";
export default {
  name: "Playoffs",
  // data: function() {
  //   return {
  //     ...mapState(["results"])
  //   };
  // },
  components: { PlayoffConference, Superbowl },
  computed: {
    ...mapState(["results", "afcPlayoffs", "nfcPlayoffs", "playoffsCombined"])
  },
  created: function() {
    if (!this.playoffsCombined.length) {
      this.sortConferences({ conference: "AFC", conferenceArray: "afc" });
      this.sortConferences({
        conference: "NFC",
        conferenceArray: "nfc"
      });
    }
  },
  methods: {
    ...mapActions(["sortConferences"])
  }
};
</script>

<style lang="scss" scoped></style>
