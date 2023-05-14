<template>
    <div class="top" :id="`${topIdName}`">
        <div class="lli" id="导航首页">
            <a href="./"><img src='../../public/icon/mc/znz.png'>
                <p>导航首页</p>
            </a>
        </div>
        <div class="lli" id="摸鱼日志">
            <a href="/moyu"><img src='../../public/icon/mc/Cooked_Cod_JE4_BE3.webp'>
                <p>摸鱼日志</p>
            </a>
        </div>
        <div class="lli" id="TOP">
            <a href="javascript: window.scrollTo(0,0);"><img src='../../public/icon/mc/Red_Bed_JE4_BE3.webp'>
                <p>TOP</p>
            </a>
        </div>
        <div class="lli" id="">
            <a href="./zdk"><img src='../../public/icon/mc/Clock_JE3_BE3.webp'>
                <p><small>{{ dk }}</small></p>
            </a>
        </div>
        <!-- <div v-for="item in list" class="lli" :id="`${item.title}`">
            <a :href="`${item.url}`"><img :src="`${item.img}`">
                <p v-html="item.title"></p>
            </a>
        </div> -->
    </div>
</template>

<script setup lang="ts">
// 加载顶部栏目
import { ref, onMounted } from 'vue'
// import process from 'process'
const dk = ref("正在获取打卡数据")

fetch(process.env.VITE_API_URL + "api/zdk/note")
    .then(response => response.json())
    .then(data => {
        dk.value = `${(data.note == "" ? '今天正常打卡？' : data.note.replace(/，.+/, '').replace(/今天\(/, '').replace(/\)/, '-'))}`
    })
    .catch(err => {
        console.log(err)
        dk.value = "获取数据出错"
    })

// 下拉时切换样式
const topIdName = ref("top")
onMounted(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            topIdName.value = "top_white"
        } else {
            topIdName.value = "top"
        }
    })
})
</script>


<style scoped>
/* --------------顶部------------ */
div.top {
    display: -webkit-flex;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    position: fixed;
    height: 65px;
    transition: background-color 0.3s;
    width: 100%;
}

#top {
    background-color: rgba(255, 255, 255, 0);
}

#top_white {
    background-color: rgba(255, 255, 255, 1);
}

#top .lli,
#top_white .lli {
    height: 100%;
}

#top_white a,
#top a {
    transition: color 0.3s;
    display: -webkit-flex;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;

    height: 100%;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
}

#top_white p,
#top p {
    margin-left: 10px;
    font-size: 1.2em;
    font-weight: 900;
}

#top_white img,
#top img {
    width: 30px;
    height: 30px;
}


#top_white a:link,
#top_white a:visited {
    color: #000000;
}

/* 已访问链接 */
/* 未访问链接*/
#top a:link,
#top a:visited {
    color: #ffffff;
}


/* 鼠标点击时,
鼠标移动到链接上  */
#top_white a:active,
#top a:active,
#top_white a:hover,
#top a:hover {
    color: #1ecd97;
}

@media screen and (min-width: 870px) {

    #top,
    #top_white {
        margin-left: 220px;
    }
}

@media screen and (max-width: 870px) and (min-width:728px) {

    #top,
    #top_white {
        margin-left: 50px;
    }
}

@media screen and (max-width: 728px) {

    #top,
    #top_white {
        margin-left: 0px;
    }
}


@media screen and (max-width:550px) {
    #top {
        display: none;
    }

    #top img,
    #top_white img {
        width: 25px;
        height: 25px;
    }

    #top_white,
    #top {
        padding-left: 5px;
        padding-right: 5px;
        height: 55px;
    }

    #top_white p,
    #top p {
        margin-left: 5px;
    }

    #top {
        padding-left: 0px;
        padding-right: 0px;
    }
}
</style>