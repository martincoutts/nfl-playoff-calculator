import Vue from "vue";
import Router from "vue-router";
import MainStandings from "./components/MainStandings.vue";
import AfcStandings from "./components/AfcStandings.vue";
import NfcStandings from "./components/NfcStandings.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "MainStandings",
      component: MainStandings,
    },
    {
      path: "/standings/overall",
      name: "MainStandings",
      component: MainStandings,
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
  ],
});
