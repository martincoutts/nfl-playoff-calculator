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
    afcDivs: new Map([
      ["North", []],
      ["East", []],
      ["South", []],
      ["West", []],
    ]),
    nfcDivs: new Map([
      ["North", []],
      ["East", []],
      ["South", []],
      ["West", []],
    ]),
  },
  getters: {
    sortedAfc: (state) =>
      sortTeamsFunc(state.afc, "Wins", "DivisionWins", "ConferenceWins"),
    sortedNfc: (state) =>
      sortTeamsFunc(state.nfc, "Wins", "DivisionWins", "ConferenceWins"),
  },
  mutations: {
    FETCH_DATA: async function(state, actions) {
      try {
        const res = await fetch(
          `https://api.sportsdata.io/v3/nfl/scores/json/Standings/2019t?key=140e225b3d41407a9e77efaed16b3247`
        );
        const data = await res.json();

        state.results = data;
        if (res.json()) {
          state.hasResults = state.results.length > 0;
          actions.test();
        }
      } catch (e) {
        console.log(e);
      }
    },

    SORT_CONFERENCES: function(state, payload) {
      if (!state.afc.length || !state.nfc.length) {
        state.results.map((team) => {
          team.Conference === payload.conference
            ? state[payload.conferenceArray].push(team)
            : null;
        });
        state.combinedConferences = [state.afc, state.nfc];
      } else return;
    },
    SORT_DEVISIONS: function(state) {
      if (state.afcDivs.get("North").length < 4) {
        console.log("SORT_DEVISIONS", state.afcDivs.get("North").length);
        state.results.map((team) => {
          console.log("team", team);
          if (team.Conference === "AFC") {
            state.afcDivs.get(team.Division).push(team);
          } else if (team.Conference === "NFC") {
            state.nfcDivs.get(team.Division).push(team);
          } else return;
        });
      } else return;
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
      context.commit("SORT_DEVISIONS");
    },
  },
});
