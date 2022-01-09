<template>
  <div>
    <Header :info="info"/>
      <div class="databox pb-3">
        <form class="mt-5 py-2 p-3">
            <input type="text" required class="w-100 mt-1 p-2" placeholder="Name">

            <input type="email" required class="w-100 mt-4 p-2" placeholder="Email">

            <input required type="password" class="w-100 mt-4 mb-1 p-2" placeholder="Password" ref="password">
          <i v-if="!passwordCheckData" class="fa fa-eye link password-check  text-primary" @click="passwordCheck('show')" ></i>
           <i  v-if="passwordCheckData" class="fa fa-eye-slash password-check  link text-primary" @click="passwordCheck('open')" ></i>

            <button class="btn-success shadow w-100 mt-5 btn rounded-pill p-2">Signup</button>
            <button class="bg-white shadow w-100 mt-3 btn rounded-pill p-2" type="button" @click="$router.push('/login')">Login</button>


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
          name:"Register",
          short_name:"Create new account!",
          details:"Signup to  access your siwes placement.",
          icon:"fa-pencil",
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

