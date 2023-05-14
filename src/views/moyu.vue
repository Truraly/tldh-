<script setup lang="ts">
import fireworkButton from '../components/fireworkButton.vue'
import bottomDescription from '../components/bottomDescription.vue'
import leftpart from '../components/leftpart.vue'
import top from '../components/top.vue'
import searchBox from '../components/searchBox.vue'
import websiteList from "../components/websiteList.vue"
import helloTLDH from "../components/helloTLDH.vue"

import Test from "../components/Test.vue"
import { ref } from 'vue'
const mylog = ref('')
fetch(process.env.VITE_API_URL + "api/moyu")
    .then(response => response.text())
    .then(data => {
        mylog.value = data
    })

    .catch(err => console.error(err))
    document.title = "摸鱼日志";
</script>

<template>
    <!-- <Test /> -->
    <!-- <leftpart /> -->

    <top />

    <div class="main" id="main">

        <searchBox />
        <div id="mainFrame" class="mainFrame" v-html="mylog">

        </div>

        <bottomDescription />
    </div>
    <fireworkButton />
    <!-- <helloTLDH /> -->
</template>


<style scoped>
@import "../assets/doc.css";
</style>

