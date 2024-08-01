<script setup>
import {ref} from "vue";

const studentList=ref([
  {
    id:1,
    name:'田正荣',
    age:20,
    address:'云南红河',
    sex:'男',
    school:'西南林业大学'
  },{
    id:2,
    name:'邓彩林',
    age:21,
    address:'云南文山',
    sex:'男',
    school:'玉溪农业职业技术学院'
  },{
    id:3,
    name:'陈派',
    age:22,
    address:'云南曲靖',
    sex:'男',
    school:'红河州农业学校'
  },{
    id:4,
    name:'冉红菲',
    age:21,
    address:'云南文山',
    sex:'女',
    school:'云南农业职业技术学院'
  },{
    id:5,
    name:'龙健',
    age:21,
    address:'云南文山',
    sex:'男',
    school:'云南交通职业技术学院'
  },
])
const addressList=ref([])
studentList.value.forEach(function (item,index){
  var flag=true
  addressList.value.forEach(function (it,index1){
    if(it.text==item.address){
      flag=false
    }
  })
  if(flag){
    var a={
      text:item.address,
      value:item.address
    }
    addressList.value.push(a)
  }
})
function sx(str,row){
  return row.address===str
}
</script>

<template>
<el-row justify="center" align="middle" style="width: 100%;height: 100vh">
  <el-table :data="studentList" style="width: 80%;text-align: center" stripe border>
    <el-table-column type="selection"></el-table-column>
    <el-table-column prop="id" sortable label="编号" width="100"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="age" label="年龄"></el-table-column>
    <el-table-column prop="address" label="地址" :filters="addressList" :filter-method="sx"></el-table-column>
    <el-table-column prop="sex" label="性别"></el-table-column>
    <el-table-column prop="school" label="学校"></el-table-column>
  </el-table>
</el-row>
</template>

<style scoped>

</style>