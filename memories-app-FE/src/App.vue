<script setup>
import { onMounted, ref } from 'vue';
import MemoriesList from './components/MemoriesList.vue';
import HeaderSection from './components/HeaderSection.vue'

const allMemoriesData = ref([]);

onMounted(() => {
  fetch('http://localhost:3000/api')
    .then(response => response.json())
    .then(res => allMemoriesData.value = res)
})
</script>

<template>
  <HeaderSection />
  <main>
    <div v-if="!(allMemoriesData && allMemoriesData.length > 0)">
      <h1>Memories loading ...!</h1>
    </div>
    <div v-if="(allMemoriesData && allMemoriesData.length > 0)" class="memory-list-container">
      <MemoriesList :allMemories="allMemoriesData" />
    </div>
  </main>
</template>

<style scoped>
.memory-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
h1{
  text-align: center;
}
</style>
