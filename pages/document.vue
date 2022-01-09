<template>
  <div>
    <Header :info="info"/>
      <div class="databox pb-3">
        <form class="mt-5 py-2 p-3">
            <input type="text" required class="w-100 mt-1" placeholder="Department">

            <input type="text" required class="w-100 mt-4" placeholder="School">

               <select name="" id="" required class="w-100 mt-4" >
                 <option value="" selected>Training Type</option>
                 <option >1-year IT</option>
                 <option >4-month Siwes</option>
               </select>

               <select name="" id="" required class="w-100 mt-4" >
                 <option value="" selected>Location</option>
                 <option >1-year IT</option>
                 <option >4-month Siwes</option>
               </select>

            <button class="btn-success shadow w-100 mt-5 btn rounded-pill p-2">Upload Document</button>
 
     </form>
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
          name:"Document",
          short_name:"Upload your  IT letter!",
          details:"Let the firm know more about you",
          icon:"fa-book",
          dashboard:false,

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

i.fa-eye-slash,i.fa-eye{
  position:absolute;
  right:30px;
  margin-top:-32px;
}

</style>

