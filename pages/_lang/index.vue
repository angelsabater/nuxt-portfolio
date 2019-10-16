<template>
  <v-layout
    column
    wrap
  >
    <v-flex
      xs12
      sm8
      md5
      lg4
      class="description-header"
      data-aos="zoom-in-down"
		  data-aos-once="true"
    >
    <v-card 
      flat
    >
      <v-card-text 
        class="font-weight-thin headline"
        >
        {{$t('header')}}
      </v-card-text>
      <v-card-text 
        class="font-weight-regular"
        v-bind:class="{
              'subtitle-1': !$vuetify.breakpoint.xs,
              'body-1': $vuetify.breakpoint.xs,
            }"
        >
        {{$t('description')}} <br/>
        {{$t('sub-description')}}
      </v-card-text>
      <v-card-text>
          <v-btn 
            icon
            href="https://www.linkedin.com/in/albsabater/"
            target="_blank"
            >
            <v-icon size="24px">fa-linkedin</v-icon>
          </v-btn>
          <v-btn 
            icon
            href="https://github.com/angelsbtr"
            target="_blank"
            >
            <v-icon size="24px">fa-github</v-icon>
          </v-btn>
          <v-btn 
            icon
            href="https://www.instagram.com/albsabater/"
            target="_blank"
            >
            <v-icon size="24px">fa-instagram</v-icon>
          </v-btn>
      </v-card-text>
    </v-card>
    </v-flex>
    <v-flex pa-2>
      <Works/>
    </v-flex>
    <v-divider></v-divider>
  </v-layout>
</template>

<script>
import Works from '~/components/Works.vue'

export default {
  components: {
    Works
  }
}
</script>
