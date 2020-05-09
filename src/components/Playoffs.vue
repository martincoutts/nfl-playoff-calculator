<template>
  <div class="playoffs__main-wrapper">
    <fragment v-for="(conference, index) in playoffsCombined" :key="index">
      <PlayoffConference :conference="conference" />
    </fragment>
    <Superbowl />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Fragment from "vue-fragment";
import PlayoffConference from "./PlayoffConference";
import Superbowl from "./Superbowl";
export default {
  name: "Playoffs",

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

<style lang="scss" scoped>
@import "../scss/index.scss";
.playoffs {
  &__main-wrapper {
    display: grid;

    grid-template-rows: repeat(3, 1fr);
    row-gap: 1rem;

    @include lg {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
    }
    @include xl {
      margin: 50px 0;
    }
  }
}
.AFC {
  grid-row: 1 / span 1;
  @include lg {
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
  }
}
.NFC {
  grid-row: 3 / span 1;
  @include lg {
    grid-row: 1 / span 1;
    grid-column: 4 / span 1;
  }
}
.superbowl__wrapper {
  grid-row: 2 / span 1;
  @include lg {
    grid-row: 1 / span 1;
    grid-column: 2 / span 1;
  }
}
</style>
