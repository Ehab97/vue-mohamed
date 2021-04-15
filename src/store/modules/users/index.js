import mutations from './mutations'
import actions from './actions'
import getters from './getters'
const usersModule = {
     namespaced:true,
     // the key we assign whn wen add midule in roote store
     // to spefcy if you have method or function used in multi module
     state: {
         users:[],
         user:null
     },
     mutations,
     actions,
     getters
}

 export default usersModule; 