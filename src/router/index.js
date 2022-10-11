import Vue from "vue";
import Router from "vue-router";
// import Home from "../components/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login",
      name: "首页",
      hidden: true,
      //路由懒加载
      component: () => import("@/components/Login"),
    },
    {
      path: "/login",
      name: "Login",
      hidden: true,
      //路由懒加载
      component: () => import("@/components/Login"),
    },
    {
      path: "/home",
      name: "学生管理",
      iconClass: "fa fa-address-book",
      redirect: "/home/student",
      //路由懒加载
      component: () => import("@/components/Home"),
      // component: (resolve) => require(["@/components/Home"], resolve),
      children: [
        {
          path: "/home/student",
          name: "学生列表",
          iconClass: "fa fa-user-circle-o",
          component: () => import("@/components/student/StudentList"),
        },
        {
          path: "/home/info",
          name: "信息列表",
          iconClass: "fa fa-calendar-o",
          component: () => import("@/components/student/InfoList"),
        },
        {
          path: "/home/infos",
          name: "信息管理",
          iconClass: "fa fa-cog",
          component: () => import("@/components/student/InfoLists"),
        },
        {
          path: "/home/type",
          name: "作业列表",
          iconClass: "fa fa-tags",
          component: () => import("@/components/student/TypeList"),
        },
        {
          path: "/home/types",
          name: "作业管理",
          iconClass: "fa fa-reorder",
          component: () => import("@/components/student/TypeMent"),
        },
      ],
    },
    {
      path: "/home",
      name: "数据分析",
      iconClass: "fa fa-bar-chart",
      //路由懒加载
      component: () => import("@/components/Home"),
      // component: (resolve) => require(["@/components/Home"], resolve),
      children: [
        {
          path: "/home/dataview",
          name: "数据概览",
          iconClass: "fa fa-newspaper-o",
          component: () => import("@/components/dataAnalysis/DataView"),
        },
        {
          path: "/home/mapview",
          name: "地图概览",
          iconClass: "fa fa-map",
          component: () => import("@/components/dataAnalysis/MapView"),
        },
        {
          path: "/home/trave",
          name: "地区分布",
          iconClass: "fa fa-plane",
          component: () => import("@/components/dataAnalysis/TraveMap"),
        },
        {
          path: "/home/element",
          name: "数据统计",
          iconClass: "fa fa-pie-chart",
          component: () => import("@/components/dataAnalysis/ElementMap"),
        },
      ],
    },
    {
      path: "/home",
      name: "用户中心",
      iconClass: "fa fa-user",
      //路由懒加载
      component: () => import("@/components/Home"),
      children: [
        {
          path: "/home/user",
          name: "权限管理",
          iconClass: "fa fa-wrench",
          component: () => import("@/components/user/Users"),
        },
      ],
    },
    {
      path: "*",
      name: "NotFound",
      hidden: true,
      //路由懒加载
      //   component: () => import("@components/Home.vue"),
      component: (resolve) => require(["@/components/NotFound"], resolve),
    },
  ],
  mode: "history",
});
