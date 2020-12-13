import vue from 'vue'
vue.mixin({
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xs
    }
  }
})