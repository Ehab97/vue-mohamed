<template>
  <div class="content">
    <b-form @submit="onSubmit" @reset="onReset">
      <h3 class="text-center">sign up</h3>
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1"
        description="We'll never share your email with anyone else.">
        <b-form-input id="input-1" v-model="email" type="email" placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <label for="text-password">Password</label>
      <b-form-input type="password" id="text-password" v-model="password" aria-describedby="password-help-block">
      </b-form-input>
      <b-form-text id="password-help-block">
        Your password must be 8-20 characters long, contain letters and numbers, and must not
        contain spaces, special characters, or emoji.
      </b-form-text>
      <div class="w-100 mt-3 mb-1">
        <b-button type="submit" class="mr-1" variant="primary">Submit</b-button>
        <b-button type="reset" class="ml-1" variant="danger">Reset</b-button>
      </div>
      <router-link to='/'>log in??</router-link>
    </b-form>
    <transition name="error" mode="out-in">
      <b-alert show variant="danger" v-if="errors">{{errors}}</b-alert>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
  export default {
    data() {
      return {
          email: '',
          password: ''  
      }
    },
    methods: {
      onSubmit(event) {
           event.preventDefault()
           if(this.email!=''&&this.password!=''){
               let payload={email:this.email,password:this.password}
               this.signUp(payload);
           }else{
                this.errors='please enter email and password';
           }
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.email = ''
        this.password= ''
      },
      ...mapActions('auth', ['signUp'])
    }
     ,computed: {
           ...mapGetters('auth',['isLogged','errors'])
     }
  }
</script>
<style scoped>
.content{
     flex-direction: column;
     display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
form{
     margin-bottom: 25px;;
     width: 50%;
    border-radius: 10px;
    border: 1px solid #ededed;
    padding: 1rem;
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