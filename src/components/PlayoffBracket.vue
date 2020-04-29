<template>
  <div class="bracket__wrapper">
    <div v-if="away !== undefined" class="bracket__team bracket__team--away">
      <TeamLogo :team="away" :type="'playoff'" />
    </div>
    <div
      v-if="awayText !== undefined"
      class="bracket__team bracket__team--text bracket__team--away-text"
    >{{ awayText }}</div>
    <div class="bracket__spacer"></div>
    <div v-if="home !== undefined" class="bracket__team bracket__team--home">
      <TeamLogo :team="home" :type="'playoff'" />
    </div>
    <div
      v-if="homeText !== undefined"
      class="bracket__team bracket__team--text bracket__team--home-text"
    >{{ homeText }}</div>
    <div class="bracket__vertical-line bracket__vertical-line--left"></div>
    <div class="bracket__vertical-line bracket__vertical-line--right"></div>
    <div class="bracket__vertical-line bracket__vertical-line--center"></div>
    <div class="bracket__horizontal-line"></div>
  </div>
</template>

<script>
import TeamLogo from "./TeamLogo";
export default {
  name: "PlayoffBracket",

  props: ["away", "home", "awayText", "homeText"],
  components: {
    TeamLogo
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";
.AFC {
  .bracket {
    &__wrapper {
      display: grid;
      grid-template-columns: repeat(8, 5px) repeat(8, 5px) 1fr repeat(8, 5px) repeat(
          8,
          5px
        );
      grid-template-rows: auto auto repeat(8, 5px);
    }
    &__team {
      max-height: $logo-max-size-mobile;
      max-width: $logo-max-size-mobile;

      &--away,
      &--home,
      &--text {
        border: $general-border;
        font-size: 8pt;
      }

      &--away,
      &--away-text {
        grid-column: 1 / span 8;
        grid-row: 1 / span 1;
      }
      &--home,
      &--home-text {
        grid-column: 26 / span 8;
        grid-row: 1 / span 1;
      }
    }
    &__vertical-line {
      padding: 12px;
      &--left {
        border-left: $playoff-line;
        grid-column: 5 / span 1;
        grid-row: 2 / span 1;
      }
      &--right {
        border-left: $playoff-line;
        grid-column: 30 / span 1;
        grid-row: 2 / span 1;
      }
      &--center {
        padding: 12px;
        border-left: $playoff-line;
        grid-column: 18 / span 1;
        grid-row: 3 / span 1;
      }
    }
    &__horizontal-line {
      padding: 20px;
      border-top: $playoff-line;
      grid-column: 5 / span 25;
      grid-row: 3 / span 1;
    }
  }
}

.NFC {
  .bracket {
    &__wrapper {
      display: grid;
      grid-template-columns: repeat(8, 5px) repeat(8, 5px) 1fr repeat(8, 5px) repeat(
          8,
          5px
        );
      grid-template-rows: repeat(10, 5px) auto;
    }
    &__team {
      max-height: $logo-max-size-mobile;
      max-width: $logo-max-size-mobile;

      &--away,
      &--home,
      &--text {
        border: $general-border;
        font-size: 8pt;
      }

      &--away,
      &--away-text {
        grid-column: 1 / span 8;
        grid-row: 12 / span 2;
      }
      &--home,
      &--home-text {
        grid-column: 26 / span 8;
        grid-row: 12 / span 2;
      }
    }
    &__vertical-line {
      padding: 12px;
      &--left {
        border-left: $playoff-line;
        grid-column: 5 / span 1;
        grid-row: 6 / span 1;
      }
      &--right {
        border-left: $playoff-line;
        grid-column: 30 / span 1;
        grid-row: 6 / span 1;
      }
      &--center {
        padding: 12px;
        border-left: $playoff-line;
        grid-column: 18 / span 1;
        grid-row: 1 / span 1;
      }
    }
    &__horizontal-line {
      padding: 20px;
      border-top: $playoff-line;
      grid-column: 5 / span 25;
      grid-row: 6 / span 1;
    }
  }
}

//   &__wrapper {
//     display: grid;
//     grid-template-columns: auto auto 1fr 1fr 1fr auto auto;
//     grid-template-rows: auto auto 1fr;
//   }
//   &__team {
//     max-height: $logo-max-size-mobile;
//     max-width: $logo-max-size-mobile;

//     &--away,
//     &--home,
//     &--text {
//       border: $general-border;
//       font-size: 8pt;
//     }

//     &--away,
//     &--away-text {
//       grid-column: 1 / span 2;
//       grid-row: 1 / span 1;
//     }
//     &--home,
//     &--home-text {
//       grid-column: 6 / span 2;
//       grid-row: 1 / span 1;
//     }
//   }
//   &__vertical-line {
//     padding: 20px;
//     &--left {
//       border-right: $playoff-line;
//       grid-column: 1 / span 1;
//     }
//     &--right {
//       border-right: $playoff-line;
//       grid-column: 6 / span 1;
//     }
//     &--center {
//       grid-column: 4 / span 1;
//       grid-row: 3 / span 1;
//     }
//   }
//   &__horizontal-line {
//     padding: 20px;
//     border-top: $playoff-line;
//     grid-column: 2 / span 5;
//     grid-row: 3 / span 1;
//   }
// }
</style>
