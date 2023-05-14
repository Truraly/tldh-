<script setup lang="ts">
import fireworkButton from '../components/fireworkButton.vue'
import bottomDescription from '../components/bottomDescription.vue'
import leftpart from '../components/leftpart.vue'
import top from '../components/top.vue'
import searchBox from '../components/searchBox.vue'
import websiteList from "../components/websiteList.vue"
import helloTLDH from "../components/helloTLDH.vue"

import Test from "../components/Test.vue"
document.title = "校园地图";
</script>

<template>
    <!-- <Test /> -->
    <!-- <leftpart /> -->

    <top />

    <div class="main" id="main">

        <searchBox />
        <div id="mainFrame" class="mainFrame">
            <!-- 自适应图片 -->

            <img src="../assets/doc/map_1.jpg" alt="" >

            <img src="../assets/doc/map_2.jpeg" alt="">
        </div>

        <bottomDescription />
    </div>
    <fireworkButton />
    <!-- <helloTLDH /> -->
</template>


<style scoped>
@import "../assets/doc.css";
</style>


