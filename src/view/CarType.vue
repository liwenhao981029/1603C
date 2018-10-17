<template>
  <div class="CarType">
      <div class="head_green">可以向多个商家询问最低价</div>
    <div class="head_Data">
        <!-- {{AllList.details.serial.AliasName}} -->
        <div class="img">
            <img v-bind:src="AllList.details.serial.Picture" alt="">
        </div>
        <div class="text">
            <p>{{AllList.details.serial.AliasName}}</p>
            <p style="margin-top:10px">{{AllList.details.car_name}}</p>
        </div>
        </div>
        <div class="title">个人信息</div>
        <div class="from">
                <ul>
                    <li>
                        <span>姓名</span><input type="text" placeholder="请输入你的真实中文姓名">
                    </li>
                    <li>
                        <span>手机</span><input type="text" placeholder="请输入你的真实手机号码">
                    </li>
                    <li>
                        <span>城市</span><input type="text" placeholder="请输入你真实的中文姓名">
                    </li>
                </ul>
        </div>
        <div class="wen">
            <p>询最低价</p>
        </div>
        <div class="shooping" v-for="(item,index) in AllList.list" :key="index">
            <div style="margin-top:15px">
                <span>{{item.dealerShortName}}</span>
                <span style="color:red;font-size:12px;margin-right:10px;">{{item.promotePrice}}</span>
                
            </div>
            <div style="font-size:12px;color: #a2a2a2;margin-top:25px;">
                <span>{{item.address}}</span>
                <span style="margin-right:10px;">售{{item.saleRange}}</span>
            </div>
            
        </div>
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    name:'CarType',
    computed:{
         ...mapState({
             AllList:(state)=>state.a.AllList
        })
    },
    methods:{
        ...mapActions({
            getAllList:'a/AllList'
        }),
         getRouter(){
            this.AllList(this.$route.query.id)
        }
    },
        mounted(){
        let routerParams = this.$route.query.id
        this.msg = routerParams
       console.log(this.msg)
        // console.log(this.$route.query)
    },
    watch: {
      '$route': 'getParams'
    }
}
</script>

<style>
html{
    width: 100%;
}
.CarType{
    width: 100%;
}
.head_green{
    width: 100%;
    height: 30px;
    background: #79cd92;
    text-align: center;
    line-height: 30px;
    caret-color: white;
    color: white;
}
.head_Data{
    width: 100%;
    display: flex;
    padding-top: 10px;
     padding-bottom: 10px;
}
.img{
    width: 115px;
    height: 70px;;
    margin-left: 10px;
    border:solid 1px #ccc;
}
.img img{
    width: 100%;
    height: 100%;
}
.text{
    margin-left: 10px;
}
.title{
    width: 100%;
    background: #ccc;
    font-size: 12px;
    height: 30px;;
    color: white;
    line-height: 30px;
    text-indent: 2em;
}
.from{
    width: 100%;
}
.from ul li{
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    text-indent: 1em;
    /* margin-left: 10px; */
    /* padding-right: 10px; */
}
.from ul li input{
    border:none;
    outline: none;
    text-align: right;
    margin-right: 10px;
}
.shooping{

    width: 100%;
    height: 85px;
    border-bottom:solid 1px #eee;
}
.shooping div{
    display: flex;
    justify-content: space-between;
    text-indent: 1em;
}
.wen{
    width: 100%;
    display: flex;
    align-items: center;
    height: 64px;
    position: relative;
}
.wen p{
    background: #3aacff;
    border-radius: 10px;
    color: white;
    width: 300px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    margin-top: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -150px;;
    margin-top: -17.5px;
}
</style>
