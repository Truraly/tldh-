<template>
    <h1>Kick the picture if you Love hzy</h1>
    <br>
    <!--in fact I love shizhan-->
    <div>
        <img src="./hzy.jpg" alt="图片显示失败" wide="500" height="500" @click="DoSong()"><br>
        <p id="pp">0</p>
    </div>

    <audio id="114514">
        <source src="./114514.mp3" type="audio/mpeg">
    </audio>
</template>


<script setup lang="ts">

// 点击怎加次数
let num: number = 0;
function DoSong() {
    num = num + 1;
    if (num >= 10) {
        var x: any = document.getElementById("114514");
        x.play();
    }
    if (document.getElementById("pp") != null) {
        document.getElementById("pp")!.innerHTML = num.toString();
    }

}
// 爱心
(function (window, document, undefined) {
    var hearts: any = [];
    window.requestAnimationFrame = (function () {
        return window.requestAnimationFrame ||
            window.requestAnimationFrame ||
            window.requestAnimationFrame ||
            window.requestAnimationFrame ||
            window.requestAnimationFrame ||
            function (callback) {
                setTimeout(callback, 1000 / 60);
            }
    })();
    init();
    function init() {
        css(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}");
        attachEvent();
        gameloop();
    }
    function gameloop() {
        for (var i = 0; i < hearts.length; i++) {
            if (hearts[i].alpha <= 0) {
                document.body.removeChild(hearts[i].el);
                hearts.splice(i, 1);
                continue;
            }
            hearts[i].y--;
            hearts[i].scale += 0.004;
            hearts[i].alpha -= 0.013;
            hearts[i].el.style.cssText = "left:" + hearts[i].x + "px;top:" + hearts[i].y + "px;opacity:" + hearts[i].alpha + ";transform:scale(" + hearts[i].scale + "," + hearts[i].scale + ") rotate(45deg);background:" + hearts[i].color;
        }
        requestAnimationFrame(gameloop);
    }
    function attachEvent() {
        var old = typeof window.onclick === "function" && window.onclick;
        window.onclick = function (event) {
            old // && old();
            createHeart(event);
        }
    }
    function createHeart(event: any) {
        var d = document.createElement("div");
        d.className = "heart";
        hearts.push({
            el: d,
            x: event.clientX - 5,
            y: event.clientY - 5,
            scale: 1,
            alpha: 1,
            color: randomColor()
        });
        document.body.appendChild(d);
    }
    function css(css: any) {
        var style = document.createElement("style");
        style.type = "text/css";
        try {
            style.appendChild(document.createTextNode(css));
        } catch (ex) {
            // style.styleSheet.cssText = css;
        }
        document.getElementsByTagName('head')[0].appendChild(style);
    }
    function randomColor() {
        return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";
    }
})(window, document);

</script>

<style scoped>
h1 {
    text-align: center;
}

img {
    display: block;
    margin: auto;
}

p {
    text-align: center;
}
</style>