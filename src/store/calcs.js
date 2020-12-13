export default {
  namespaced: true,
  state: {
    items: [
      {
        value: 0,
        diamonds: 0,
        rubys: 0,
      },
      {
        value: 0,
        diamonds: 0,
        rubys: 0,
      },
      {
        value: 0,
        diamonds: 0,
        rubys: 0,
      },
      {
        value: 0,
        diamonds: 0,
        rubys: 0,
      },
      {
        value: 0,
        diamonds: 0,
        rubys: 0,
      },
    ],
  },
  getters: {
    getItems: state => state.items,
    getTrophiesSum: (state, getters) => {
      return state.items.reduce((ac, ol) => {
        const n1 = ac.value ? parseInt(ac.value) : 0
        const n2 = ol.value ? parseInt(ol.value) : 0
        return { value: n1 + n2 }
      }).value
    },
    getDiamondsSum: (state, getters) => {
      return getters.getDiamondCalc.reduce((ac, ol) => {
        const n1 = parseInt(ac)
        const n2 = parseInt(ol)
        return n1 + n2
      })
    },
    
    getRubysSum: (state, getters) => {
      return getters.getRubysCalc.reduce((ac, ol) => {
        const n1 = parseInt(ac)
        const n2 = parseInt(ol)
        return n1 + n2
      })
    },
    getDiamondCalc: (state, a, b, rootGetters) => {
      const { trophies } = rootGetters['total/getItems']
      const { diamonds } = rootGetters['total/getItems']
      console.log(trophies.value)

      return state.items.map(item => {
        if (trophies.value === 0 || trophies.value === '') return 0
        else
          return parseInt((item.value * diamonds.value / trophies.value))
      })
    },
    getRubysCalc: (state, a, b, rootGetters) => {
      const { trophies } = rootGetters['total/getItems']
      const { rubys } = rootGetters['total/getItems']
      return state.items.map(item => {
        if (trophies.value === 0 || trophies.value === '') return 0
        else
        return parseInt((item.value * rubys.value / trophies.value))
      })
    }

  },
  mutations: {
    pushMember(state, payload) {
      state.items.push(payload)
    },
    delMember(state, payload) {
      state.items.splice(payload, 1)
    }
  },
  actions: {
    addMember({ commit }) {
      const newMember = {
        value: 0,
        rubys: 0,
        diamonds: 0,
      };
      commit('pushMember', newMember);
    },
    delMember({ commit }, payload) {
      commit('delMember', payload)
    },
  }
}