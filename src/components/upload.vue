<script setup>
import {ref} from "vue";

const upload=ref(null)
const updata=ref({
  name:'fileName',
  directory:'C:\\Users\\31366\\Desktop\\文件\\'
})
function upbefore(file){
  updata.value.name=file.name
}
function uploadStart(){
  upload.value.submit()
}
</script>

<template>
  <el-row justify="center" align="middle" style="width: 100%;height: 100vh">
    <el-space>
      <el-upload

          :action="'http://localhost:8080/upload'"
          :multiple="true"
          :auto-upload="false"
          :data="updata"
          :before-upload="upbefore"
          ref="upload"
      >
        <el-button slot="trigger" type="primary" plain>选择文件</el-button>
      </el-upload>

      <el-button type="success" @click="uploadStart">上传</el-button>
    </el-space>
  </el-row>
</template>

<style scoped>

</style>