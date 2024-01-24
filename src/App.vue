<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/HeaderView.vue'
import Footer from '@/components/FooterView.vue'
</script>
<template>
  <Header />
    <router-view></router-view>
  <Footer /> 
</template>
