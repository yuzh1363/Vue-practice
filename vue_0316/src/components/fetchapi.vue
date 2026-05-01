<script setup>
import { onMounted, ref } from 'vue';
import { useUserStore } from '../userStore';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const {users ,isLoading} = storeToRefs(userStore);

onMounted(() => {
    userStore.getUserData();
})
</script>
// const users = ref([]);
// const apiUrl = "https://jsonplaceholder.typicode.com/users"

// const getUsers = async () => {
//     try {
//         const res = await fetch(apiUrl)
//         if (!res.ok) return console.log("請求失敗");

//         const data = await res.json()
//         users.value = data;
//     } catch (err) {
//         console.log(err.message);

//     }
// }




<template>
    <div v-if="isLoading">載入中</div>
    <ul v-else>
        <li v-for="item in users" :key="item.id" class="border w-50 mb-3">
            <RouterLink :to="`/apiuser/${item.id}`">
                <div>
                    <h5>{{ item.name }}</h5>
                    <p>{{ item.email }}</p>
                </div>
            </RouterLink>
        </li>
    </ul>

</template>

<style lang="scss" scoped></style>