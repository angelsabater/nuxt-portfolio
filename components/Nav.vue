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
        <v-btn flat text to="/">WORKS</v-btn>
        <v-btn flat text to="/about">ABOUT</v-btn>
        <v-btn flat text>BLOG</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>