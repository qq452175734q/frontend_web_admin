<template>
	<el-aside width="auto">
		<el-menu
		    class="sidebar-el-menu"
			:default-active="onRoutes"
		    :collapse="$store.state.collapse"
		    background-color="#324157"
		    text-color="#bfcbd9"
		    active-text-color="#20a0ff"
		    unique-opened
		    router
		>
			<div class="logo" :class="{'logo-collapse':!$store.state.collapse}">
				<img class="logo-img" src="~assets/img/title.png" />
				<span class="logo-title">后台管理系统</span>
			</div>
		    <template v-for="item in items">
		        <template v-if="item.children">
		            <el-submenu :index="item.id + '' " :key="item.id" >
		                <template slot="title">
		                    <i :class="item.icon"></i>
		                    <span slot="title">{{ item.name }}</span>
		                </template>
		                <template v-for="childItem in item.children">
		                    <el-submenu
		                        v-if="childItem.children"
		                        :index="childItem.id + '' "
		                        :key="childItem.parent"
		                    >
		                        <template slot="title"><i :class="childItem.icon"></i>{{ childItem.name }}</template>
		                        <el-menu-item
		                            v-for="(endItem,i) in childItem.children"
		                            :key="i"
		                            :index="endItem.path"
		                        ><i :class="endItem.icon"></i>
								{{ endItem.name }}</el-menu-item>
		                    </el-submenu>
		                    <el-menu-item
		                        v-else
		                        :index="childItem.path"
		                    ><i :class="childItem.icon"></i>{{ childItem.name }}</el-menu-item>
		                </template>
		            </el-submenu>
		        </template>
		        <template v-else>
		            <el-menu-item :index="item.path" :key="item.index" :router="item.path">
		                <i :class="item.icon"></i>
		                <span slot="title">{{ item.name }}</span>
		            </el-menu-item>
		        </template>
		    </template>
		</el-menu>
	</el-aside>
</template>

<script>
	export default {
	    name: "Aside",
		computed: {
		    onRoutes() {
		        return this.$route.path.replace('/', '');
		    }
		},
		data() {
		    return {
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
		    };
		},
	};
</script>

<style>
	.logo {
	    height: 70px;
		width: 100%;
		overflow: hidden;
		background-color: #324157;
	}
	.logo-collapse {
	    padding-left: 15px;
	}
	.logo-img{
		padding-top: 10px;
		float: left;
		width: 60px;
	}
	.logo-title{
		position: relative;
		font-size: 18px;
		top: 26px;
		left: 15px;
		color: #fff;
		white-space: nowrap;
	}
	.el-aside{
		display: block;
		position: absolute;
	    bottom: 0;
		left: 0;
		top: 0px;
	}
	.el-aside > ul {
	    height: 100%;
	}
	.sidebar-el-menu:not(.el-menu--collapse) {
	    width: 250px;
	}
</style>
