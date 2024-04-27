<script setup>
    defineProps(["memory"])
</script>

<template>
    <article class="memory-card">
        <div class="img-section">
            <img :src="memory.image" alt="image">
            <div class="title">
            <p class="name" >{{ memory.name }}</p>
            <p class="date">10/02/2023</p>
            </div>
        </div>
        <div class="tags-container">
            <template v-for="tag in memory.tags">
            <p class="tag">#{{ tag }}</p>
        </template>
        </div>
        <div class="memory-content">
            <h3>{{ memory.title }}</h3>
            <p>{{ memory.message }}</p>
        </div>
        <div class="likes">
            <i class="fa fa-thumbs-up" aria-hidden="true"></i> {{ memory.likes }}
        </div>
    </article>
</template>

<style scoped>
.memory-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 15px;
    height: 100%;
    position: relative;
    width: 18rem;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    background-color: #fff;
}
.title{
    position: absolute;
		top: 20px;
		left: 20px;
		color: white;
}
img {
    filter: brightness(75%);
    height: 100%;
    width: 100%;
    border-radius: 15px 15px 0 0;
}
.img-section {
    height: 200px;
    width: 100%;
}
.name{
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
}
.date {
    font-size: 10px;
    letter-spacing: 2px;
}
.tags-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
    padding: 5px 10px;
}
.tag {
    margin-right: 5px;
    font-size: 12px;
}
.memory-content{
    padding: 5px 10px;
}
.likes {
    padding: 10px;
    color: #4a4aff ;
}
.memory-content p {
    font-size: 13px;
}
.memory-content h3 {
    font-weight: bold;
}
</style>