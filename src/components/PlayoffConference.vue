<template>
  <div :class="conference[0].Conference">
    <WildCardWeekend :conference="conference" />
    <DivisionalRound class="divisional-round__wrapper" :conference="conference" />
    <ConferenceChampionship :conference="conference" />
  </div>
</template>

<script>
import WildCardWeekend from "./WildCardWeekend";
import DivisionalRound from "./DivisionalRound";
import ConferenceChampionship from "./ConferenceChamionship";

export default {
  name: "PlayoffConference",
  components: { WildCardWeekend, DivisionalRound, ConferenceChampionship },
  props: ["conference"]
};
</script>

<style lang="scss" scoped>
.AFC,
.NFC {
  display: grid;
  grid-template-rows: repeat(3 auto);
  row-gap: 1rem;
}

.AFC {
  .wild-card {
    grid-row: 1 / span 1;
  }
  .divisional-round {
    grid-row: 2 / span 1;
  }
  .conference-championship {
    grid-row: 3 / span 1;
  }
}
.NFC {
  align-self: center;
  .wild-card {
    grid-row: 3 / span 1;
  }
  .divisional-round {
    grid-row: 2 / span 1;
  }
  .conference-championship {
    grid-row: 1 / span 1;
  }
}
</style>
