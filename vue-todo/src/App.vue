<template>
  <div id="app">
    <div class="page-content">
      <component :is="layout">
        <router-view/>
      </component>
    <!-- <HelloWorld msg="Информация обо мне"/> -->
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainLayout from '@/layouts/MainLayout';
import AuthLayout from '@/layouts/AuthLayout';

export default {
  name: 'App',
  components: {
    // HelloWorld
    MainLayout, AuthLayout
  },
  computed: {
    layout() {
      return this.$route.meta?.layout || 'main-layout'
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
