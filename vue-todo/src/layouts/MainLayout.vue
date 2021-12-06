<template>

<div class="main-layout">
    <NavBar/>
    <h2 class="page-title">
        {{$route.meta.title}}
    </h2>
    <div class="page-container">
        <router-view/>
    </div>
</div>

</template>



<script>
import NavBar from '@/components/NavBar'
export default {
    name: 'MainLayout',
    components: {
        NavBar
    }
}
</script>
<style scoped>
.auth-layout {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
</style>