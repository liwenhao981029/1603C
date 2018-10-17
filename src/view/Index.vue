<template>
  <div id="Index">
        <ul v-for="(items,index) in CarInt" :key="index">
          <p class="Int">{{items}}</p>
              <li @click="leftFrom(item.MasterID)"  class="Car_Name" v-for="(item,index)  in BanDList" :key="index" v-if='items===item.Spelling[0]' :data-id='item.MasterID'>
              <img v-bind:src="item.CoverPhoto" alt="">
              <span>{{item.Name}}</span>
          </li>
        </ul>
        <div class="Right">
          <p v-for="(item,index) in CarInt" :key="index">{{item}}</p>
        </div>
        <div class="wind" :class="isShowList?'active':''">
          <div v-for="(item,index) in gerData" :key="index">
              <p @click="close" class="carTitle">{{item.GroupName}}</p>
                 <li class="RightList" @click.stop="Deatils(items.SerialID)" v-for="(items,index) in item.GroupList" :key="index" :data-id='items.SerialID'>
                <img v-bind:src="items.Picture" alt="">
                <div>
                  <p>{{items.AliasName}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
  </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex'
import RightList from '../components/Right-List'
import Loading from '../components/Loading'
export default {
  name: 'app',
  computed:{
    ...mapState({
      BanDList:(state)=>state.a.BanDList,
      CarInt:(state)=>state.a.CarInt,
      gerData:(state)=>state.a.gerData,
      isShowList: (state)=>state.a.isShowList,
    })
  },
  methods:{
    ...mapActions({
      getBand: 'a/getBand',
      getData: 'a/getData',
      getDetail:'a/getDetail',
      close:'a/close'
    }),
    leftFrom(id){
      this.getData(id)
    },


    
    Deatils(id){
      this.getDetail(id)
      this.$router.push({
        path:'detail',
         query: {
            id: id
          }
      })
    }
  },
  mounted(){
    this.getBand()
  },
  components:{
    Loading,
    RightList
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
.Int{
  background: #f4f4f4;
  color:#aaa;
  padding-left:10px;
  height:30px;
  line-height:30px;
}
.Car_Name{
    height: 50px;
    line-height: 50px;
    margin-left: 10px;
    margin-right: 10px;
    border-bottom:solid 1px #ccc;
    display:flex;
}
.Car_Name img{
    height: 40px;
    margin-top: 5px;
}
.Car_Name span{
    margin-left: 10px;
}
.Right{
  position: fixed;
  right: 10px;
  top: 50%;
   -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.wind{
  width: 75%;
  height: 100%;
  background: white;
  position: fixed;
  top: 0px;
  right: 0px;;
  transform: translateX(100%);
  transform: translate3d(100%,0,0);
  transition: all 2s;
  /* display: none; */
}
.wind.active{
  transform: translateX(0%)
}
.RightList{
  display: flex;
  width: 100%;
  height: 70px;;
  line-height: 70px;
  border-bottom: solid 1px #ccc;
}
.RightList img {
  width: 96px;
  height: 60px;;
  margin-left: 10px;
}
.RightList p{
  margin-left: 20px;
}
.carTitle{
  width: 100%;
  height: 24px;
  background: #f2f2f2;
  text-indent: 1em;
  line-height: 24px;
  color: #717171;
  font-size: 14px;
}
</style>
