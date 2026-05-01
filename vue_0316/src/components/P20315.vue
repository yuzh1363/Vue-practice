<template>
    <div class="container d-flex">
        <input type="checkbox" v-model="itemList.done">
        <p :class="{'completed' : itemList.done}">{{ itemList.text }}</p>
        <button @click="delBtn">刪除</button>
    </div>

</template>

<script setup>

const props = defineProps(['itemList', 'idx'])
const emit = defineEmits(['del-item'])

function delBtn() {
    emit('del-item', props.idx)
}
</script>

<style scoped>
/* 這是幫你準備好的 CSS，讓完成的項目有刪節線 */
.completed {
    text-decoration: line-through;
    color: gray;
}
</style>