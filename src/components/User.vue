<template>
    <div>
        <h1>User</h1>
        <p>welcome user : {{dynamicSegment}}</p>
    </div>
</template>

//动态路由，根据不同的ip，即不同的用户，导航到不同的页面
<<script>
export default {
   computed :{
       dynamicSegment(){
           return this.$route.params.id
       }
   }
}
</script>

