<template>
  <div>
    <img src="~assets/images/bgd3.jpg" class="hero" />
    <div class="overlay"></div>
    <div
      class="my-container text-center bg-transparent text-white pt-5 p-2 mt-5"
    >
      <h4 class="load text-center">Land Navigation System</h4>

      <p class="my-5 paragraph text-light">
        Design And Implemented by Group1<br />
        Artificial Inteligent(AI) Practical
      </p>
      <nuxt-link
        to="/navigator"
        class="btn bg-primary rounded-pill w-50 mt-3 shadow p-3 text-white"
      >
        Navigate <i class="fa fa-map-marker ml-1" aria-hidden="true"></i
      ></nuxt-link>
      <div class="contact text-center p-4">
        <a
          href="https://www.facebook.com"
          class="fa fa-facebook bg-primary shadow text-white"
          aria-hidden="true"
        ></a>
        <a
          href="https://www.whatsapp.com"
          class="fa fa-whatsapp bg-primary shadow text-white"
          aria-hidden="true"
        ></a>
        <a
          href="https://www.twitter.com"
          class="fa fa-twitter bg-primary shadow text-white"
          aria-hidden="true"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
}
</script>

<style>
.hero {
  /* background-image:url("~assets/images/hero.jpg"); */
  height: 100vh;
  position: fixed;
  background-size: cover;
  top: 0;
  bottom: 0;
}
.overlay {
  background: rgba(0, 0, 0, 0.3) !important;
}
.my-container {
  z-index: 4 !important;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-top: 32% !important;
}
.contact > .fa {
  margin-left: 4px;
  border-radius: 50%;
  width: 27px;
  height: 27px;
  line-height: 1.7;
}
.contact {
  bottom: 0;
  position: absolute;
  width: 100%;
}
h1.load {
  text-transform: uppercase;
  font-size: 30px;
}
.paragraph {
  font-size: 17px;
}
</style>
