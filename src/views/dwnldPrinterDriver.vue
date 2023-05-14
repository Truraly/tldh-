<script setup lang="ts">
import fireworkButton from '../components/fireworkButton.vue'
import bottomDescription from '../components/bottomDescription.vue'
import leftpart from '../components/leftpart.vue'
import top from '../components/top.vue'
import searchBox from '../components/searchBox.vue'
import websiteList from "../components/websiteList.vue"
import helloTLDH from "../components/helloTLDH.vue"

import Test from "../components/Test.vue"

// 设置页面标题
document.title = "实验室打印机驱动驱动下载";
</script>


<template>



<top />

<div class="main" id="main">

    <searchBox />
    <div id="mainFrame" class="mainFrame">
        <br />
    <div class="dld">
        <a href="./doc/lenovo lj2200 series.iso" download="lenovo lj2200 series.iso">
            <p><strong>点击下载lenovo lj2200 series.iso打印机驱动压缩包</strong></p>
        </a>
    </div>
    <div class="desc">
        <ol>
            <li>
                <p>下载lenovo lj2200 series.iso压缩包文件。</p>
            </li>
            <li>
                <p>下载后解压。</p>
            </li>
            <li>
                <p>点击start.exe，安装lj2200的驱动。</p>
            </li>
            <li>
                <p>安装的时候，如果选择自定义安装，那么可以更改安装的路径。最后的话那个什么资源监视器的按需安装即可。</p>
            </li>
            <li>
                <p>安装完成后（iso文件此时可以删除了），打开Windows设置-->设备-->打印机和扫描仪-->添加打印机或扫描仪。<br />由于lj2200设备过老，肯定是搜索不到的。接着就会出现“我需要的打印机不在列表中”，点击。
                </p>
            </li>
            <li>
                <p>在出来的界面后选择最后一个“通过手动设置添加本地打印机或网络打印机”。</p>
            </li>
            <li>
                <p>接着在下一个界面中选择“使用现有的端口”，然后端口选择最后一个“USB001(USB 虚拟打印机端口)”。</p>
            </li>
            <li>
                <p>然后在下一个界面中在“厂商中选择Lenovo”，然后右边相应的选择“Lenovo LJ2200”。</p>
            </li>
            <li>
                <p>然后在下一个界面中选择”使用当前已安装的驱动程序“。</p>
            </li>
            <li>
                <p>后面按照其要求完成操作即可。</p>
            </li>
        </ol>
        <br />
        <p>(本安装教程来源于计协实验室19级学长陈镜宇)</p>
    </div>
    </div>

    <bottomDescription />
</div>
<fireworkButton />

</template>
<style>
/* 使用css */
@import "../assets/doc.css";
</style>