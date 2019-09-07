<template>
  <v-layout
    row
    wrap
    fill-height
  >
    <v-flex 
        xs12 
        md4 
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
        md8 
        pa-5
        justify-center
        >
        <v-card-text class="display-1 font-weight-thin">
            {{$t('about.name')}} 👩🏻‍💻<br/>
        </v-card-text>
        <v-card-text class="subtitle-1 font-weight-regular">
            20-year-old born and raised in the Philippines. Graduated college majoring Information Technology in University of the East located at Manila, Philippines. I started having interest with coding back in High School until I went to college and found myself more engaged with programming.<br/><br/>

            Currently based in Tokyo, Japan. Starting my first job as a Junior Web Developer. I'm still exploring
            my way in the technology world. I believe that we're all babies when it comes to technology having the fact that
            something changes and develop each second in our own expanding world.
            
            <br/>

            <br/><br/>
            If you don't see me coding or playing online games, I'm probably sleeping or reading a book of Mark Manson which I recommend by the way.
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
    </v-flex>
  </v-layout>
</template>

<script>
  export default {

  }
</script>