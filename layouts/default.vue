<template>
  <v-app>
    <v-content>
      <Nav />
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default {
  components: {
    Nav,
    Footer
  },
  computed: {
     otherLang() {
       return this.$i18n.locale == 'ja' ? 'en' : 'ja';
     }
   },
   methods: {
     changeLang() {
       const router = this.$router;
       this.$store.dispatch('changeLang', { router, lang: this.otherLang })
     }
   }
}
</script>

