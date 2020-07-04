import Vue from "vue";
import VueRouter from "vue-router";
import ClosePage from '../components/ClosePage.vue'
import Catalogue from '../components/Catalogue.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/', 
            redirect: '/catalogue' 
        },
        {
            path:'/catalogue',
            meta:{
                title:'列表'
            },
            component:Catalogue
        },
        {
            path: "/closepage",
            meta:{
                title:'窗口关闭与刷新事件'
            },
            component: ClosePage
        }
    ]
  })