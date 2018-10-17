import Vue from 'vue';
import VueRouter from 'vue-router';
const Index = ()=>import('../view/Index')
const CarType = ()=>import('../view/CarType');
const Detail = ()=>import('../view/Detail.vue');
const ColorType = ()=>import('../view/ColorType');
const Question = ()=>import('../view/Question');
const Img = ()=>import('../view/Img');
 
Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path:'/index',
        name:'Index',
        component:Index
    }, {
        path:'/carType',
        name:'CarType',
        component:CarType
    }, {
        path:'/detail',
        name:'Detail',
        component:Detail
    }, {
        path:'/colorType',
        name:'ColorType',
        component:ColorType
    }, {
        path:'/question',
        name:'Question',
        component:Question
    }, {
        path:'/img',
        name:'Img',
        component:Img
    }, {
        path: '*',
        redirect: '/index'
    }]
})