<template>
  <div class="vh-100"> 
      <Loading v-if="loading"/>
      
  </div>
  </div>
</template>


<script>  
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE',
    libraries: 'places',
  },
});
export default {
    name: 'GoogleMap',

    components:{
        Loading
    }, 
  
  
  data() {
    return {
    
   
    }
  },

  mounted(){ 
  },
   
  methods: {
         
  }

}
</script>
<style > 

</style>

