<template>
    <div>
        <h1>Home</h1>
        <p>{{msg}}</p>
        <p>
            <!--嵌套路由，在Home路由下面的子路由，通过children定义-->
            <router-link to="/home/phone">手机</router-link>
            <router-link to="/home/tablet">平板</router-link>
            <router-link to="/home/computer">电脑</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>


<script>
export default {
    data() {
        return {
            msg: "我是Home组件"
        }
    }
}
</script>

