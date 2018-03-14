import Vue from 'vue'
import Router from 'vue-router'
const CitiesList = () => import('../pages/CitiesList.vue')
const SearchAddress = () => import('../pages/SearchAddress.vue')
const MainPages = () => import('../pages/mainPages/MainPages.vue')
const IndexPage = () => import('../pages/mainPages/children/IndexPage.vue')
const SearchPage = () => import('../pages/mainPages/children/SearchPage.vue')
const OrdersPage = () => import('../pages/mainPages/children/OrdersPage.vue')
const UserPage = () => import('../pages/mainPages/children/UserPage.vue')
const SameHeadPages = () => import('../pages/sameHeadPages/SameHeadPages.vue')
const LoginPage = () => import('../pages/sameHeadPages/children/LoginPage.vue')
const CategoriesList = () => import('../pages/sameHeadPages/children/CategoriesListPage.vue')
const FoodListPage = () => import('../pages/sameHeadPages/children/FoodListPage.vue')
const UserInfo = () => import('../pages/sameHeadPages/children/UserInfo.vue')
const UserAddress = () => import('../pages/sameHeadPages/children/UserAddress.vue')
const ResetPassword = () => import('../pages/sameHeadPages/children/ResetPassword.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CitiesList',
      component: CitiesList
    },
    {
      path:'/searchAddress',
      component:SearchAddress
    },
    {
      path: '/mainPages',
      name: 'MainPages',
      component: MainPages,
      children:[
        {
          path:'indexPage',
          component: IndexPage,
          meta:{
            keepAlive:true
          }
        },
        {
          path: 'searchPage',
          component: SearchPage
        },
        {
          path: 'ordersPage',
          component: OrdersPage
        },
        {
          path: 'userPage',
          component: UserPage
        }
      ]
    },
    {
      path:'/sameHeadPages',
      component:SameHeadPages,
      children:[
        {
          path:'loginPage',
          component:LoginPage
        },
        {
          path:'categoriesList',
          component:CategoriesList,
          meta:{
            keepAlive:true
          }
        },
        {
          path:'foodListPage',
          component:FoodListPage,
          meta:{
            keepAlive:true
          }
        },
        {
          path:'userInfo',
          component:UserInfo,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'userAddress',
          component: UserAddress,
          meta:{
            requiresAuth:true
          }
        },
        {
          path: 'resetPassword',
          component: ResetPassword,
          meta: {
            requiresAuth: true
          }
        }
      ]
    }
  ]
})
