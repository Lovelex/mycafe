<template>
  <div class="d-flex flex-column align-center">
    <Header />
    <v-sheet width="100%" height="400" v-chat-scroll="{always: false, smooth: true, scrollonremoved:true}" class="box d-flex flex-column align-center">
      <div v-for="(input, i) in newInputs" class="my-5" :key="i">
        <div class="d-flex align-center">
          <v-btn
            v-if="newInputs.length > 1"
            @click="delMember(i)"
            outlined
            color="error"
            elevation="1"
            class="mr-2"
            fab
            x-small
          >
            <v-icon> mdi-close </v-icon>
          </v-btn>
          <div class="d-flex align-center">
            <span class="mr-2 caption font-weight-bold"> {{ i + 1 }}</span>
            <div class="mr-4" style="max-width: 150px">
              <v-text-field
                type="tel"
                hide-details
                v-mask="'######'"
                dense
                light
                outlined
                rounded
                v-model.number="inputs[i].value"
              >
                <template v-slot:prepend-inner>
                  <v-img contain width="24" height="24" :src="trofeu" />
                </template>
              </v-text-field>
            </div>
          </div>
          <div class="d-flex flex-column align-baseline justify-center">
            <div class="d-flex mb-1">
              <v-img
                class="mr-2"
                contain
                width="24"
                height="24"
                :src="diamante"
              />
              <span>{{ input.diamonds }}</span>
            </div>
            <div class="d-flex">
              <v-img class="mr-2" contain width="24" height="24" :src="ruby" />
              <span>{{ input.rubys }}</span>
            </div>
          </div>
        </div>
      </div>
    </v-sheet>
      <v-btn class="mt-4" @click="addMember" small color="info">
        <v-icon left> mdi-plus </v-icon>
        <span>Adicionar Membro</span>
      </v-btn>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { mask } from "vue-the-mask";
import Header from "./Header.vue";
import trofeu from "@/assets/svg/Trofeu.svg";
import diamante from "@/assets/svg/Diamante.svg";
import ruby from "@/assets/svg/Ruby.svg";
import members from "@/assets/svg/Members.svg";

export default {
  components: { Header },
  directives: { mask },
  computed: {
    ...mapGetters({
      inputs: "calcs/getItems",
      getTrophiesSum: "calcs/getTrophiesSum",
      getDiamondCalc: "calcs/getDiamondCalc",
      getRubysCalc: "calcs/getRubysCalc",
    }),
    trofeu() {
      return trofeu;
    },
    diamante() {
      return diamante;
    },
    ruby() {
      return ruby;
    },
    members() {
      return members;
    },
    newInputs() {
      return this.inputs.map((input, i) => {
        return {
          value: input.value,
          rubys: parseInt(this.getRubysCalc[i]),
          diamonds: parseInt(this.getDiamondCalc[i]),
        };
      });
    },
  },
  methods: {
    ...mapActions({
      addMember: "calcs/addMember",
      delMember: "calcs/delMember",
    }),
  },
};
</script>
<style scoped>
.box {
  overflow-y: scroll;
}
</style>