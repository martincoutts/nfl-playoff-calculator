import Vue from "vue";
import Router from "vue-router";
import MainStandings from "./components/MainStandings.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "MainStandings",
      component: MainStandings,
    },
  ],
});
