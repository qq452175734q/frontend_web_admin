<template>
	<el-aside width="auto">
		<el-menu
		    class="sidebar-el-menu"
			:default-active="onRoutes"
		    :collapse="collapse"
		    background-color="#324157"
		    text-color="#bfcbd9"
		    active-text-color="#20a0ff"
		    unique-opened
		    router
		>
			<div class="logo" :class="{'logo-collapse':!collapse}">
				<img class="logo-img" src="~assets/img/title.png" />
				<span class="logo-title">后台管理系统</span>
			</div>
		    <template v-for="item in $store.state.items">
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
	import event from '../Event';
	export default {
	    name: "Aside",
		data() {
		    return {
		        collapse: true,
			}
		},
		computed: {
		    onRoutes() {
		        return this.$route.path.replace('/', '');
		    }
		},
		created() {
		    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
		    event.$on('collapse', msg => {
		        this.collapse = msg;
		        event.$emit('content-box-collapse', msg);
		    });
		}
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
