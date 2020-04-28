<template>
  <div>
    <h1>PLAYOFF CONFERENCE</h1>
    <WildCardWeekend :conference="conference" />
    <DivisionalRound :conference="conference" />
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

<style lang="scss" scoped></style>
