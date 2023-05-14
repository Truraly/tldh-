<template>
    <div class="emm">
        <div class="emmm">
            <h1>早打卡查询</h1>
        </div>
        <div class="emmm">
            <h3><strong>8</strong>位校园卡号: </h3>
            <input style="height:30px;" type="text" id="user" v-model="user">
            <br>
        </div>
        <div class="emmm">
            <h3>身份证后<strong>4</strong>位: </h3>
            <input style="height:30px;" type="password" id="pwd" v-model="pwd">
            <br>
        </div>
        <div class="emmm">
            <button style="width: 150px;height:30px;" @click="que()">查询</button>
        </div>
    </div>
</template>

<script setup lang="ts">
// 修改网页标题
document.title = "早打卡查询";


import { ref, onMounted } from 'vue'
const user = ref('')
const pwd = ref('')
function que() {
    // var user = (<HTMLElement>document.getElementById("user")).
    // var pwd = (<HTMLElement>document.getElementById("pwd")).innerHTML

    // console.log(user.value, pwd.value)
    // 使用fetch发送post
    fetch(process.env.VITE_API_URL + "api/zdk", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "card": user.value,
            "mm": pwd.value
        })
    }).then(function (response) {
        return response.json();
    }).then(function (result) {

        console.log(result);
        if (result.state == 0) {
            alert(`用户：${result.card}\n时间：${result.time}\n你已打卡：${result.data.count} 次`)
        }
        else {
            alert(`查询失败：${result.msg}`)
        }
        // alert(result);

    }).catch(function (e) {
        console.log("Oops, error");
    });
}
// 当文件加载完成时
// onMounted(() => {
//     fetch(process.env.VITE_API_URL + "api/zdk", {
//         method: "POST",
//     }).then(function (response) {
//         return response.json();
//     }).then(function (result) {
//         console.log(result);
//         if (result.state == 0) {
//             alert(`用户：${result.card}\n时间：${result.time}\n你已打卡：${result.data.count} 次`)
//         }
//     }).catch(function (e) {
//         console.log("Oops, error");
//     });
// })
</script>

<style scoped>
.emm {
    width: 100%;
    margin: auto;
    padding: auto;
    text-align: center;
}

.emmm {
    margin-top: 20px;


}

strong {

    color: rgb(223, 0, 0)
}
</style>