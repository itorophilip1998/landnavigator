<template>
  <div class="bg-light vh-100">
    <Header :info="info"/>
      <div class="databox ">
        <form class="mt-5 pt-2 p-3">
            <input type="email" required class="w-100 mt-4" placeholder="Email">

            <input required type="password" class="w-100 mt-4 mb-1" placeholder="Password" ref="password">
          <i v-if="!passwordCheckData" class="fa fa-eye link password-check  text-primary" @click="passwordCheck('show')" ></i>
           <i  v-if="passwordCheckData" class="fa fa-eye-slash password-check  link text-primary" @click="passwordCheck('open')" ></i>
            <button class="btn-success shadow w-100 mt-4 btn rounded-pill">Login</button>
            <button class="bg-white shadow w-100 mt-2 btn rounded-pill" type="button" @click="$router.push('/signup')">Signup</button>


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
          name:"Login",
          short_name:"Welcome Back!",
          details:"Login your account to access your details.",
          icon:"fa-sign-in",
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
.vh-100{
  height:100vh;
}

i.fa-eye-slash,i.fa-eye{
  position:absolute;
  right:30px;
  margin-top:-32px;
}

</style>

