<script setup>
import {ref} from "vue";

const urlList=ref([
  '/demo/img/1.png',
  '/demo/img/2.png',
  '/demo/img/3.jpg',
  '/demo/img/4.jpg',
  '/demo/img/5.png',
  '/demo/img/6.png',
  '/demo/img/7.png',
])
</script>

<template>
  <el-row>
    <el-col :span="24" style="text-align: center" v-for="(item,i) in urlList" :key="i">
      <el-image style="width: 200px;height: 200px"
                :src="item"
                fit="cover"
                :preview-src-list="urlList"
                :initial-index="i"
                lazy
      >
      </el-image>
    </el-col>
  </el-row>
</template>

<style scoped>

</style>