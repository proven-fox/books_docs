<script setup>
import DefaultTheme from 'vitepress/theme'
import Hero from './Hero.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <Hero />
    </template>
  </Layout>
</template>
