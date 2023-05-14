<template>
    <div id="searchBox">
        <div class="search">
            <div class="search_blok">
                
            </div>
        </div>
    </div>
</template>


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
    background-position: center;
    height: 100px;
}

div.search_blok {
    width: 45%;
}



/* ------------------------------------------------------------------------ */
/* @media screen and (max-width: 728px)and (min-width: 555px) {
    div.search {
        height: 300px;
    }
}

@media screen and (max-width: 555px) {
    div.search {
        height: 200px;
    }
} */
</style>