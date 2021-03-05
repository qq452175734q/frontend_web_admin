<template>
	<div class="content">
	    <transition name="move" mode="out-in">
	        <keep-alive :include="$store.state.tagsList">
	            <router-view></router-view>
	        </keep-alive>
	    </transition>
	    <el-backtop target=".content"></el-backtop>
	</div>
</template>

<script>
	export default{
		name: 'Main'
	}
</script>

<style>
</style>
