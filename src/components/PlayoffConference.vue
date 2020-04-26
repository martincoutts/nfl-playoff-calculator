<template>
  <div>
    <h1>PLAYOFF CONFERENCE</h1>
    <WildCardWeekend :conference="conference" />
  </div>
</template>

<script>
import WildCardWeekend from "./WildCardWeekend";
export default {
  name: "PlayoffConference",
  components: { WildCardWeekend },
  props: ["conference"],
};
</script>

<style lang="scss" scoped></style>
