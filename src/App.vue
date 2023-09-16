<template>
  <div id="app">
    <!-- <button @click="get">获取学生信息</button> -->
    <addAdd/>
    <!-- <treeList/> -->
  </div>
</template>

<script>
import axios from "axios"
import addAdd from '@/components/addAdd.vue';
// import treeList from '@/components/treeList.vue';

export default {
  components: {
    addAdd,
    // treeList
  },
  name: 'App',
  mounted () {
  //  this.get()
  },
  methods: {
    get() {
      // 所处的位置   代理服务器   服务器
      //  8080         8080         5000
      //  发请求的时候联系8080要数据
      //  代理服务器不是把所有的请求都转发给5000
      //  当你请求的 他自己本身就有，就不会转发给8080

      // 前缀紧跟端口号
      // 不能把api带给服务器  /api/students
      // 解决办法在配置里面

      // http://localhost:8080/api/students 控制台中的

      // http://localhost:5000/students  后端的
      axios
      .get('http://localhost:8080/api/students')
      .then(
        response => {
          console.log(response.data)
        },
        error=>{
          console.log(error.data)
        }
       )
    }
  },
}
</script>
<!-- 协议名 主机名 端口号 -->
<!-- 
  http
  localhost
  8080

  跨域问题是请求发了，

  01：cors：不用前端，用后端，在后端在返回信息的时候，在给你相应的时候，给你
  一些特殊的相应头
  (麻烦后端人员)
  02：jsonp，借助了script标签的src属性，引入外部资源的时候，不受同源策略限制的这么一个特点；jsonp用的微乎其微，（前端和后端一起） 只能解决get请求
  开发中用的少，面试用的多
  03：开发中配置代理服务器
      有个中间人，跟前端所处的位置是一样的，代理服务器和你所处的端口号是一样的，始终和你保持一致

      当你想要学生信息的时候，直接去找（代理服务器），代理服务器收到了你本次请求后，反手就把这个请求转发给5000了，5000就把这个数据给了代理服务器，代理服务器接着把这个东西转发给你，你就收到数据了，
      相当于房屋中介；

      代理服务器和5000都是服务器，打交道不要ajax请求  所以不需要操心他们之间传递参数

      借助vue脚手架开启代理服务器


 -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
