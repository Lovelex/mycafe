<template>
  <div :style="{width: isMobile ? '100%' : '50%'}">
    <div style="max-width: 280px" class="text-center mx-auto">
      <span class="text-h5 font-weight-medium">Distribuição de Prêmios</span>
      <p class="mt-4">
        Entre com a quantidade de
        <span class="font-weight-bold">Troféus</span> conquistada por cada
        membro da cidade
      </p>
    </div>
    <div class="my-8">
      <v-card elevation="1" class="pa-2 d-flex justify-space-between">
        <div class="d-flex align-center" v-for="(item, i) in items" :key="i">
          <v-img class="mr-2" width="24" height="24" contain :src="item.icon"/>
          <div class="caption font-weight-bold" :class="color(item)">
            <span>{{item.acumulated}}</span>/<span>{{item.total}}</span>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import diamante from "@/assets/svg/Diamante.svg";
import trofeu from "@/assets/svg/Trofeu.svg";
import ruby from "@/assets/svg/Ruby.svg";

export default {
  computed: {
    ...mapGetters({
      acumulatedTrophies: "calcs/getTrophiesSum",
      acumulatedDiamonds: "calcs/getDiamondsSum",
      acumulatedRubys: "calcs/getRubysSum",
      totalTrophies: "total/getTotalTrophies",
      totalDiamonds: "total/getTotalDiamonds",
      totalRubys: "total/getTotalRubys",
    }),
    items() {
      return [
        {
          total: this.totalTrophies,
          acumulated: this.acumulatedTrophies,
          icon: trofeu,
        },
        {
          total: this.totalDiamonds,
          acumulated: this.acumulatedDiamonds,
          icon: diamante,
        },
        {
          total: this.totalRubys,
          acumulated: this.acumulatedRubys,
          icon: ruby,
        },
      ];
    },
    
  },
  methods: {
    color(item) {
      if(item.acumulated > item.total) return 'error--text' 
      if(item.acumulated === item.total) return 'success--text' 
      if(item.acumulated < item.total) return '' 
    }
  }
};
</script>

<style>
</style>