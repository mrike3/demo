<script setup>
import {ref} from "vue";

const urlList=ref([
  '../../public/img/1.png',
  '../../public/img/2.png',
  '../../public/img/3.jpg',
  '../../public/img/4.jpg',
  '../../public/img/5.png',
  '../../public/img/6.png',
  '../../public/img/7.png',
])
</script>

<template>
  <el-row>
    <el-col :span="24" style="text-align: center">
      <el-image style="width: 200px;height: 200px"
                :src="'../../public/img/1.png'"
                fit="cover"
                :preview-src-list="urlList"
                :initial-index="0"
                lazy
      >
      </el-image>
    </el-col>
    <el-col :span="24" style="text-align: center">
      <el-image style="width: 200px;height: 200px"
        :src="'../../public/img/2.png'"
                fit="cover"
                :preview-src-list="urlList"
                :initial-index="1" lazy
      >
      </el-image>
    </el-col>
    <el-col :span="24" style="text-align: center">
      <el-image style="width: 200px;height: 200px"
        :src="'../../public/img/3.jpg'"
                fit="cover"
                :preview-src-list="urlList"
                :initial-index="2" lazy
      >
      </el-image>
    </el-col>
    <el-col :span="24" style="text-align: center">
      <el-image style="width: 200px;height: 200px"
        :src="'../../public/img/4.jpg'"
                fit="cover"
                :preview-src-list="urlList"
                :initial-index="3" lazy
      >
      </el-image>
    </el-col>
    <el-col :span="24" style="text-align: center">
      <el-image style="width: 200px;height: 200px"
                :src="'../../public/img/5.png'"
                fit="cover"
                :preview-src-list="urlList"
                :initial-index="4" lazy
      >
      </el-image>
    </el-col>
    <el-col :span="24" style="text-align: center">
      <el-image style="width: 200px;height: 200px"
                :src="'../../public/img/6.png'"
                fit="cover"
                :preview-src-list="urlList"
                :initial-index="5" lazy
      >
      </el-image>
    </el-col>
    <el-col :span="24" style="text-align: center">
      <el-image style="width: 200px;height: 200px"
                :src="'../../public/img/7.png'"
                fit="cover"
                :preview-src-list="urlList"
                :initial-index="6" lazy
      >
      </el-image>
    </el-col>
  </el-row>
</template>

<style scoped>

</style>