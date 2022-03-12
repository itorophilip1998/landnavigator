<template>
  <div class="vh-100"> 
         <div class="header shadow">
             <span class="users">
                    {{30}} Users
             </span>
             <span class="users">
                  <i class="fa fa-sign-out text-muted" aria-hidden="true"></i>
             </span>
         </div>

         <div class="chatBody">

             <div class="friendsChat mt-3">
                 <div class="username">{{'Emmanuel'}}</div>
                 <div class="chatbody">
                     okay
                 </div>
                 <div class="time">
                     {{"1hour ago"}}
                 </div>
             </div>

             <div class="userChat mt-3">
                 <div class="username">{{"Itoro"}}</div>
                 <div class="chatbody">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam qui aperiam ad quis ea! Tenetur adipisci harum quidem soluta ipsum reprehenderit nobis voluptate rerum consectetur. Nostrum corporis aliquid nisi.
                 </div>
                    <div class="time">{{"2days ago"}}</div>
             </div>
         </div>
         <div class="chatinput">
             <input type="text" v-model="chat.message"  @keydown.enter="postChat()">
             <i class="fa fa-paper-plane-o" @click="postChat()" aria-hidden="true"></i>

         </div>
  </div>
  </div>
</template>


<script> 
export default {
  auth:true,
 
  data() {
    return {
    chat:{ 
     message:"",
     user_id:localStorage.getItem(user._id),
    } ,

     getData:[]
   
    }
  },
  mounted(){
  this.getAll()
  },
  methods: {
       getAll(){
           const token =localStorage.get('token')
           const config={ headers:{ 
               "Authorization":`Bearer ${token}`
           }}
            axios.get('/chat',config).then((res) => {
              this.getData=res.data
            })
       },
       postChat(){
           const token =localStorage.get('token')
           const config={ headers:{ 
               "Authorization":`Bearer ${token}`
           }}
            axios.post('/chat',this.chat,config).then((res) => {
             this.getAll()
            })
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

