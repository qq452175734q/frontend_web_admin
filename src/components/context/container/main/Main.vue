<template>
	<el-main>
	    <transition name="move" mode="out-in">
	        <keep-alive :include="tagsList">
	            <router-view></router-view>
	        </keep-alive>
	    </transition>
	    <!-- <el-backtop target=".content"></el-backtop> -->
	</el-main>
</template>

<script>
	import event from "../Event.js"
	export default{
		name: 'Main',
		data() {
		    return {
		        tagsList: []
		    };
		},
		created() {
			// 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
			event.$on('tags', msg => {
			    let arr = [];
			    for (let i = 0, len = msg.length; i < len; i++) {
			        msg[i].name && arr.push(msg[i].name);
			    }
			    this.tagsList = arr;
			});
		}
	}
</script>

<style>
</style>
