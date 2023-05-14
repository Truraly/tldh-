<template>
    <div id="leftpart" class="leftpart">
        <div id="logo"></div>
        <div class="left_category_list" id="left_category_list">
            <!-- 加载列表中的元素 -->
            <div v-for="item in items" class="category">
                <a :href="`#${item.Category}`"><img :src="`${item.pic.replace(/^picture/, 'icon')}`">
                    <p>{{ item.Category }}</p>
                </a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

// console.log(process.env.VITE_API_URL)
fetch(process.env.VITE_API_URL + "api/getWebList")
    .then(response => response.json())
    .then(json => {
        items.value = json
    })
    .catch(err => { console.log(err) })
const items: any = ref([])

</script>

<style scoped>
/*----------- 左侧固定栏------------ */
#leftpart {
    background-color: #f9f9f9;
    position: fixed;
    height: 100%;
    top: 0px;
}


/* logo */
#logo {
    width: 100%;
    background-color: #ffffff;
    float: left;
    height: 65px;
    display: block;
    /* 背景属性 */
    background-size: 80% 100%;
    /*不要平铺*/
    background-repeat: no-repeat;
    background-position: center center;
}


/* ---- 类别列表 ----*/
div.left_category_list {
    margin-top: 65px;
    /* 弹性盒子 */
    display: -webkit-flex;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
}

div.category {
    width: 100%;
    margin-top: 25px;
    padding-left: 20px;
    /* 弹性盒子 */
    display: -webkit-flex;
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
}

div.category a {
    font-weight: 900;
    /* 弹性盒子 */
    display: -webkit-flex;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
}

div.category img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}





/* ---------------------------------------------------------------------------------------- */
@media screen and (min-width: 870px) {

    div.leftpart {
        width: 220px;
    }

    #logo {
        background-image: url(../icon/Base/tldh_bl.png);
        background-size: 80% 100%;
        background-repeat: no-repeat;
        /*不要平铺*/
        background-position: center center;
    }
}

/* -------------------------------------------------------------------------------------- */
@media screen and (max-width: 870px) and (min-width:728px) {
    div.leftpart {
        width: 50px;
    }

    div.category p {
        display: none;
    }

    div.category {
        padding-left: 10px;
    }

    #logo {
        background-image: url();
        background-size: 70% 60%;
        background-repeat: no-repeat;
        /*不要平铺*/
        background-position: center center;
    }

}


/* ------------------------------------------------------------------------ */

@media screen and (max-width: 728px) {
    div.leftpart {
        display: none;
    }
}
</style>