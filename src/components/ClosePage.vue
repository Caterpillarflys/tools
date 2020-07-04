<template>
  <div> 
    <div>原理：通过事件监听器监听窗口卸载前卸载后事件，卸载后时间戳 - 卸载前时间戳 &lt;= 1 时为窗口关闭</div>
    <div style="text-align:center;margin-top:300px;font-size:30px">{{b}}</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      b:''
    }
  },
 mounted() {
    //beforeunload 窗口卸载前事件
    //unload 窗口卸载事件
      window.addEventListener('beforeunload', e => this.beforeunloadHandler(e))
      window.addEventListener('unload', e => this.unloadHandler(e))
  },
  destroyed() {
    window.removeEventListener('beforeunload', e => this.beforeunloadHandler(e))
    window.removeEventListener('unload', e => this.unloadHandler(e))
  },
  methods: {
      beforeunloadHandler(){
        this._beforeUnload_time=new Date().getTime();
      },
      unloadHandler(e){
        this._gap_time=new Date().getTime()-this._beforeUnload_time;
        //判断是窗口关闭还是刷新
        if(this._gap_time <= 1){
          //关闭todo
          console.log(1111,e)
          localStorage.setItem("a",999)
        }else{
          //刷新todo
          console.log(2222,e)
          localStorage.setItem("a",888)
        }
      },
  },
  created(){
    this.b =  localStorage.getItem("a") || 444
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}