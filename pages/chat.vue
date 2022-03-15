<template>
  <div class="vh-100"> 
         <div class="head shadow-sm p-3 fixed-top bg-white">
              <span class="users text-primary">
                    <b>{{(getData.users)? getData.users.length : 'No'}} Active Users</b>
                   <small class="messages">  {{(getData.chats)? getData.chats.length : 'No'}} messages</small>
             </span>
             <span class="users float-right">
                  <i class="fa fa-trash btn text-danger" v-if="chat.username==='Itoro'" aria-hidden="true" @click="deleteChat()"></i>
                  <i class="fa fa-refresh btn text-sucess"   @click="reload()"></i>
                  <i class="fa fa-sign-out text-primary btn " aria-hidden="true" @click="logout()"></i>
             </span> 
              <!-- <vue-speech @onTranscriptionEnd="onEnd"/> -->

         </div>

        <div class="chatBody mt-5  m-0"  v-chat-scroll >
                
                <div :class="(item.user_id===chat.user_id)? 'shadow-sm userChat chatBox':'shadow-sm othersChat chatBox'" v-for="item in  getData.chats" :key="item._id">
                    <div class="username">
                      <i class="fa fa-user-circle" aria-hidden="true"></i>  {{item.username}}
                    </div>
                    <div class="message">
                        {{item.message}}

                    </div>
                    <div class="time ">
                            <small class="text-muted">{{setTime(item.createdAt)}}</small>
                    </div> 
                         
                </div>
                <div class="shadow-sm userChat chatBox" v-if="mic">
                    <div class="username">
                      <i class="fa fa-microphone" aria-hidden="true"></i>  Recording....
                    </div>
{{chat.username}}
                    <div class="message"  id="messageId"> 

                    </div>  
                         
                </div>
           
         </div> 
         <div class="recorder shadow  "  
        @click="recordMicStart()"  
    >
             <i class="fa fa-microphone" aria-hidden="true"></i>
         </div>
         <div class="chatinput p-2 ">
             <input type="text" id="recorder"  class="chat-input shadow"  v-model="chat.message" @keydown.enter="postChat()">
        
             <i class="fa fa-paper-plane send"   @click="postChat()" aria-hidden="true"></i>
         </div>
  </div>
  </div>
</template>


<script> 
import loadScript from './loadScript'
 import moment from 'moment'
import LongPress from 'vue-directive-long-press'
import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)
import VueSpeech from 'vue-speech'
Vue.use(VueSpeech)

 
const recorder=document.querySelector('.recorder')

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var recognition = new SpeechRecognition()
recognition.interimResults=true
recognition.continous=true
  

 
                    

export default {
    middleware: 'auth',
     directives: {
    'long-press': LongPress
  },
  
  data() {
    return {
    enabled: false,

    chat:{ 
     message:" ",
     user_id:"",
     username:'',
    } ,
     getData:[],
     mic:false
   
    }
  },

  mounted(){ 
     this.getAll()
        const _id =localStorage.getItem('_id')
       const username =localStorage.getItem('username')
        this.chat.user_id=_id 
        this.chat.username=username
        const chat_input = document.querySelector('.chat-input')
      
        recognition.onresult = async function (event) {
            this.mic=true
        const message = document.getElementById('messageId')
            let text=" ";
            window.final="";
            let i=0;
            while (i<event.results.length) {
                text+=event.results[0][0].transcript; 
                message.innerHTML = text
                i++;
            }
            window.final=text
             
        } 
 
  },
 
   
  methods: {
         
 recordMicStart(){  
          try {
                     const recorder=document.querySelector('.recorder')
                    
                     this.mic=!this.mic

                     if(this.mic){
                       recognition.start();  
                         recorder.classList.add('on-mic') 
                         

                     }
                     else{
                        recognition.stop();  
                        recorder.classList.remove('on-mic') 

                     } 
                    this.chat.message=window.final 
                    this.postChat()

              
          } catch (error) {
              
          }
      },

      
    
      
      setTime(timer){
          const newTime=moment(timer).fromNow();
            return newTime
      },
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

            
       },

       reload(){
           location.reload()
       }


},

}
</script>
<style >
.border-primary{
    border: 2px solid rgb(125, 111, 134) !important;
}
    .messages{
        position: absolute;
        left: 17px;
        top: 34px;
        font-size: 12px;
    }
    .send{
            position: absolute;
            right: 20px !important;
            font-size: 20px !important;
            color: indigo !important;
            margin-top: 13px;
    }
.vh-100{
  height:100vh;
}
.chatBox{
    
}
.fa-user-circle{
    font-size: 20px;
}
.chat-input{
    border: 1px solid indigo !important;
    width: 100% !important;
    padding: 10px;
    border-radius:30px;
    padding-right: 34px !important;
}
.chatinput{
  position: fixed;
  bottom: 0 !important;
  width: 100% !important;
    background: whitesmoke !important ;
    z-index: 10 !important;
    
}
html{
    background: whitesmoke !important ;

}
body{
   overflow-y: hidden !important;

}

i.fa-eye-slash,i.fa-eye{
  position:absolute;
  right:30px;
  margin-top:-32px;
}
.chatBox{
  width: 80% !important;
  max-width: 80% !important;
  /* min-width: 10% !important; */
  padding: 10px !important; 
  margin-top: 10px;
  border-radius: 20px;
  color:whitesmoke; 
  padding-left: 10px !important;
  text-align: left;
  overflow: hidden;
font-family: consolas;



}
.othersChat{
  margin-right: 20% !important; 
  background: rgb(51, 49, 51) !important;
  border-bottom-left-radius: 0px !important;
}
.chatBody{ 
   padding: 10px;
  padding-bottom: 60px !important;
  padding-top: 6% !important;
    overflow-y: scroll !important;
    overflow-x: hidden !important;
    height: 90vh !important;
    -ms-overflow-style: none !important;

}
.userChat{
  margin-left: 20% !important;
  background: indigo !important;
  border-bottom-right-radius: 0px !important;

}
.bg-up{
    opacity: 70% !important; 
    font-size: 12px;
}
.recorder{
    position: fixed;
    left: 10px !important;
    bottom: 16% !important;
    color: whitesmoke;
    background: rgb(138, 132, 136);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center; 
    align-items: center;
    display: flex;
    font-size: 25px ;
    cursor: pointer;
}

.on-mic{ 
    background: rgb(197, 14, 14) !important ;

}
.fa-microphone{
    flex: auto !important;
}
</style>

