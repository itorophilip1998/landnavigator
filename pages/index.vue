<template>
  <div>
    <img src="~assets/speechbot/bg2.jpg" class="hero">
    <div class="overlay"></div>
    <div class="my-container text-center bg-transparent text-white pt-5 p-2 mt-5">
        <h1 class="load">
            Speech Recognition System
        </h1>

        <p class="my-4 text-light">
           Design And Implemented by Group1.<br/>
          Artificial Inteligent(AI) Practical
        </p>
        <nuxt-link to="/login" class="btn bg-primary rounded-pill w-50 mt-3 shadow p-3 
text-white"> Get Started <i class="fa fa-long-arrow-right ml-2" aria-hidden="true"></i></nuxt-link>
        <div class="contact text-center p-4">
          <a href="https://www.facebook.com" class="fa fa-facebook  bg-primary shadow text-white" aria-hidden="true"></a>
          <a href="https://www.whatsapp.com" class="fa fa-whatsapp bg-primary shadow text-white" aria-hidden="true"></a>
          <a href="https://www.twitter.com" class="fa fa-twitter bg-primary shadow text-white" aria-hidden="true"></a>
        </div>
    </div>
  </div>
</template>


<script>
export default {
  auth:false,
}
</script>

<style >
    .hero{
      /* background-image:url("~assets/images/hero.jpg"); */
      height:100vh;
      position: fixed;
      background-size: cover;
      top:0;
      bottom:0;
    }
    .my-container{
      z-index: 4 !important;
      position: absolute;
      top:0;  left:0;  bottom:0;
      padding-top:32% !important;

    }
    .contact>.fa{
      margin-left: 4px; 
      border-radius: 50%;
      width: 27px;
      height: 27px;
      line-height: 1.7;
    }
    .contact{
      bottom:0;
      position:absolute;
      width: 100%;
    }
    h1.load{
      text-transform: uppercase;
      font-size: 30px;
    }
</style>


