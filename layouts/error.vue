<template>
  <div class="__nuxt-error-page">
      <v-img
        src="/old.png"
        max-width="60"
        max-height="60"
        ></v-img>
    <h1 v-if="error.statusCode === 404">Oh snap! Page not found.</h1>
    <h1 v-else>An error occurred</h1>
    <v-card-text>
        <v-btn 
        icon
        to="/"
        >
        <v-icon size="24px">fa-home</v-icon>
        </v-btn>
    </v-card-text>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>

<style>
.__nuxt-error-page {
  padding: 1rem;
  height: 100vh;
  background: #ffffff;
  color: #47494E;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 100 !important;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>