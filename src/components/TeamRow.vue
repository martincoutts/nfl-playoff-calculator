<template>
  <div>
    <img :src="{ imageImport }" />
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
    };
  },
  computed: {
    imageImport: function() {
      const path = `../assets/images/teamImages/png/${this.team.Conference}/${this.teamName}.png`;

      console.log("path", path);
      return path;
    },
  },
};
</script>

<style lang="scss" scoped></style>
