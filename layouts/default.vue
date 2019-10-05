<template>
  <v-app>
    <v-content>
      <Nav />
      <v-container 
        pa-4
      >
        <nuxt />
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import AOS from "aos"
import 'aos/dist/aos.css'

export default {
  components: {
    Nav,
    Footer
  },
  mounted(){
    AOS.init();
  }
}
</script>

