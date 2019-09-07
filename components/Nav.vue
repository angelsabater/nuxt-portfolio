<template>
  <div>
    <v-toolbar flat style="margin-top: 50px">
      <v-img
					src="/logo.png"
					max-width="100"
					></v-img>

      <div class="flex-grow-1"></div>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat text :href="$t('nav.workLink')"> {{$t('nav.works')}}</v-btn>
        <v-btn flat text :href="$t('nav.aboutLink')"> {{$t('nav.about')}}</v-btn>
        <v-btn flat text href="https://drive.google.com/file/d/1MjNEgL_LjTJQknlvfWtYsIXO4ly-8LyS/view" target="_blank">{{$t('nav.resume')}}</v-btn>
        <v-btn flat text @click="changeLang()">
          <v-img
              src="/language.png"
              max-width="30"
              ></v-img></v-btn>
      </v-toolbar-items>
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
     changeLang() {
       const router = this.$router;
       this.$store.dispatch('changeLang', { router, lang: this.otherLang })
     }
   }
}
</script>