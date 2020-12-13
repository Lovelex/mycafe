<template>
  <div>
    <Nav />
    <v-container>
      <v-bottom-sheet scrollable v-model="bottomSheet.isActive">
        <v-card class="pa-4">
          <Totals @onClose="toggleBottomSheet"/>
        </v-card>
      </v-bottom-sheet>

      <v-card :elevation="isMobile ? '0' : '2'" :class="isMobile ? 'px-0' : 'px-4'" class="py-8 mt-8">
        <v-btn  @click="toggleBottomSheet" color="info" fab absolute right top>
          <v-icon> mdi-cogs </v-icon>
        </v-btn>
        <Calcs />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Nav from "@/layout/Nav";
import Totals from "@/components/Totals";
import Calcs from "@/components/Calcs";

export default {
  components: { Nav, Totals, Calcs },
  data: () => ({
    bottomSheet: {
      isActive: true,
    },
  }),
  methods: {
    toggleBottomSheet() {
      this.bottomSheet.isActive = !this.bottomSheet.isActive;
    },
  },
};
</script>

<style>
</style>