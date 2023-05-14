<template></template>

<script setup lang="ts">

fetch(process.env.VITE_API_URL + `api/getVisitNum?timeVer=${getDateStr()}`)
    .then(response => response.json())
    .then(response => {
        if (response.state == 0) {
            console.log(`%c
 _____________    ____          ___________     ____    ____
|\\____    ____\\  |\\   \\        |\\    ____  \\   |\\   \\__|\\   \\
\\|___|\\   \\___|  \\ \\   \\       \\ \\   \\   \\  \\  \\ \\    ___    \\
     \\ \\   \\      \\ \\   \\_____  \\ \\   \\__/  /|  \\ \\   \\__|\\   \\
      \\ \\___\\      \\ \\________\\  \\ \\_______/ |   \\ \\___\\ \\ \\___\\
       \\|___|       \\|________|   \\|_______|/     \\|___|  \\|___|

图灵导航今日访问次数: ${response.data}
`, 'color:#02aeeb')
        }
    })
    .catch(err => { console.log(err) })
function getDateStr() {
    let date = new Date()
    return `${date.getHours()}${date.getMinutes()}`
}
</script>