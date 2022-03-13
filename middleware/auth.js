export default function ({ store, redirect }) {
  const authorized=localStorage.getItem('token') 
  if (!authorized || authorized==='undefined') {
    return redirect('/login')
  }  else{

return redirect('/chat')
  }  
}
