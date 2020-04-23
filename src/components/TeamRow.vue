<template>
  <div class="team-row">
    <td v-html="html" class="team-row__logo"></td>
    <td>{{ team.Name }}</td>

    <td>{{ team.Wins }}</td>

    <td>{{ team.Losses }}</td>

    <td>{{ team.Ties }}</td>

    <td>{{ team.Percentage }}</td>
  </div>
</template>

<script>
export default {
  name: "TeamRow",
  props: ["team"],
  data: function() {
    return {
      teamName: this.team.Team,
      html: "",
    };
  },
  created: function() {
    this.imageImport();
  },
  methods: {
    imageImport: function() {
      //   const path = `../assets/images/teamImages/png/${this.team.Conference}/${this.teamName}.png`;
      const logo = require(`../assets/images/teamImages/png/${this.team.Conference}/${this.teamName}.png`);
      const component = `<img src=${logo} />`;

      this.html = component;
    },
  },
};
</script>

<style lang="scss" scoped>
.team-row {
  &__logo {
    img {
      height: 5px;
    }
  }
}
</style>
