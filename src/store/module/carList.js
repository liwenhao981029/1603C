let state = {
    BanDList:[],//首页数据
    CarInt:[],//字母
    isShowList: false,
    gerData:[],//车系数据
    Detail:[],//详情页数据
    year:[],//详情页tab年份
    AllList:[],
    list:[]
}
import { getBrandList,getMakeList,getDetailList,getAllList } from '../../api/index.js'
import {mergeCar,sortCar,filter} from'../../utiles/carList'
const mutations = {
    updataBand(state,payload){
        state.BanDList = payload;
        let arr = [];
        payload.map((item,index) => {
            return arr.push(item.Spelling.slice(0,1))
        })
        state.CarInt = arr.filter((v,i) => {
            return arr.indexOf(v) == i;
        })
    },
    updataId(state,payload){
        // console.log(payload)
        state.gerData = payload
        state.isShowList = true;
    },
    updataDetail(state,payload){
        state.Detail = payload  //详情页数据
        let arr = [];
        payload.list.map((item,index) => {
            return arr.push(item.market_attribute.year)
        })
         let set = new Set(arr)
         let arr2 = Array.from(set) 
         state.year = arr2//tab年份

        //  console.log(payload)
         state.list = mergeCar(sortCar(payload.list))
        //  console.log(state.list)
    },
    close(state,payload){
        console.log(11)
        state.isShowList = false;
    },
    AllList(state,payload){
         console.log(payload)
        state.AllList = payload
        console.log()
    }
}
const actions = {
    getBand({commit}){
        getBrandList().then(res=>{
            // console.log(res)
            commit('updataBand',res.data)
        })
    },
    getData({commit},id){
        getMakeList(id).then(res=>{
            // console.log(res)
            commit('updataId',res.data)
        })
    },
    getDetail({commit},id){
        getDetailList(id).then(res=>{
            // console.log(res)
            commit('updataDetail',res.data)
        })
    },
    AllList({commit},id){
        getAllList(id).then(res=>{
            console.log(res)
            commit('AllList',res.data)
        })
    },
    close({commit}){
        commit('close')
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}
