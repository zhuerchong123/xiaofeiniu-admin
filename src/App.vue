<template>
  <div id="app">
    <!-- <h6> {{$store.state.globalSettings}}</h6> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted(){
    //当前组件挂载完成后需要异步请求全局配置数据
    var url = this.$store.state.globalSettings.apiUrl+'/admin/settings';
    this.$axios.get(url).then((res)=>{
      //将全局设置存入Vuex仓库中
      this.$store.commit('setGlobalSetttings',res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
}
</script>


<style lang="scss">
  #app{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    color: #303133;
  }
</style>
