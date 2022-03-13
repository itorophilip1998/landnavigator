<template>
  <div class="vh-100"> 
         <div class="head shadow-sm p-3 fixed-top bg-white">
             <span class="users text-primary">
                    <b>{{(getData.users)? getData.users.length : 'No'}} Active Users</b>
             </span>
             <span class="users float-right">
                  <i class="fa fa-trash btn text-danger" v-if="username==='Itoro'" aria-hidden="true" @click="deleteChat()"></i>
                  <i class="fa fa-sign-out text-primary btn " aria-hidden="true" @click="logout()"></i>
             </span>
         </div>

         <div class="chatBody mt-5 py-4 ">
                
                <div :class="(item.user_id===chat.user_id)? 'shadow-sm userChat chatBox':'shadow-sm othersChat chatBox'" v-for="item in  getData.chats" :key="item._id">
                    <h5 class="username bg-up">
                        itoro
                    </h5>
                    <div class="message">
                        {{item.message}}

                        
                    </div>
                    <div class="time mt-3">
                            <small class="text-muted">3 hour ago</small>
                    </div> 
                         
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
       },
           deleteChat(){
           const token = localStorage.getItem('token') 
           const config={ headers:{ 
               "Authorization":`Bearer ${token}`,
               "Content-Type":`application/json`
           }}
            this.$axios.get('/clear-all',config).then((res) => { 
                this.logout()
            }); 

            
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
  margin-top: 10px;
  border-radius: 15px;
  color:white; 

}
.othersChat{
  margin-right: 20% !important; 
  background: rgb(51, 49, 51) !important;
}
.chatBody{
  padding:10px;
}
.userChat{
  margin-left: 20% !important;
  background: indigo !important;
}
.bg-up{
    opacity: 70% !important; 
    font-size: 12px;
}
</style>

