<script setup>
import {ref} from "vue";

const updata=ref({
  name:'fileName',
  directory:'C:\\Users\\31366\\Desktop\\文件\\'
})
function upbefore(file){
  updata.value.name=file.name
}
</script>

<template>
  <el-row style="width: 100%;height: 100vh" justify="center" align="middle">
    <el-upload class="avatar-uploader"
               :action="'http://localhost:8080/upload'"
               drag
               :list-type="'picture'"
               :multiple="true"
               :auto-upload="true"
               :before-upload="upbefore"
               :data="updata"
    >
      <template #trigger>
        <el-icon><upload-filled /> </el-icon>
      </template>
    </el-upload>
  </el-row>
</template>

<style scoped>
.avatar-uploader{
  width: 200px;
  height: 500px;
}
</style>