import diamante from "@/assets/svg/Diamante.svg";
import trofeu from "@/assets/svg/Trofeu.svg";
import ruby from "@/assets/svg/Ruby.svg";

export default {
  namespaced: true,
  state: {
    items: {
      trophies: {
        title: "Troféus",
        value: 100,
        icon: trofeu,
      },
      diamonds: {
        title: "Diamantes",
        value: 100,
        icon: diamante,
      },
      rubys: {
        title: "Rubis",
        value: 100,
        icon: ruby,
      },
    }
  },
  getters: {
    getItems: state => state.items,
    getTotalTrophies: state => state.items.trophies.value,
    getTotalDiamonds: state => state.items.diamonds.value,
    getTotalRubys: state => state.items.rubys.value,
  },
  mutations: {

  },
  actions: {

  }
}