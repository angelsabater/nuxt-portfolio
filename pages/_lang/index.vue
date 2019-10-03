<template>
  <v-layout
    column
  >
    <v-flex
      xs12
      sm8
      md5
      pa-3
      :pa-5="$vuetify.breakpoint.lg"
      data-aos="zoom-in-down"
		  data-aos-once="true"
    >
    <v-card flat
      class="mx-lg-auto">
      <v-card-text 
        class="font-weight-thin"
        v-bind:class="{
              'display-2': !$vuetify.breakpoint.xs,
              'headline': $vuetify.breakpoint.xs,
            }"
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
