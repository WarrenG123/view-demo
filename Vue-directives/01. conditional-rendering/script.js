const conditionalRendering = {
  data() {
    return { 
     program:"catalys",
     condition:"true",
      TvOn:"true"
    };
  },
  methods: {
    toggleSwitch() {
      this.condition = !this.condition;
    },
    toggleTv() {
      this.Tv = !this.Tv
    }
  }
} 

Vue.createApp(conditionalRendering).mount('#app')
