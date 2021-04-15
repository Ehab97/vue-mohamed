export default{
     LOGIN(state,payload){
          state.isLogged=payload.isLogged
          state.error=payload.error
          
     },
     SIGN_UP(state,payload){
          state.isLogged=payload.isLogged
          state.error=payload.error
          
     },
}