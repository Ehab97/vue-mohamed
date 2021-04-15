<template>
  <div class="home">
    <div id="nav">
      <router-link to="/home">users</router-link> |
      <router-link to="/about">add user</router-link>
    </div>
    <router-view/>
     <Users/>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Users from '../components/users/ListOfUsers.vue'

export default {
  name: 'Home',
  components: {
    Users
  }
}
</script>
