<template>
  <div class="Img">
      <div class="Img_tab">
          <p>颜色</p>|
          <p>车款</p>
      </div>
      <div class="Img_list">
          <ul v-for="(item,index) in Img" :key="index">
              <li v-for="(items,index) in item.List" :key="index">
                  <img v-bind:src="`${items.Url.replace('{0}', items.LowSize)}`" alt="">
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    name:'Img',
    computed:{
        ...mapState({
            Img:(state)=>state.Img.Img
        })
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.Img_tab{
    width: 100%;
    height: 40px;
    font-size: 14px;
    display: flex;
    line-height: 40px;
}
.Img_tab p{
    flex: 1;
    text-align: center;
    line-height: 40px;
}
</style>
