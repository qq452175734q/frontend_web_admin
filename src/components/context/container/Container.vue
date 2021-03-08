<template>
    <el-container>
    	<Aside/>
		<el-container class="content-box" :class="{'content-box-collapse':collapse}">
		    <el-header height="70px"><Header/></el-header>
			<Tags/>
		    <Main/>
		</el-container>
    </el-container>
</template>

<script>
	import event from './Event';
	import Aside from './aside/Aside';
	import Header from './header/Header';
	import Tags from './tags/Tags';
	import Main from './main/Main';
	export default {
		data() {
			return {
				collapse: true
			};
		},
		components: {
			Aside,
			Header,
			Tags,
			Main
		},
		created() {
			event.$on('content-box-collapse', msg => {
				this.collapse = msg;
			});
		}
	};
</script>
	
<style>
</style>