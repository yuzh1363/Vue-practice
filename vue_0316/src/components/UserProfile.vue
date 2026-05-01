<script setup>
import { useRoute } from 'vue-router';
import { useUserStore } from '../user'; // 引入剛才寫的 Store
import { computed } from 'vue';

const route = useRoute();
const userStore = useUserStore();

// 從網址抓到 ID (例如: shawn)
const userId = computed(()=> route.params.userId)

// 根據網址 ID，去 Store 裡面找對應的人
// 使用 computed 是為了確保如果 ID 變了，資料也會跟著變
const userInfo = computed(() => {
  return userStore.getUserById(userId.value);
});
</script>

<template>
  <div class="profile-card">
    <h2>個人檔案頁面</h2>
    <hr />

    <div v-if="userInfo">
      <h3>姓名：{{ userInfo.name }}</h3>
      <p>職稱：{{ userInfo.job }}</p>
      <p>簡介：{{ userInfo.bio }}</p>
    </div>

    <div v-else>
      <p style="color: red;">找不到該使用者的資料！</p>
    </div>

    <router-link to="/">回首頁</router-link>
  </div>
</template>

<style scoped>
.profile-card {
  border: 2px solid #42b883;
  padding: 20px;
  border-radius: 12px;
  max-width: 400px;
  margin: 20px auto;
  font-family: sans-serif;
}
</style>