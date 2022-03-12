export default function ({ store, redirect }) {
   const authorized=localStorage.getItem('token')
  if (!authorized) {
    return redirect('/login')
  }
}