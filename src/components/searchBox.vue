<template>
    <div id="searchBox">
        <div class="search">
            <div class="search_blok">
                <input type="text" placeholder="百度搜索,按下enter搜索" id="sea" @keyup.enter="onKeyPress" v-model="msg">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
//输入框enter键搜索
import { ref } from 'vue'

// 搜索框
let msg = ref('')

function onKeyPress(e: any) {
    // console.log(e)
    // msg.value = ""
    let keyCode = null;

    if (e.which)
        keyCode = e.which;
    else if (e.keyCode)
        keyCode = e.keyCode;

    if (keyCode == 13) {
        if (msg.value != '') {
            window.open("https://www.baidu.com/s?wd=" + msg.value);
        }
        return false;
    }
    return true;
}
</script>


<style scoped>
/*------ 搜索框 -----*/


div.search {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(../icon/Base/back_ground_002.jpg) repeat;
    background-size: 100% auto;
    background-repeat: no-repeat;
    /*不要平铺*/
    background-position: left bottom;
    height: 370px;
}

div.search_blok {
    width: 45%;
}

#searchBox input[type=text] {
    /* 圆滑度 */
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 40px;
    border: none;
    color: #ffffff;
    padding-left: 20px;
    transition: 0.5s;
}



/* ------------------------------------------------------------------------ */
@media screen and (max-width: 728px)and (min-width: 555px) {
    div.search {
        height: 300px;
    }
}

@media screen and (max-width: 555px) {
    div.search {
        height: 200px;
    }
}
</style>