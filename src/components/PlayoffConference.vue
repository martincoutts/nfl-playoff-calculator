<template>
  <div :class="conference[0].Conference">
    <TeamLogo class="playoff-conference__logo" :logo="logo" />
    <WildCardWeekend :conference="conference" />
    <DivisionalRound class="divisional-round__wrapper" :conference="conference" />
    <ConferenceChampionship :conference="conference" />
  </div>
</template>

<script>
import TeamLogo from "./TeamLogo";
import WildCardWeekend from "./WildCardWeekend";
import DivisionalRound from "./DivisionalRound";
import ConferenceChampionship from "./ConferenceChamionship";

export default {
  name: "PlayoffConference",
  components: {
    TeamLogo,
    WildCardWeekend,
    DivisionalRound,
    ConferenceChampionship
  },
  props: ["conference"],
  data: function() {
    return {
      logo: ""
    };
  },
  created: function() {
    this.imageImport();
  },

  methods: {
    imageImport: function() {
      this.logo = require(`../assets/images/conferences//${this.conference[0].Conference}.svg`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";
.AFC,
.NFC {
  display: grid;
  grid-template-rows: repeat(4, auto);
  row-gap: 1rem;

  @include lg {
    grid-template-columns: repeat(4, auto);
    grid-template-rows: 80vh;
    column-gap: 1rem;
  }

  .playoff-conference {
    &__logo {
      justify-self: center;
    }
  }
}

.AFC {
  .wild-card {
    grid-row: 2 / span 1;
    @include lg {
      grid-row: 1 / span 1;
      grid-column: 2 / span 1;
    }
  }
  .divisional-round {
    grid-row: 3 / span 1;
    @include lg {
      grid-row: 1 / span 1;
      grid-column: 3 / span 1;
    }
  }
  .conference-championship {
    grid-row: 4 / span 1;
    @include lg {
      grid-row: 1 / span 1;
      grid-column: 4 / span 1;
    }
  }
}
.NFC {
  align-self: center;
  .wild-card {
    grid-row: 3 / span 1;
    @include lg {
      grid-row: 1 / span 1;
      grid-column: 3 / span 1;
    }
  }
  .divisional-round {
    grid-row: 2 / span 1;
    @include lg {
      grid-row: 1 / span 1;
      grid-column: 2 / span 1;
    }
  }
  .conference-championship {
    grid-row: 1 / span 1;
    @include lg {
      grid-row: 1 / span 1;
      grid-column: 1 / span 1;
    }
  }
  .playoff-conference {
    &__logo {
      grid-row: 4 / span 1;
      -webkit-transform: rotateX(180deg);
      transform: rotateX(180deg);
      @include lg {
        grid-row: 1 / span 1;
        grid-column: 4 / span 1;
      }
    }
  }
}
</style>
