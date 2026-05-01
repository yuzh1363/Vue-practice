<script setup>
import { ref } from 'vue'
import fetchapi from './components/fetchapi.vue';

// const list = ref([
//   { text: '買牛奶', done: false },
//   { text: '洗衣服', done: false }
// ])
// function removeItem(num){
//   list.value = list.value.filter((item,index) => index !== num)
// }

// const newTodo = ref('')
// function addTo(){
//   if(newTodo.value.trim() ===''){
//     alert('請輸入文字喔')
//     return
//   }
//   list.value.push({
//     text:newTodo.value,
//     done:false
//   })
//   newTodo.value = ''
// }


</script>

<template>
  <div class="flex flex-row">
    <fetchapi class="border w-50"></fetchapi>
    <RouterView class="border w-50"></RouterView>
  </div>

  <!-- <nav class="nav-bar">
    <router-link to="/">首頁</router-link>

    <router-link 
      v-for="id in userList" 
      :key="id"
      :to="`/user/${id}`"
      class="nav-btn"
    >
      看 {{ userStore.allUsers[id].name }} 的檔案
    </router-link>
  </nav>
  <RouterView></RouterView> -->
  <!-- <P20315 @del-item="removeItem" v-for="(item,index) in list" :idx="index" :itemList="item"></P20315>
  <input type="text" v-model="newTodo" placeholder="請輸入文字" @keyup.enter="addTo">
  <button @click="addTo">新增</button> -->
</template>
