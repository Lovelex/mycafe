<template>
  <div>
    <div style="max-width: 280px" class="d-flex flex-column text-center mx-auto">
    <v-btn @click="onClose" text color="error" class="mb-4">
      <span>Fechar</span>
    </v-btn>
      <span class="text-h5 font-weight-medium">Defina o Máximo</span>
      <p class="my-4">
        Entre com os <span class="font-weight-bold">Totais</span> de <span class="font-weight-bold">Troféus</span> <span class="font-weight-bold">Diamantes</span> e <span class="font-weight-bold">Rubys</span> 
      </p>
    </div>
    <v-form>
      <v-row no-gutters class="d-flex justify-center">
        <v-col v-for="(m, k) in models" :key="k" cols="12" sm="4" >
          <div class="d-flex flex-column align-center">
            <span class="mb-2">Total de {{ m.title }}</span>
            <div style="max-width: 150px">
              <v-text-field
                @keydown.prevent.stop.enter="onClose"
                v-mask="'######'"
                type="tel"
                dense
                light
                outlined
                rounded
                v-model.number="m.value"
              >
                <template v-slot:prepend-inner>
                  <v-img contain width="24" height="24" :src="m.icon" />
                </template>
              </v-text-field>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mask } from "vue-the-mask";
import trofeu from "@/assets/svg/Trofeu.svg";


export default {
  directives: { mask },
  computed: {
    ...mapGetters({
      models: 'total/getItems'
    })
  },
  methods: {
    onClose() {
      this.$emit('onClose')
    }
  },
  watch: {
    "models.trophies.value"(nv) {
      if (parseInt(nv) <= 0) {
        this.models.trophies.value = 0;
      }
    },
    "models.diamonds.value"(nv) {
      if (parseInt(nv) <= 0) {
        this.models.trophies.value = 0;
      }
    },
    "models.rubys.value"(nv) {
      if (parseInt(nv) <= 0) {
        this.models.trophies.value = 0;
      }
    },
  },
};
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>