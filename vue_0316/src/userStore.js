import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
    // 等於state
    const users = ref([]);
    const isLoading = ref(false);

    // 等於action
    const getUserData = async () => {
        isLoading.value = true;
        try {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/users`,
            );
            if (!res.ok) return console.log("錯誤");
            const data = await res.json();
            users.value = data;
        } catch (err) {
            console.log(err);
        } finally {
            isLoading.value = false;
        }
    };

    // 最後要把需要使用的屬性跟方法return 出去
    return {users, isLoading,getUserData};
});
