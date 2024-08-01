<script setup>
import {ref} from "vue";

const previewflag=ref(false)
const previewIndex=ref(0)
const fileList=ref([
  {
    name:'李京',
    url:'../../public/img/1.png'
  },{
    name:'先锋书店',
    url:'../../public/img/2.png'
  },{
    name:'马娇',
    url:'../../public/img/3.jpg'
  }
])
const updata=ref({
  name:'fileName',
  directory:'C:\\Users\\31366\\Desktop\\文件\\'
})
function upbefore(file){
  updata.value.name=file.name
}
function PicturePreView(file){
  previewIndex.value=fileList.value.indexOf(file)
  previewflag.value=true
}
</script>

<template>
  <el-row style="width: 100%;height: 100vh" justify="center" align="middle">
    <el-upload class="avatar-uploader"
               v-model:file-list="fileList"
               :list-type="'picture-card'"
               :action="'http://localhost:8080/upload'"
               :multiple="true"
               :auto-upload="true"
               :before-upload="upbefore"
               :data="updata"
               :on-preview="PicturePreView"
    >
      <template #trigger>
        <el-icon ><Plus /></el-icon>
      </template>
    </el-upload>
  </el-row>
  <el-image-viewer
   :url-list="fileList.map(a=>a.url)"
   v-if="previewflag" @close="previewflag=!previewflag"
   :initial-index="previewIndex"
  ></el-image-viewer>
</template>

<style scoped>
.avatar-uploader,.el-upload{
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}
.avatar-uploader ,.el-upload:hover{
  border-color: var(--el-color-primary);
}
.el-icon,.avatar-uploader-icon{
  font-size: 28px;
  color: #8c939d;
  text-align: center;
}
</style>