<template>
 <transition name="error"  mode="out-in">
   <div>
        <div id="nav">
      <router-link to="/home">users</router-link> |
      <router-link to="/about">add user</router-link>
    </div>
<div class="center">
    <div class="card" >
  <img :src="getUser.avatar" alt="John" style="width:100%">
  <h1>{{getUser.first_name}} {{getUser.last_name}}</h1>
  <p class="title">CEO & Founder, Example</p>
  <p>{{getUser.email}}</p>
  <p style="margin-bottom:-3px"><button>Contact</button></p>
</div>
</div>
   </div>
  </transition>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
     data() {
      return {
           
      }
    },
     methods: {
          ...mapActions('users', ['fetchUser'])
     },
      computed: {
           ...mapGetters('users',['getUser'])
     }
     ,created() {

          this.fetchUser(this.$route.params.id);
          // this.items[...this.getUsers];
     }
}
</script>

<style scoped>
.center{
height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
}
@media only screen and (min-width: 700px) {
  .card {
    width: 50vh;
  }
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
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