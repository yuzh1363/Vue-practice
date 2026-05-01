import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
    // 假裝這是從資料庫抓回來的名單
    const allUsers = ref({
        shawn: {
            name: "尚恩助教",
            job: "Vue 專案小幫手",
            bio: "熱愛繁體中文與台灣用語。",
        },
        amber: {
            name: "安柏小姐",
            job: "前端實習生",
            bio: "正在努力學習 Vite 和 Pinia。",
        },
    });

    // 取得單一使用者的 function
    const getUserById = (id) => {
        return allUsers.value[id];
    };

    return { allUsers, getUserById };
});
