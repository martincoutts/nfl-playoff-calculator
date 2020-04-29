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
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: auto;

  .divisional-round {
    &__wrapper {
      display: grid;
      grid-template-columns: 1fr auto 1fr auto 1fr;
    }
  }
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
