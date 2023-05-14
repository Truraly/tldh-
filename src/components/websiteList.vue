<template>
    <div v-for="item in checkedWebsites" class="cli">
        <div class="category_title">
            <img :src="`${serverUrl}${item.pic}`">
            <a :id="`${item.Category}`">
                <h3>{{ item.Category }}</h3>
            </a>
        </div>
        <div :class="`${item.useif ? 'webBlock' : 'np'}`">
            <div v-for="ite in item.list" class="website">
                <a :href="`${ite.url}`" target="_blank">
                    <img :src="`${ite.pic}`">
                    <div class="webName">
                        <strong>{{ ite.name }}</strong>
                        <p>{{ ite.introduce }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">

import { computed } from '@vue/reactivity';
import { ref, onMounted } from 'vue'
const serverUrl = process.env.VITE_API_URL
const allWebsites = ref([])
const checkedWebsites = computed(() => {
    let items: any = allWebsites.value
    // 遍历数组,若useif为false则删除该元素
    for (let i = 0; i < items.length; i++) {
        if (items[i].useif == false) {
            items.splice(i, 1)
            i--
        } else {
            // 遍历数组，若list中的useif为false则删除该元素
            for (let j = 0; j < items[i].list.length; j++) {
                if (items[i].list[j].useif == false) {
                    items[i].list.splice(j, 1)
                    j--
                }
            }
        }
    }
    return items
})

fetch(process.env.VITE_API_URL + "api/getWebList")
    .then(response => response.json())
    .then(json => {

        allWebsites.value = json
    })
    .catch(err => { console.log(err) })

</script>


<style scoped>
/* 用于不渲染 */
.np {
    display: none;
}


/*------ 所有网站 -----*/
div.mainFrame {
    padding: 25px;

}

/* 类别 */
div.category_title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    margin-bottom: 10px;
}

div.category_title h3 {
    color: #000000;
}

div.category_title img {
    width: 35px;
    height: 35px;
    margin-right: 10px;
}

/* 框 */
div.webBlock {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
}



div.website {
    width: 16.5%;
}

/* 动态调整每一行网站个数 */
@media screen and (max-width:1800px) and (min-width:1460px) {
    div.website {
        width: 20%;
    }
}

@media screen and (max-width: 1460px) and (min-width:1100px) {
    div.website {
        width: 25%;
    }
}

@media screen and (max-width: 1100px) and (min-width:613px) {
    div.website {
        width: 33%;
    }
}

@media screen and (max-width: 613px) and (min-width:395px) {
    div.website {
        width: 50%;
    }
}

@media screen and (max-width: 395px) {
    div.website {
        width: 100%;
    }
}


div.website a {
    border-color: #acacac;
    border-style: solid;
    border-width: 2px;
    margin: 10px 15px 25px 15px;
    /* max-width: 250px; */
    /* width: 200px; */
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
}


div.website img {
    margin-left: 10px;
    width: 30px;
    height: 30px;
}

div.webName {
    margin-left: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
}

div.webName p {
    color: #6c757d;
}






/* ------------------------------------------------------------------------ */

@media screen and (max-width: 728px) {
    div.webName p {
        color: #6c757d;
        display: none;
    }

    div.website a {
        margin: 5px 5px 10px 5px;
        /* width: 170px; */
        height: 45px;
    }

    div.website img {
        margin-left: 5px;
        width: 25px;
        height: 25px;
    }

    div.webName {
        margin-left: 5px;
    }

    div.mainFrame {
        padding: 10px;
    }
}
</style>