<template>
  <div>
    <Header :info="info"/>
      <div class="databox pb-3">
        <form class="mt-5 py-2 p-3">

          <v-easy-camera v-if="isSnap"  :mustApprove="true" :snap="true" :close="true" :loading="true" toggleMask="FullscreenView"  v-model="picture"></v-easy-camera>
    <div class="fileBox row m-0 py-4">
      <div class="camera col-5 text-center p-3">
        <i class="fa fa-camera fa-2x  shadow " type="button" @click="isSnappFuc()" aria-hidden="true"></i>
      </div>
      <div class="showFile col-7">
            <small>
              <span class="text-danger">Note: </span>
                Click on the cemara icon to get your IT letter and upload
            </small>
      </div>
    </div>

    <hr>
    <div class="add text-muted  w-100 text-center"><span class=" bg-white ">Additional information</span></div>

            <input type="text" required class="w-100 mt-3" placeholder="Department">

            <input type="text" required class="w-100 mt-4" placeholder="School">

               <select name="" id="" required class="w-100 mt-4" >
                 <option value="" >Select Type of  Firm </option>
                 <option  selected v-for="firm in firms" :key="firm">{{ firm }}</option>
               </select>
               <select name="" id="" required class="w-100 mt-4" >
                 <option value="" selected>Select Location</option>
                 <option >1-year IT</option>
                 <option >4-month Siwes</option>
               </select>

            <button class="btn-success shadow w-100 mt-5 btn rounded-pill p-2">Upload Document</button>

     </form>
      </div>
  </div>
</template>


<script>
import Header from '@/components/auth-header';
import EasyCamera from 'easy-vue-camera';
// import { WebCam } from "vue-web-cam";

export default {
  components:{
    Header,
    'v-easy-camera': EasyCamera,
    //  'vue-web-cam': WebCam,
  },
  data() {
    return {
      firms:[
        'Hopital',
        'School',
        'Innovation Hub',
        'Church',
        'Petrolium Company',
        'Ministry(Government)',
        'Private Company',
      ],
      isSnap:false,
    passwordCheckData:false,
    picture:"",
      info:{
          name:"Document",
          short_name:"Upload your  IT letter!",
          details:"Let the firm know more about you",
          icon:"fa-book",
          dashboard:false,

      }
    }
  },
  methods: {
    isSnappFuc(){
            this.isSnap=!this.isSnap;
            console.log(`Clicked and set ${this.isSnap}`)
    },
   passwordCheck(data){
             if (data=="show") {
                 this.passwordCheckData=!this.passwordCheckData;
                 this.$refs.password.type="text"
             }
             else{
                this.passwordCheckData=!this.passwordCheckData;
                this.$refs.password.type="password"

             }
        }
},

}
</script>
<style >
.camera{
  border:2px dashed var(--success);
  border-radius:5px;

}
.add{
  display: absolute !important;
  margin-top: -32px;

}
i.fa-eye-slash,i.fa-eye{
  position:absolute ;
  right:30px;
  margin-top:-32px;
}

</style>

