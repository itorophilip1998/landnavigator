<template>
  <div class="vh-100"> 
         <div class=" shadow p-3">
             <span class="users text-primary">
                    <b>{{(getData.users)? getData.users.length : 'No'}} Active Users</b>
             </span>
             <span class="users float-right">
                  <i class="fa fa-sign-out  text-primary" aria-hidden="true"></i>
             </span>
         </div>

         <div class="chatBody">

             <div class="friendsChat mt-3 ">
                 <div class="username"> Emmanuel</div>
                 <div class="chatbody">
                     okay
                 </div>
                 <div class="time">
                    1h ago
                 </div>
             </div>

             <div class="userChat mt-3">
                 <div class="username">Itoro</div>
                 <div class="chatbody">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam qui aperiam ad quis ea! Tenetur adipisci harum quidem soluta ipsum reprehenderit nobis voluptate rerum consectetur. Nostrum corporis aliquid nisi.
                 </div>
                    <div class="time">2days ago</div>
             </div>
         </div>
         <div class="chatinput">
             <input type="text" v-model="chat.message"   @keydown.enter="postChat()">
             <i class="fa fa-paper-plane-o" v-if="chat.message" @click="postChat()" aria-hidden="true"></i>

         </div>
  </div>
  </div>
</template>


<script> 
export default {
    middleware: 'auth',
  
  data() {
    return {
    chat:{ 
     message:"",
     user_id:"",
    } ,

     getData:[]
   
    }
  },

  mounted(){
     this.getAll()
  },
  
  methods: {
        getAll(){
           const token =localStorage.getItem('token') 
           const config={ headers:{ 
               "Authorization":`Bearer ${token}`
           }}
            this.$axios.get('/chat',config).then((res) => {
              this.getData=res.data
            })
       },
        postChat(){
          const {_id} =JSON.parse(localStorage.getItem('user'))
           this.chat.user_id=_id 
           const token = localStorage.getItem('token') 
           const config={ headers:{ 
               "Authorization":`Bearer ${token}`,
               "Content-Type":`application/json`
           }}
            this.$axios.post('/chat',this.chat,config).then((res) => { 
              this.getAll()  
            });
            this.chat.message=""
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

