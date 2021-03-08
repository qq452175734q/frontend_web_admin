import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	items: [
		{
			"icon":"el-icon-s-home",
			"id":1,
			"parentId":0,
			"path": "dashboard",
			"name": "系统首页"
		},
		{
			"icon": "el-icon-s-tools",
			"id":2,
			"parentId":0,
			"path":"",
			"name": "系统管理",
			"children": [
				{
					"icon": "el-icon-user",
					"id":3,
					"parentId":2,
					"name": "用户管理",
					"children":[
						{
						  "icon": "el-icon-user-solid",
						  "id":4,
						  "parentId":3,
						  "path": "usermanage",
						  "name": "用户"
						},
						{
							"icon": "el-icon-user-solid",
							"id":5,
							"parentId":3,
							"path": "usergroup",
							"name": "用户组"
						}
					]
				},
				{
					"icon": "el-icon-s-release",
					"id":6,
					"parentId":2,
					"name": "权限管理",
					"children":[
						{
							"icon": "el-icon-user-solid",
							"id":7,
							"parentId":6,
							"path": "role",
							"name": "角色管理"
						}
					]
				},
				{
					"icon": "el-icon-s-release",
					"id":6,
					"parentId":2,
					"name": "订单管理",
					"path": "order"
				}
			]
		}
	],
}

export default new Vuex.Store({
  state,
  getters: {
	  
  },
  mutations: {
  },
  actions: {
	  
  },
  modules: {
  }
})
