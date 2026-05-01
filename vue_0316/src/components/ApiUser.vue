<script setup>
import { ref, onMounted, watch } from 'vue';

const userinfo = ref({})

// 路由中定義props:true可以直接只用props.id接參數
// 沒有定義props要使用route.parms.id傳參數
const props = defineProps(['id']);

// 抓資料
const getUserData = async () => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${props.id}`)
        if (!res.ok) return console.log("錯誤");

        const data = await res.json()
        userinfo.value = data;

    } catch (err) {
        console.log(err);
    }
}

// 路由變化組件會被復用，需要 watch route上任意屬性參數，對路由變化做出響應(直接fetch時使用)
watch(() => props.id, (newid) => {
    if (newid) {
        getUserData()
    }
})

// 網頁掛載時呼叫函數
onMounted(() => {
    getUserData()
})
</script>

<template>
    <div class="user-detail">
        <h3>使用fetch抓資料顯示</h3>
        <div v-if="userinfo.id">
            <h2>使用者詳細資料 (ID: {{ userinfo.id }})</h2>
            <p>姓名：{{ userinfo.name }}</p>
            <p>信箱：{{ userinfo.email }}</p>
            <p>城市：{{ userinfo.address?.city }}</p>
        </div>

        <div v-else>
            <p>📡 正在努力載入資料中，請稍候...</p>
        </div>

        <hr>
        <router-link to="/fetchapi">回列表頁</router-link>
    </div>
</template>

<style lang="scss" scoped></style>