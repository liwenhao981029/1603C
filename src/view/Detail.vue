<template>
  <div class="Detail">
      <div class="banner">
          <img @click="ImgJump(Detail.SerialID)" v-bind:src="Detail.CoverPhoto" alt="">
      </div>
      <div class="Money">
          <div style="margin-left:15px">
              <p style="color:red">{{Detail.market_attribute&&Detail.market_attribute.dealer_price}}</p>
              <p style="font-size:12px;color:silver">指导价{{Detail.market_attribute&&Detail.market_attribute.official_refer_price}}</p>
          </div>
          <span></span>
          <div class="xunwen" >
              {{Detail.BottomEntranceTitle}}
          </div>
      </div>
      <div class="nav">
        <ul style="display:flex">
            <li>全部</li>
            <li v-for="(item,index) in year" :key="index">
                {{item}}
            </li>
        </ul>
      </div>
      <div>
          <div class="lists">
              <ul>
                  <li v-for="(value,key) in list" :key="key">
                      <p v-text="key"></p>
                      <div class="carData" v-for="(item,index) in value" :key="index">
                          <p> {{item.car_name}}{{item.car_id}}</p>
                        <p class="wenJump"@click="All_Click(item.car_id)">询问底价</p>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    name: '',
    computed:{
        ...mapState({
             Detail:(state)=>state.a.Detail,
             year:(state)=>state.a.year,
             list:(state)=>state.a.list
        })
    },
    methods:{
        ...mapActions({
            Details: 'a/Detail',
            getAllList:'a/AllList',
            getImg:'Img/GetImg'
        }),
        All_Click(id){
            this.getAllList(id)
            this.$router.push({
                path:'/carType',
                query:{
                    id:id
                }
            })
        },
        ImgJump(id){
            this.getImg(id)
            this.$router.push({
                path:'/img',
                query:{
                    id:id
                }
            })
        }
    },
     mounted(){
        let routerParams = this.$route.query.id
        this.msg = routerParams
    }
}
</script>
<style>
.banner{
    width: 100%;
}
.banner img{
    width: 100%;
}
.Money{
    display: flex;
    height: 74px;
    justify-content: space-between;
    border-bottom: solid 5px #ccc;
    align-items: center;
}
.xunwen{
    width: 187.5px;
    height: 35px;
    background: #00afff;
    color: #fff;
    text-align: center;
    line-height: 35px;
    border-radius: 5px;
    margin-right: 5px;

}
.nav ul li{
    margin-left: 15px;
    margin-top: 20px;
}
.carData{
    width: 100%;
    height: 119px;
}
.wenJump{
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: blue
}
</style>
