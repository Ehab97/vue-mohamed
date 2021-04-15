import axios from "axios"

export default{
     logIn({commit},payload){
          axios.post(`https://reqres.in/api/login`,payload)
          .then(res => {
               console.log('user log =>',res)
               let payload={isLogged:true,error:null}
               localStorage.setItem('token',res.data.token)
               commit('LOGIN',payload)
          })
          .catch(err => {
               let payload={isLogged:false,error:err}
               commit('LOGIN',payload)
          })
     },
     signUp({commit},payload){
          axios.post(`https://reqres.in/api/register`,payload)
          .then(res => {

               console.log('user register =>',res)
               let payload={isLogged:true,error:null}
               localStorage.setItem('token',res.data.token)
               commit('LOGIN',payload)
          })
          .catch(err => {
               let payload={isLogged:false,error:err}
               commit('SIGN_UP',payload)
          })
     },
   
}