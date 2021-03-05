<template>
    <el-container>
    	<Aside/>
		<el-container class="content-box" :class="{'content-box-collapse':$store.state.collapse}">
		    <Header/>
		    <Main/>
		</el-container>
    </el-container>
</template>

<script>
import Aside from './aside/Aside';
import Header from './header/Header';
import Main from './main/Main';
export default {
    components: {
        Aside,
		Header,
		Main
    },
    created() {
        
    }
};
</script>
	
<style>
</style>