<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

document.title = "图灵导航";


</script>

<template>
    <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
    <!-- <component :is="currentView" /> -->
    <RouterView />
</template>
