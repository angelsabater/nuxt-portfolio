<template>
  <v-layout
    column
  >
    <v-flex
      xs12
      sm8
      md6
      pa-5
      data-aos="zoom-in-down"
		  data-aos-once="true"
    >
    <v-card flat
      class="mx-lg-auto">
      <v-card-text class="display-2 font-weight-thin">
        {{$t('header')}}
      </v-card-text>
      <v-card-text class="subtitle-1 font-weight-regular">
        {{$t('description')}} <br/>
        {{$t('sub-description')}}
      </v-card-text>
    </v-card>
    </v-flex>
    <v-divider></v-divider>
    <v-flex pa-4>
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
