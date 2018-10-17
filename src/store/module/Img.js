let state = {
    Img:[]
}
import {getImg} from '../../api/index'
const mutations = {
    updataImg(state,payload){
        state.Img = payload
        console.log(payload)
    }
}
const actions = {
    GetImg({commit},id){
        getImg(id).then(res=>{
            commit('updataImg',res.data)
            console.log(res)
        })
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}