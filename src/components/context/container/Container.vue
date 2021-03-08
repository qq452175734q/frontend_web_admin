<template>
    <el-container>
    	<Aside/>
		<el-container class="content-box" :class="{'content-box-collapse':$store.state.collapse}">
		    <el-header height="70px"><Header/></el-header>
			<Tags/>
		    <Main/>
		</el-container>
    </el-container>
</template>

<script>
import Aside from './aside/Aside';
import Header from './header/Header';
import Tags from './tags/Tags';
import Main from './main/Main';
export default {
    components: {
        Aside,
		Header,
		Tags,
		Main
    },
    created() {
        
    }
};
</script>
	
<style>
</style>