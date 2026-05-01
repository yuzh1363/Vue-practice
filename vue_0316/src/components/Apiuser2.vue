<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useUserStore } from '../userStore';
import { storeToRefs } from 'pinia';

// 路由中定義props:true可以直接只用props.id接參數
const props = defineProps(['id']);

// 定義store名稱與別名
const userStore = useUserStore();
const {users ,isLoading} = storeToRefs(userStore);

// 回傳物件id跟網址id一樣的物件資料
const userInfo = computed(()=> {
    if(users.value.length === 0) return null;
    return users.value.find(item => item.id == props.id) || null;
})

// 掛載時判斷store中users是否有資料，沒有就呼叫函數
onMounted(() => {
    if(users.value.length === 0){
        userStore.getUserData()
    }
    
})
</script>

<template>
    <div class="user-detail">
        <h3>使用Pinia管理資料</h3>
        <div v-if="userInfo">
            <h2>使用者詳細資料 (ID: {{ userInfo.id }})</h2>
            <p>姓名：{{ userInfo.name }}</p>
            <p>信箱：{{ userInfo.email }}</p>
            <p>城市：{{ userInfo.address?.city }}</p>
        </div>

        <div v-else>
            <p>📡 正在努力載入資料中，請稍候...</p>
        </div>

        <hr>
        <router-link to="/fetchapi">回列表頁</router-link>
    </div>
</template>

<style lang="scss" scoped></style>