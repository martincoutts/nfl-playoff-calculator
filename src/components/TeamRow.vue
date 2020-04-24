<template>
  <div class="team-row">
    <td v-html="html"></td>
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
      const logo = require(`../assets/images/teamImages/svg/${this.team.Conference}/${this.teamName}.svg`);
      const component = `<div class="team-row__logo"><img src=${logo} /></div>`;

      this.html = component;
    },
  },
};
</script>

<style lang="scss" scoped></style>
