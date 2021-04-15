import mutations from './mutations'
import actions from './actions'
import getters from './getters'
const authModule = {
     namespaced:true,
     // the key we assign whn wen add midule in roote store
     // to spefcy if you have method or function used in multi module
     state: {
         isLogged:false,
         error:null
     },
     mutations,
     actions,
     getters
}

 export default authModule; 