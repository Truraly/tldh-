<script setup lang="ts">
import fireworkButton from '../components/fireworkButton.vue'
import bottomDescription from '../components/bottomDescription.vue'
import leftpart from '../components/leftpart.vue'
import top from '../components/top.vue'
import searchBox from '../components/searchBox.vue'
import websiteList from "../components/websiteList.vue"
import helloTLDH    from "../components/helloTLDH.vue"

import Test from "../components/Test.vue"
</script>

<template>
    <!-- <Test /> -->
    <leftpart />

        <top />
  
    <div class="main" id="main">

        <searchBox />
        <div id="mainFrame" class="mainFrame">
            <websiteList />
        </div>

        <bottomDescription />
    </div>
    <fireworkButton />
    <helloTLDH />
</template>


<style scoped>
div.mainFrame {
    padding: 25px;
}


/* 默认无左侧栏的样式表 */
div.main {
    margin-left: 0px;
}

/* ------------------------------------------- */
/* 右侧主体的样式 */
/* ---------------------------------------------------------------------------------------- */
@media screen and (min-width: 870px) {
    div.main {
        margin-left: 220px;
    }
}

/* -------------------------------------------------------------------------------------- */
@media screen and (max-width: 870px) and (min-width:728px) {
    div.main {
        margin-left: 50px;
    }
}

/* ------------------------------------------------------------------------ */
@media screen and (max-width: 728px) {
    div.main {
        margin-left: 0px;
    }
}
</style>


