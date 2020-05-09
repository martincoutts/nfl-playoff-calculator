import Vue from "vue";
import Router from "vue-router";
import OverallStandings from "./components/OverallStandings.vue";
import AfcStandings from "./components/AfcStandings.vue";
import NfcStandings from "./components/NfcStandings.vue";
import DivisionsStandings from "./components/DivisionsStandings.vue";
import Playoffs from "./components/Playoffs.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "OverallStandings",
      component: OverallStandings,
    },
    {
      path: "/standings",
      name: "OverallStandings",
      component: OverallStandings,
    },
    {
      path: "/standings/overall",
      name: "OverallStandings",
      component: OverallStandings,
    },
    {
      path: "/standings/afc",
      name: "AfcStandings",
      component: AfcStandings,
    },
    {
      path: "/standings/nfc",
      name: "NfcStandings",
      component: NfcStandings,
    },
    {
      path: "/standings/divisions",
      name: "DivisionsStandings",
      component: DivisionsStandings,
    },
    {
      path: "/playoffs",
      name: "Playoffs",
      component: Playoffs,
    },
  ],
});
