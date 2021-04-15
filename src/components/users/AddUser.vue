<template>
  <div class="center">
     <transition name="error" mode="out-in">
          <b-form inline>
          <label class="sr-only" for="inline-form-input-name">Name</label>
          <b-form-input
               id="inline-form-input-name"
               class="mb-2 mr-sm-2 mb-sm-0"
               placeholder="name"
               v-model="name"
          ></b-form-input>

          <label class="sr-only" for="inline-form-input-username">Username</label>
          <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
               <b-form-input id="inline-form-input-username" v-model="job" placeholder="job"></b-form-input>
          </b-input-group>
          <b-button variant="primary" @click="addUser">Add user</b-button>
          </b-form>
     </transition>
</div>
</template>

<script>
export default {
     data () {
          return {
               name:'',
               job:''
          }
     },
 methods: {
        addUser() {
             if(this.name.length!=0 &&this.job.length!=0){
                  let payload={name:this.name,job:this.job};
             this.$store.dispatch({
                  type: 'users/addUser',
                  payload
             })
             }
        }
     }
}
</script>

<style scoped>

.center{
     height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
}
/* ------------ */
.error-enter-active {
  animation: error .5s ease-out;
}

/* #2 for leaving elemnt */

.error-leave-active {
  animation: error .5s ease-in reverse;
} 

@keyframes error {
  0% {
      /* transform: translateY(0) scale(1); */
       opacity: 0;
    /*transform: translateY(30px); */

    }

    70% {
      opacity: .5;
      /* transform: translateY(120px) scale(1.1); */
    }

    100% {
      /* transform: translateY(-150px) scale(1); */
      opacity: 1;
    /*transform: translateY(0); */
    }
}
</style>