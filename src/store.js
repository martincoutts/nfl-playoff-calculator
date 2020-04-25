import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const sortTeamsFunc = function(arr, customVarA, customVarB, customVarC) {
  const compare = (a, b) => {
    if (a[customVarA] > b[customVarA]) return -1;
    if (a[customVarA] === b[customVarA]) {
      if (a[customVarB] > b[customVarB]) {
        return -1;
      } else if (a[customVarB] === b[customVarB]) {
        if (a[customVarC] > b[customVarC]) {
          return -1;
        }
      }
    }
    if (a[customVarA] < b[customVarA]) return 1;
    return 0;
  };
  const sortedArr = arr.sort(compare);

  return sortedArr;
};

export default new Vuex.Store({
  state: {
    hasResults: false,
    results: {},
    afc: [],
    nfc: [],
    combinedConferences: [],
  },
  getters: {
    sortedAfc: (state) =>
      sortTeamsFunc(state.afc, "Wins", "DivisionWins", "ConferenceWins"),
    sortedNfc: (state) =>
      sortTeamsFunc(state.nfc, "Wins", "DivisionWins", "ConferenceWins"),
  },
  mutations: {
    FETCH_DATA: async function(state) {
      try {
        const res = await fetch(
          `https://api.sportsdata.io/v3/nfl/scores/json/Standings/2019t?key=140e225b3d41407a9e77efaed16b3247`
        );
        const data = await res.json();

        state.results = data;
        if (res.json()) {
          state.hasResults = state.results.length > 0;
        }
      } catch (e) {
        console.log(e);
      }
    },

    SORT_CONFERENCES: function(state, payload) {
      state.results.map((team) => {
        team.Conference === payload.conference
          ? state[payload.conferenceArray].push(team)
          : null;
      });
      state.combinedConferences = [state.afc, state.nfc];
    },
  },
  actions: {
    fetchData: ({ commit }) => {
      commit("FETCH_DATA");
    },
    sortTeams: (context, { arr, customVarA, customVarB, customVarC }) => {
      context.commit("SORT_TEAMS", { arr, customVarA, customVarB, customVarC });
    },
    sortConferences: (context, payload) => {
      context.commit("SORT_CONFERENCES", payload);
    },
  },
});
