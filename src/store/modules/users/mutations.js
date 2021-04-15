export default{
     fetchAllUser(state,payload){
          state.users=[]
          // state.users.push(payload)
          state.users=state.users.concat(payload)
     },
     SET_USER(state,payload){
          state.user=payload
     },
     ADD_USER(state,payload){state.users.unshift(payload);console.log(state.users)},
     UPDATE_USER(state,data){ 
          const index = state.users.findIndex(user => user.id ===data.id );
          if (index !== -1) {
          //   state.users.splice(index, 1, data)
            state.users[index]=data;   
           console.log('updated',state.users);    
          }},
     deleteUser: (state, id) => (state.users= state.users.filter(user => user.id !== id)),
}