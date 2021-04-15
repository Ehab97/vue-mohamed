<template>
  <div class="about">
    <div id="nav">
      <router-link to="/home">users</router-link> |
      <router-link to="/about">add user</router-link>
    </div>
    <add-user/>
  </div>
</template>
<script>
import AddUser from '../components/users/AddUser.vue'
export default {
  components:{
    
    AddUser
  }
}
</script>