import axios from "axios"

export default{
     fetchAllUser({commit}){
          axios.get(`https://reqres.in/api/users?page=1`)
          .then(res => {
               
               console.log('data =>',res.data.data)
               commit('fetchAllUser',res.data.data)
          })
          .catch(err => {
               console.error(err); 
          })
     },
     fetchUser({commit},id){
          axios.get(`https://reqres.in/api/users/${id}`)
          .then(res => {
               
               console.log('user =>',res.data.data)
               commit('SET_USER',res.data.data)
          })
          .catch(err => {
               console.error(err); 
          })
     },
     paginateUser({commit},id){
          axios.get(`https://reqres.in/api/users?page=${id}&per_page=7`)
          .then(res => {
               commit('fetchAllUser',res.data.data)
          })
          .catch(err => {
               console.error(err); 
          })
     },
     deleteUser({commit},id){
          axios.delete(`https://reqres.in/api/users/${id}`)
          .then(res => {
               console.log(res)
               commit('deleteUser',id)
          })
          .catch(err => {
               console.error(err); 
          })
     },
     addUser({commit},payload){
          axios.post(`https://reqres.in/api/users`,payload)
          .then(res => {
               console.log('add',res)
               commit('ADD_USER',payload)
          })
          .catch(err => {
               console.error(err); 
          })
     },
     updateUser({commit},data){
          axios.patch(`https://reqres.in/api/users/${data.id}`,data)
          .then(res => {
               console.log('update',res)
               commit('UPDATE_USER',data)
          })
          .catch(err => {
               console.error(err); 
          })
     },
}