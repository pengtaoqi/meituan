<template>
  <div id="app">
      <mylist></mylist>
     <router-view></router-view>
  </div>
</template>
<script>
import store from './store'
import axios from 'axios'
import mylist from './components/mylist/mylist'
export default {
  name: 'app',
  created () {
      axios.get('static/data.json').then((res)=>{
      store.dispatch('setAll',res.data);
       store.commit('setAllFood',res.data.food);
      
    })
  },
  components:{
    mylist
  }
}
</script>
<style>
 @import "/static/font-icon/style.css"
</style>
<style lang="stylus" rel="stylesheet/stylus">
body,html
  margin:0
  padding:0
  box-sizing:border-box
  user-select:none
  -webkit-tap-highlight-color: transparent
a
  text-decoration none
  color #000
#app
  font-family: "微软雅黑",'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
</style>