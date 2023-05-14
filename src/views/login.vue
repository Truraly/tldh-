<script setup lang="ts">
import fireworkButton from '../components/fireworkButton.vue'
import bottomDescription from '../components/bottomDescription.vue'
import top from '../components/top.vue'
// import searchBox from '../components/searchBox.vue'
import topBar from '../components/topBar.vue'

import helloTLDH from "../components/helloTLDH.vue"

import loginFrom from "../components/common/loginFrom.vue"
import { ref } from 'vue'
const mylog = ref('')

// process.env.VITE_API_URL

</script>

<template>
    <!-- <Test /> -->
    <!-- <leftpart /> -->

    <top />

    <div class="main" id="main">

        <topBar />
        <div id="mainFrame" class="mainFrame">

            <loginFrom />
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

