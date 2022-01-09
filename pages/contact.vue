<template>
  <div>
    <Header :info="info"/>
      <div class="databox pb-3">
        <form class="mt-5 py-2 p-3">
            <input type="text" required class="w-100 mt-0" placeholder="Name">

            <input type="email" required class="w-100 mt-4" placeholder="Email">

            <textarea  required class="w-100 mt-4" placeholder="Write your complain here..." id="" cols="30" rows="3"></textarea>


            <button class="btn-success shadow w-100 mt-4 btn rounded-pill">Send</button>


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
          name:"Contact Us",
          short_name:"Lets us know what bother's you!",
          details:"Get more infomation from us by asking question",
          icon:"fa-phone",
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

