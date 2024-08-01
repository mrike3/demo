<script setup>
import {onBeforeMount, ref} from 'vue'
import $ from 'jquery'
import $http from '../../public/js/axiosapi.js'

const houselist=ref(null)
const flag=ref(false)
const indexa=ref(0)
const urlList=ref([
    '/demo/img/1.png',
    '/demo/img/2.png',
    '/demo/img/3.jpg'
])
function showImg(e){
  var indexaa=$(e.target).attr('src')
  indexa.value=urlList.value.indexOf(indexaa)
  flag.value=true
}
onBeforeMount(()=>{
  // $http.post('/HouseList').then(res=>{
  //   houselist.value=res.data
  // })
})

</script>

<template>
<!--  <el-table :data="houselist">-->
<!--    <el-table-column type="selection"></el-table-column>-->
<!--    <el-table-column sortable prop="id" label="id"></el-table-column>-->
<!--    <el-table-column prop="location" label="区域"></el-table-column>-->
<!--    <el-table-column sortable prop="area" label="面积"></el-table-column>-->
<!--    <el-table-column prop="address" label="地址"></el-table-column>-->
<!--    <el-table-column prop="type" label="户型"></el-table-column>-->
<!--    <el-table-column prop="mobile" label="电话"></el-table-column>-->
<!--    <el-table-column prop="registerTime" label="时间"></el-table-column>-->
<!--  </el-table>-->

<!--  图片查看-->
  <el-row justify="center" align="middle" style="height: 100vh">
    <el-space>
      <el-avatar
          src="/demo/img/1.png"
          shape="square"
          size="large"
          @click="showImg"
      >
      </el-avatar>
      <el-avatar
          src="/demo/img/2.png"
          shape="square"
          size="large"
          @click="showImg"
      >
      </el-avatar>
      <el-avatar
          src="/demo/img/3.jpg"
          shape="square"
          size="large"
          @click="showImg"
      >
      </el-avatar>
      <el-image-viewer v-if="flag" :url-list="urlList" @close="flag=false" :initial-index="indexa"></el-image-viewer>
    </el-space>
  </el-row>
</template>

<style scoped>

</style>