<template>
  <v-layout
    column
  >
    <v-flex
      xs12
      sm8
      md6
      pa-5
    >
    <v-card flat
      class="mx-lg-auto">
      <v-card-text class="display-2 font-weight-thin">
        Hi, I'm Angel.
      </v-card-text>
      <v-card-text class="subtitle-1 font-weight-regular">
        A back-end web developer based in Tokyo, Japan. <br/>
        Mainly involve with back-end development and contributes in database management.
      </v-card-text>
    </v-card>
    </v-flex>

    <v-flex pa-4>
      <Works/>
    </v-flex>
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
