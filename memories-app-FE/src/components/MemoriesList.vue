<script setup>
import MemoryItem from './MemoryItem.vue';

    defineProps(["allMemories"])
</script>

<template>
    <div v-for="memory in allMemories">
        <MemoryItem :memory="memory" />
    </div>
</template>

<style scoped> 
    div {
        margin: 10px 20px;
    }
</style>