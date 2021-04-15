<template>
     <div>
          <b-list-group>
               <transition-group name="error" mode="out-in">
                    <b-list-group-item href="#" variant="light" class="flex-column align-items-start" v-for="(user,key) in getUsers"
                         :key="key">
                         <!-- <router-link :to="{name:'user',params:{id:user.id}}"> -->
                              <div class="d-flex w-100 justify-content-between">
                                   <h5 class="mb-1">{{user.first_name}} {{user.last_name}}</h5>
                                   <b-img v-bind="mainProps" :src="user.avatar" rounded="circle" alt="Circle image">
                                   </b-img>
                              </div>
                              <div class="options">
                                   <router-link :to="{name:'user',params:{id:user.id}}">
                                        <b-icon icon="eye-fill" scale="2" variant="primary"></b-icon>
                                   </router-link>
                                   <b-icon @click="deleteUser(user.id)" icon="x-circle" scale="2" variant="danger">
                                   </b-icon>
                                   <router-link :to="{name:'edit',params:{id:user.id}}">
                                        <b-icon icon="pencil-square" scale="2" variant="primary"></b-icon>
                                   </router-link>
                              </div>

                              <p class="mb-1">
                                   {{user.email}}
                              </p>
                              <small>{{user.id}}</small>
                         <!-- </router-link> -->
                    </b-list-group-item>
               </transition-group>
          </b-list-group>
          <div class="pagination">
               <a @click="paginateUser(1)">&laquo;</a>
               <a @click="paginateUser(1)">1</a>
               <a @click="paginateUser(2)">2</a>
               <a @click="paginateUser(2)">&raquo;</a>
          </div>
     </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
     data() {
      return {
           mainProps: {  width: 75, height: 75, class: 'm1' }
      }
    },
     methods: {
          ...mapActions('users', ['fetchAllUser','paginateUser','deleteUser'])
     },
      computed: {
           ...mapGetters('users',['getUsers'])
     }
     ,created() {
          this.fetchAllUser();
          // this.items[...this.getUsers];
     }
}
</script>

<style>
.list-group{
     margin-bottom: 50px !important;
}
.list-group a{
    text-decoration: none !important;
    color: #000;
}
.pagination {
  display: inline-block;
  justify-content: center;
    margin-bottom: 50px;
}

.pagination a {
cursor: pointer;
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination a.active {
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
  border-radius: 5px;
}
.options{
  display: flex;
  justify-content: space-evenly;
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