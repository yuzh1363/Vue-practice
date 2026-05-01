<template>
    <div class="d-flex mb-3">
        <p class="me-5">{{ task.text }}</p>
        <button   button class="btn btn-primary " @click="delbtn">完成</button>
    </div>
</template>

<script setup>
const props = defineProps(['task'])
const emit = defineEmits(['removetask'])

function delbtn(){
    emit('removetask',props.task.id)
}
</script>