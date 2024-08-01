<script setup>
import {ref} from "vue";
import {notification} from 'vuesax-alpha'

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
const user=ref('')
const flag=ref(false)
const flag1=ref(false)
const flag2=ref(false)
const pass=ref('')

function a(){
  notification({
    title:'cxk',
    text:'你干嘛哎哟！',
    border:'success',
    // color:'dark',
    icon:'<svg t="1722484706545" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10587" width="128" height="128"><path d="M487.296909 111.61884l-12.657957-56.960803s23.490003-72.213641 94.934673-50.631826c62.910043 19.002757 82.938095 42.350358 83.912757 70.488995 0.202527 5.832153-1.636041 18.1167-1.636041 18.1167 0.74049 6.635934-37.261859 28.55635-37.973869 22.151423 0 0 4.756227 11.091534 3.164489 22.151424-1.139216 7.901729-8.502982 16.018644-9.493467 18.986935-1.265796 3.797387 40.901022 24.619725 66.454271 53.796314 22.366609 25.537427 28.480402 60.125293 28.480402 60.125293l44.302847 66.454271 110.757118 69.61876s129.744053 108.383751 31.644891 177.211389-157.433332-26.898157-142.402009-85.441205 63.289782-53.796315 63.289782-53.796315-0.306955-5.208749-3.164489-9.493467c-3.420813-5.132801-9.493467-9.493467-9.493467-9.493468s-78.767298-41.87252-123.415075-72.783249c-36.878956-25.531098-41.138358-41.138358-41.138358-41.138358 0.316449 0.623404-20.971069 38.594109-49.353372 57.846861-25.705145 17.436335-51.910279 27.594345-51.910279 27.594345s18.803394 9.594731 22.151424 22.151423c2.955633 11.085205-9.493467 25.315913-9.493468 25.315913s153.477721 174.0469 161.388944 215.185258-60.916415 151.104354-72.783249 183.540368-68.036515 34.80938 22.151424 107.592629c0 0 30.853769 60.125293-28.480402 44.302847s-132.908542-79.112227-132.908542-79.112227 1.553764-18.676815 18.986934-53.796315c4.477752-9.025123 21.664092-22.537491 26.410826-33.091062 7.62009-16.936346 28.875963-41.271267 36.878956-68.172589 13.670593-45.957875 12.657956-94.934673 12.657957-94.934673s-33.553078-5.844811-62.49866-41.204812c-29.258866-35.746069-87.229142-88.719616-89.396817-88.53924 0 0-7.420727 8.39539-3.164489 25.315912 4.215099 16.759134 20.09767 41.938974 22.151424 63.289782 3.768907 39.201691-3.164489 75.947738-3.164489 75.947738s-13.90793 35.05621-37.973869 72.78325c-33.030937 51.780535-85.441205 107.592629-85.441206 107.592629s15.031323 132.11742-3.164489 142.402009c-9.031452 5.104321-51.426112-9.256131-69.61876-41.138358-18.461629-32.356901-12.657956-82.276716-12.657956-82.276717s6.322649-24.702002 25.315912-50.631825c15.170561-20.711581 43.20477-37.825138 47.467337-75.947738 4.123329-36.894778 38.600438-81.197626 37.973869-123.415075-0.746819-50.35335-43.926273-90.067689-53.796315-132.908542-15.505997-67.305519 0-126.579564 0-126.579564s-27.68928-45.09397-41.138358-18.986934-88.605695 88.605695-88.605695 88.605694 3.49676 27.031066 0 50.631826c-2.740448 18.49011-12.657956 34.80938-12.657956 34.80938s-8.778293-7.006179-15.822445-6.328978c-4.73724 0.455686-8.221343 8.221343-9.493468 9.493467-3.164489 3.164489-2.373367 27.68928-6.328978 34.80938s-28.480402-21.360301-28.480402-37.973869 31.388567-72.178832 41.138358-123.415075c2.680322-14.088305 40.622546-48.530605 60.125293-72.783249 21.455236-26.679808 56.008292-43.499067 79.112228-66.454271 32.733475-32.521454 50.19829-63.720152 63.289781-72.783249 10.091556-6.987192 14.129444-28.663942 22.151424-37.973869 8.585259-9.964976 26.265259-33.417005 41.138358-28.480402 5.863798 1.946161 20.603988-2.041095 25.315913 3.164489 9.316256 10.294083 6.328978 47.467336 6.328978 47.467337s-0.490496 6.091642 3.164489 3.164489c3.075883-2.465137 1.018965-26.059568 0-31.644891-3.316385-18.164167-3.164489-25.315913-3.164489-25.315913s11.895314-3.829032 18.986935-6.328978c6.050503-2.132866 13.211742-2.617032 18.986934-6.328978 9.012465-5.79418 12.657956-15.822445 12.657957-15.822446z" fill="#515151" p-id="10588"></path></svg>',
    progress:'auto',
    width:'auto'
  })
}
</script>

<template>
  <vs-dialog v-model="flag1" not-padding blur>
    <el-image src="/demo/img/3.jpg" ></el-image>
  </vs-dialog>


  <vs-alert closable v-model="flag"
            primary shadow
  >
    <template #icon>
      <el-icon><Lock /></el-icon>
    </template>
    Vuesax (pronounced / vjusacksː /, as view sacks) is a UI components framework created with Vuejs to make projects easily and with a Unique and pleasant style, Vuesax is created from scratch and designed for all types of developed from the frontend lover to the backend that wants to easily create your visual approach to the end user
  </vs-alert>

  <vs-row style="width: 100%;height: 100vh;" justify="center" align="center" >
    <vs-row style="width: 500px;height: 500px;border: 1px solid red">
      <el-col :span="12" class="col" justify="center" align="center" >
        <vs-button primary @click="a">小黑子</vs-button>
        <vs-button
          success flat border @click="flag=!flag"
        >
          success
        </vs-button>
        <vs-button
          warn flat
        >
          warn
        </vs-button>
        <vs-button icon circle>
          <el-icon><Search /></el-icon>搜索
        </vs-button>
        <vs-button loading danger>
          loading
        </vs-button>
        <vs-button upload border>
          upload
        </vs-button>
        <vs-button  animation-type="rotate">
          用户
          <template #animate >
            <el-icon><User /></el-icon>
          </template>
        </vs-button>

      </el-col>
      <el-col :span="12" class="col" justify="center" align="center">
        <vs-input
          label-placeholder="请输入你的账户" primary state="primary"
        >
          <template #icon>
            <el-icon><User /></el-icon>
          </template>
        </vs-input>
        <vs-input>
          <template #message-success>
            Option Valid
          </template>
        </vs-input>

        <vs-switch dark>
          <template #off>
            <el-icon><User /></el-icon>
          </template>
          <template #on>
            <el-icon><Lock /></el-icon>
          </template>
        </vs-switch>
        <vs-avatar size="100" badge badge-color="success" history success @click="flag1=!flag1">
          <img src="../../public/img/3.jpg" >
          <template #badge>
            28
          </template>
        </vs-avatar>

      </el-col>
    </vs-row>

    <vs-row style="width: 100%;" justify="center" align="center">
      <el-col :span="24" justify="center" align="center">
        <vs-button @click="flag2=!flag2" gradient>打开</vs-button>

      </el-col>

    </vs-row>

  </vs-row>
  <vs-sidebar absolute reduce hover-expand :open.sync="flag2">

  </vs-sidebar>
</template>

<style scoped>
.col{
  border: 1px solid red;
}
</style>