<template>
	<el-header height="70px">
		<div class="collapse-btn" @click="collapseChage">
			<svg-icon v-if="!$store.state.collapse" iconClass="fold" className="fold"></svg-icon>
			<svg-icon v-else iconClass="unfold" className="fold"></svg-icon>
		</div>
		<div class="header-right">
		<div class="header-user-con">
			<!-- 全屏显示 -->
			    <div class="btn-fullscreen" @click="handleFullScreen">
			        <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
			            <i class="el-icon-rank"></i>
			        </el-tooltip>
			    </div>
			    <!-- 消息中心 -->
			    <div class="btn-bell">
			        <el-tooltip
			            effect="dark"
			            :content="message?`有${message}条未读消息`:`消息中心`"
			            placement="bottom"
			        >
			            <router-link to="/tabs">
			                <i class="el-icon-bell"></i>
			            </router-link>
			        </el-tooltip>
			        <span class="btn-bell-badge" v-if="message"></span>
			    </div>
			    <!-- 用户头像 -->
			    <div class="user-avator">
			        <img src="~assets/img/img.jpg" />
			    </div>
			    <!-- 用户名下拉菜单 -->
			    <el-dropdown class="user-name" trigger="click" @command="handleCommand">
			        <span class="el-dropdown-link">
			            {{username}}
			            <i class="el-icon-caret-bottom"></i>
			        </span>
			        <el-dropdown-menu slot="dropdown">
			            <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
			                <el-dropdown-item>项目仓库</el-dropdown-item>
			            </a>
			            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
			        </el-dropdown-menu>
			    </el-dropdown>
			</div>
		</div>
	</el-header>
</template>

<script>
	import event from '../Event';
	export default {
	    data() {
	        return {
	            fullscreen: false,
	            username: 'oldliang',
	            message: 2
	        };
	    },
		methods: {
			// 侧边栏折叠
			collapseChage() {
				this.$store.commit('isCollapse');
			},
			// 全屏事件
			handleFullScreen() {
			    let element = document.documentElement;
			    if (this.fullscreen) {
			        if (document.exitFullscreen) {
			            document.exitFullscreen();
			        } else if (document.webkitCancelFullScreen) {
			            document.webkitCancelFullScreen();
			        } else if (document.mozCancelFullScreen) {
			            document.mozCancelFullScreen();
			        } else if (document.msExitFullscreen) {
			            document.msExitFullscreen();
			        }
			    } else {
			        if (element.requestFullscreen) {
			            element.requestFullscreen();
			        } else if (element.webkitRequestFullScreen) {
			            element.webkitRequestFullScreen();
			        } else if (element.mozRequestFullScreen) {
			            element.mozRequestFullScreen();
			        } else if (element.msRequestFullscreen) {
			            // IE11
			            element.msRequestFullscreen();
			        }
			    }
			    this.fullscreen = !this.fullscreen;
			},
			// 用户名下拉菜单选择事件
			handleCommand(command) {
			    if (command == 'loginout') {
			        localStorage.removeItem('ms_username');
			        this.$router.push('/login');
			    }
			},
		}
	}
</script>

<style>
	.el-header{
		height: 70px;
		width: 100%;
		background-color: #ffffff;
		border-bottom: 1px solid #dadada;
	}
	.collapse-btn {
	    float: left;
	    cursor: pointer;
	    line-height: 70px;
		align: center;
	}
	.header-right {
	    float: right;
	    padding-right: 50px;
	}
	.header-user-con {
	    display: flex;
	    height: 70px;
	    align-items: center;
	}
	.btn-fullscreen {
	    transform: rotate(45deg);
	    margin-right: 5px;
	    font-size: 24px;
	}
	.btn-fullscreen {
	    position: relative;
	    width: 30px;
	    height: 30px;
	    text-align: center;
	    border-radius: 15px;
	    cursor: pointer;
	}
	.btn-bell-badge {
	    position: absolute;
	    right: 0;
	    top: -2px;
	    width: 8px;
	    height: 8px;
	    border-radius: 4px;
	    background: #f56c6c;
	    color: #000000;
	}
	.btn-bell .el-icon-bell {
	    color: #000000;
	}
	.user-name {
	    margin-left: 10px;
	}
	.user-avator {
	    margin-left: 20px;
	}
	.user-avator img {
	    display: block;
	    width: 40px;
	    height: 40px;
	    border-radius: 50%;
	}
	.el-dropdown-link {
	    color: #000000;
	    cursor: pointer;
	}
	.el-dropdown-menu__item {
	    text-align: center;
	}
</style>
