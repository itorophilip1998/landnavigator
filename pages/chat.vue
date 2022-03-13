<template>
  <div class="vh-100"> 
         <div class="head shadow p-3 fixed-top bg-white">
             <span class="users text-primary">
                    <b>{{(getData.users)? getData.users.length : 'No'}} Active Users</b>
             </span>
             <span class="users float-right">
                  <i class="fa fa-sign-out text-primary btn " aria-hidden="true" @click="logout()"></i>
             </span>
         </div>

         <div class="chatBody mt-5 py-4 ">
                <div :class="(item._id===chat.user_id)? 'userChat chatBox': 'othersChat chatBox'" v-for="item in  getData.chats" :key="item._id">
                    <div class="username">
                        
                    </div>
                    <div class="message">
                        {{item.message}}
                    </div>
                    <div class="time"></div>
                         
                </div>
           
         </div>
         <div class="chatinput">
             <input type="text" v-model="chat.message" required @keydown.enter="postChat()">
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
        username:'',
     getData:[]
   
    }
  },

  mounted(){
       
     this.getAll()
  },
  created(){
       const {_id,username} =JSON.parse(localStorage.getItem('user'))
        this.chat.user_id=_id 
        this.username=username
  }, 
  methods: {
      logout(){
            try {
              localStorage.clear('token') 
              this.$router.push('/')
            } catch (error) {
                
            }
      },
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
.chatBox{
  max-width: 80% !important;
  padding: 10px !important;
  border: 1px solid grey;
  margin-top: 10px;
  border-radius: 15px;

}
.otherChat{
  margin-right: 20% !important;
 
}
.userChat{
  margin-left: 20% !important;
}
</style>

