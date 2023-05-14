<script setup lang="ts">
import fireworkButton from '../components/fireworkButton.vue'
import bottomDescription from '../components/bottomDescription.vue'
import leftpart from '../components/leftpart.vue'
import top from '../components/top.vue'
import searchBox from '../components/searchBox.vue'
import websiteList from "../components/websiteList.vue"
import helloTLDH from "../components/helloTLDH.vue"

import Test from "../components/Test.vue"
document.title = "404 Not Found";
</script>

<template>
    <!-- <Test /> -->
    <!-- <leftpart /> -->

    <top />

    <div class="main" id="main">

        <searchBox />
        <div id="mainFrame" class="mainFrame">

            <h1>你来到的网站的尽头</h1>
            <h2>这里什么也没有</h2>
            <img src="../../public/icon/Base/404.png" alt="图片加载失败">
            <!-- <websiteList /> -->
        </div>

        <bottomDescription />
    </div>
    <fireworkButton />
    <!-- <helloTLDH /> -->
</template>


<style scoped>
@import "../assets/doc.css";
</style>


