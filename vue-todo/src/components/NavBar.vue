<template>
    <div id="nav">
        <div class="link-wrapper">
            <div class="nav-links">
                <router-link class="nav-link" exact to="/">Главная</router-link>
                <router-link class="nav-link" to="/info">Инфо</router-link>
            </div>
            <a @click="onLogoutClicked" class="logout nav-link">
                Выйти
            </a>
        </div>
    </div>
</template>

<script>
import { doLogout } from '@/netClient/dataService';
export default {
    name: 'NavBar',
    methods: {
        async onLogoutClicked() {
            try{
                doLogout();
                this.$router.push('/login');
            }catch (error){
                console.error( { error } )
            }
        }
    },
};

</script>

<style scoped>
#nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgb(7, 22, 7);
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.2);
    margin-bottom: 8px;
    z-index: 9999;
}
.link-wrapper {
    margin: 0 auto;
    height: 100%;
    width: 100%;
    max-width: 700px;
    padding: 12px 24px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
}
.nav-link {
    color: rgb(231, 180, 71);
    margin-left: 16px;
    margin-right: 16px;
    font-size: 24px;
    font-weight: 500;
    text-decoration: none;
    text-shadow: 1px 1px 2px black;
}
.nav-link:hover {
    color: lime;
}
.router-link-active {
    color: rgb(216, 79, 44);
}
</style>