import Vue from 'vue'
import Vuex from 'vuex'
import CarList from './module/carList'
import Img from './module/Img'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        a:CarList,
        Img
    }
})