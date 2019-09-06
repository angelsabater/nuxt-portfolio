<template>
  <v-layout
    row
    wrap
    fill-height
  >
    <v-flex 
        xs12 
        md6 
        pa-3 
        justify-center
        >
        <v-img
            src="/side.jpg"
            max-width="430"
            max-height="750"
            ></v-img>
    </v-flex>

    <v-flex 
        xs12 
        md6 
        pa-4
        justify-center
        >
        <v-card-text class="display-2 font-weight-thin">
            Angel Lynn Sabater. <br/>
            {{ $t("hello") }}
        </v-card-text>
        <v-card-text class="subtitle-1 font-weight-regular">
            A back-end web developer based in Tokyo, Japan. <br/>
            Mainly involve with back-end development and contributeks in database management.
        </v-card-text>
        <v-card-text>
        <v-btn icon>
          <v-icon size="24px">fa-linkedin</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon size="24px">fa-github</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon size="24px">fa-instagram</v-icon>
        </v-btn>
      </v-card-text>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {

  }
</script>