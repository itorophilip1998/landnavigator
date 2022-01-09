<template>
  <div class="bg-light">
    <Header :info="info"/>
      <div class="name shadow w-75 p-2 text-center  bg-white " >
        <span ><input type="text" class="w-100 border-none" placeholder="🍳 Dashboard Search">  </span>
      </div>

    <div class="dashboard-header mt-5 ">
      <!-- recommended -->
          <h6 class="font-weight-bold pl-1">Recommended Siwes Firm <i class="fa fa-tag text-danger" aria-hidden="true"></i></h6>

       <div class="recomended p-2 pb-5" >

      <div class="card  shadow mr-3 rounded-x" v-for="item in 20" :key="item">
        <img class="card-img-top rounded-x" src="~assets/img/gallery/gallery-1.jpg" alt="">
        <div class="card-body p-1 py-2 ">
          <h6 class="card-title m-0">StartHub Innovation </h6>
          <small class="card-text d-block"><i class="fa fa-map-marker text-success" aria-hidden="true"></i> #30 IBB,Uyo, Akwa Ibom</small>
          <span class="card-text d-block ">
             ₦0,00 <i class="fa fa-check-circle text-primary" aria-hidden="true"></i>
            </span>
        </div>
            <div class="btn btn-sm btn-success p-1   shadow w-100">Apply</div>
      </div>
        </div>

       <!-- Applied -->

       <div class=" p-4 border-top " >
          <h6 class="font-weight-bold pl-1">Applied Siwes Firm <i class="fa fa-tag text-danger" aria-hidden="true"></i></h6>

      <div class="card  shadow mx-auto rounded-x mb-4" v-for="item in 5" :key="item">
        <img class="card-img-top rounded-x" src="~assets/img/gallery/gallery-1.jpg" alt="">
        <div class="card-body p-1 py-2 ">
          <h6 class="card-title m-0">StartHub Innovation </h6>
          <small class="card-text d-block"><i class="fa fa-map-marker text-success" aria-hidden="true"></i> #30 IBB,Uyo, Akwa Ibom</small>
          <span class="card-text d-block ">
             ₦0,00 <i class="fa fa-check-circle text-primary" aria-hidden="true"></i>
            </span>
        </div>
            <div class="btn btn-sm btn-danger p-1   shadow w-100">Applied</div>
      </div>
        </div>

    </div>
  </div>
</template>

<script>
import Header from '@/components/auth-header'
export default {
  components:{
    Header,
  },
  data() {
    return {
    passwordCheckData:false,
      info:{
          name:"Dashboard",
          short_name:"Mr. Tester",
          details:"Tester@gmail.com, Computer Science, Applied Science",
          icon:"fa-pencil",
          dashboard:true,

      }
    }
  },
  methods: {
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
.recomended,.applied{
  display: flex;
  overflow-x: scroll !important;
  width:100%;

}

.card {
  display:inline-block;
    min-width: 50% !important;
}
</style>

