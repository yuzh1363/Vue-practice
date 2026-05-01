<template>
    <header class="shadow-md relative bg-blue-50 w-10/12 rounded-4xl mx-auto mt-3 md:mt-5 ">
        <nav class="flex justify-between items-center px-6 h-14">
            <h1 class="text-xl content-center font-bold"><span class=" text-blue-400">Yuying</span>.Zhang</h1>

            <!-- 電腦版Menu -->
            <div class=" bg-blue-50 hidden md:block content-center">
                <ul class="flex" >
                    <li :class="libtnpc" v-for="item in menuitems">{{ item }}
                    </li>
                </ul>
            </div>

            <button class="h-fit p-1.5 text-2xl hover:shadow-lg rounded-full md:hidden">
                <i v-if="!isMenu" class="fa-solid fa-bars" @click="handleMenu"></i>
                <i v-else class="fa-solid fa-xmark" @click="handleMenu"></i>
            </button>

            <!-- 手機版menu -->
            <div v-show="isMenu" class="absolute md:static bg-blue-50/50 w-full left-0 top-16 rounded-4xl py-2 shadow-md md:shadow-none md:hidden">
                <ul class="flex flex-col items-center md:flex-row h-fit gap-3" >
                    <li :class="libtn" class="" v-for="item in menuitems">{{ item }}
                    </li>
                </ul>
            </div>
        </nav>
    </header>

</template>

<script setup>
import { ref } from 'vue';
const libtn = ref("w-1/2 bg-blue-400 rounded-full text-white content-center px-3 hover:bg-blue-500 font-bold h-10 text-center mx-10")
const libtnpc = ref("w-fit bg-blue-400 rounded-full text-white font-bold px-3 mx-2 h-8 content-center hover:bg-blue-500")

const isMenu = ref(false)

const handleMenu = () => {
    isMenu.value = !isMenu.value
}

const menuitems = ref(["個人介紹", "技能專長", "作品集", "工作經歷"])
</script>

<style lang="scss" scoped></style>