<template>
    <div id="fireworkButton">
        <a v-if="seen" id="firework" href="javascript: window.scrollTo(0,0);">
            <img src="../../public/icon/mc/Firework_Rocket_JE2_BE2.webp" alt="">
        </a>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const seen = ref(true)
// 当用户将页面下移时出现
onMounted(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            seen.value = true
        } else {
            seen.value = false
        }
    })
})
</script>



<style scoped>
a {
    position: fixed;
    bottom: 17%;
    right: 10%;
    display: none;
}

img {
    width: 50px;
    height: 50px;
}

@media screen and (max-width:550px) {
    a {
        display: block;
    }
}
</style>