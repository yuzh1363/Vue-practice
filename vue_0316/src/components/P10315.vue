<template>
    <h1>031501練習</h1>
    <button @click="plusBtn">父組件+1</button>
</template>

<script setup>
const emit = defineEmits(['add-count'])

function plusBtn(){
    emit('add-count')
}

</script>

<style scoped>
h1{
    color: black;
}
</style>