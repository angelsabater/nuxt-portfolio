<template>
  <v-layout
    row
    wrap
    fill-height
    justify-center
  >
    <v-flex 
        xs12 
        md5
        lg4
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
        class="description-about"
        justify-center
        >
        <v-card-text 
          class="font-weight-thin headline"
        >
            {{$t('about.name')}} 👩🏻‍💻<br/>
        </v-card-text>
        <v-card-text class="subtitle-1 font-weight-regular">
            {{$t('about.first_paragraph')}}<br/><br/>
            {{$t('about.second_paragraph')}}<br/><br/>
            {{$t('about.third_paragraph')}}
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
            href="mailto:sabaterggl@gmail.com"
            target="_blank"
            >
            <v-icon size="24px">fa-envelope</v-icon>
          </v-btn>
      </v-card-text>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {

  }
</script>