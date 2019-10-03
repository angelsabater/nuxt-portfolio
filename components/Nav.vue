<template>
  <div>
    <v-toolbar flat style="margin-top: 50px" 
      v-bind:class="{
        'nav-mobile': $vuetify.breakpoint.xs
      }">
        <v-img
            src="/logo.png"
            max-width="100"
            ></v-img>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat text :to="$t('nav.workLink')"> {{$t('nav.works')}}</v-btn>
          <v-btn flat text :to="$t('nav.aboutLink')"> {{$t('nav.about')}}</v-btn>
          <v-btn flat text @click='openLink("https://drive.google.com/file/d/1jL_HaauxqpKMSTi0qXkAf4pljiBzhtmp/view?usp=sharing")'>{{$t('nav.resume')}}</v-btn>
        </v-toolbar-items>
        <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
          <v-row align="center">
              <div class="my-2">
                <v-btn flat text :href="$t('nav.workLink')"> {{$t('nav.works')}}</v-btn>
              </div>
          </v-row>
          <v-row align="center">
              <div class="my-2">
                <v-btn flat text :href="$t('nav.aboutLink')"> {{$t('nav.about')}}</v-btn>
              </div>
          </v-row>
          <v-row align="center">
              <div class="my-2">
                <v-btn flat text @click='openLink("https://drive.google.com/file/d/1jL_HaauxqpKMSTi0qXkAf4pljiBzhtmp/view?usp=sharing")'>{{$t('nav.resume')}}</v-btn>
            </div>
          </v-row>
        </v-menu>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  computed: {
     otherLang() {
       return this.$i18n.locale == 'ja' ? 'en' : 'ja';
     }
   },
   methods: {
     openLink(Link){
       window.open(Link);
     },
     changeLang() {
       const router = this.$router;
       this.$store.dispatch('changeLang', { router, lang: this.otherLang })
     },
     menuItems () {
      return this.menu
    }
  }
}
</script>