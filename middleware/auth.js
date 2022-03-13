export default function ({ store, redirect }) {
  const authorized = localStorage.getItem('token')
  const user = localStorage.getItem('user')
  if (
    !authorized ||
    (authorized === 'undefined' && !user) ||
    user === 'undefined'
  ) {
    return redirect('/login')
  }
}
