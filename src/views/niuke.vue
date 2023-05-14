<script setup lang="ts">
import fireworkButton from '../components/fireworkButton.vue'
import bottomDescription from '../components/bottomDescription.vue'
import top from '../components/top.vue'
import searchBox from '../components/searchBox.vue'
import helloTLDH from "../components/helloTLDH.vue"
document.title = "牛客排行榜";

import { ref } from "vue"
const phb = ref("")
import serverUrl from '../config.js'
fetch(serverUrl + "api/acNowcoder/getList?format=html")
    .then(response => response.json())
    .then(data => {
        phb.value = data.data.list + `<a href="https://docs.qq.com/form/page/DYWtwSUJoa1dUd2la"><p>加入链接</p></a>`
    })
    .catch(err => console.error(err))
</script>

<template>
    <!-- <Test /> -->
    <!-- <leftpart /> -->

    <top />

    <div class="main" id="main">

        <searchBox />
        <div id="mainFrame" class="mainFrame" v-html="phb">

        </div>

        <bottomDescription />
    </div>
    <fireworkButton />
    <!-- <helloTLDH /> -->
</template>


<style scoped>
div.mainFrame {
    padding: 25px;
}

/* 默认无左侧栏的样式表 */
#main {
    margin-left: 0px;
}
</style>


