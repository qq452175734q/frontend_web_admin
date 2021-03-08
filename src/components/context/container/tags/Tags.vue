<template>
	<div class="tags" v-if="this.$store.getters.tagsListLength > 0">
		<ul>
			<li class="tags-li" v-for="(item,index) in $store.state.tagsList" :class="{'active':isActive(item.path)}" :key="index">
				<router-link :to="item.path" class="tags-li-title">
					{{item.title}}
				</router-link>
				<span class="tags-li-icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>
			</li>
		</ul>
		<div class="tags-close-box">
		    <el-dropdown @command="handleTags">
		        <el-button size="mini" type="primary">
		            标签选项<i class="el-icon-arrow-down el-icon--right"></i>
		        </el-button>
		        <el-dropdown-menu size="small" slot="dropdown">
		            <el-dropdown-item command="other">关闭其他</el-dropdown-item>
		            <el-dropdown-item command="all">关闭所有</el-dropdown-item>
		        </el-dropdown-menu>
		    </el-dropdown>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Tags',
		watch:{
		    $route(newValue, oldValue){
				console.log(newValue)
				console.log(oldValue)
		        this.setTags(newValue);
		    }
		},
		created(){
			this.setTags(this.$route);
			for (let i = 0, len = this.$store.getters.tagsListLength; i < len; i++) {
			    const item = this.$store.state.tagsList[i];
			    if(item.path === this.$route.fullPath){
			        if(i < len - 1){
			            this.$router.push(this.$store.state.tagsList[i+1].path);
			        }else if(i > 0){
			            this.$router.push(this.$store.state.tagsList[i-1].path);
			        }else{
			            this.$router.push('/');
			        }
					this.$store.commit('removeTagsList',i)
			        break;
			    }
			}
		},
		methods:{
			isActive(path) {
			    return path === this.$route.fullPath;
			},
			handleTags(command){
			    command === 'other' ? this.closeOther() : this.closeAll();
			},
			// 关闭单个标签
			closeTags(index) {
				const delItem = this.$store.commit('removeTagsList',index)
				const item = this.$store.state.tagsList[index] ? this.$store.state.tagsList[index] : this.$store.state.tagsList[index - 1];
			    if (item) {
					this.$router.push(item.path);
			    }else{
			        this.$router.push('/');
			    }
			},
			// 关闭其他标签
			closeOther(){
			    const curItem = this.$store.getters.closeOther(this.$route.fullPath)
			    this.$store.commit('resetTagsList',curItem)
			},
			// 关闭全部标签
			closeAll(){
				this.$store.commit('resetTagsList',[])
				this.$router.push('/');
			},
			// 设置标签
			setTags(route){
			    const isExist = this.$store.getters.checkExist(route.fullPath)
			    if(!isExist){
			        if(this.$store.getters.tagsListLength >= 8){
			            this.$store.shiftTagsList
			        }
					this.$store.commit('pushTagsList',{
			            title: route.name,
			            path: route.fullPath,
			            name: route.matched[1].components.default.name
			        })
			    }
			},
			handleTags(command){
			    command === 'other' ? this.closeOther() : this.closeAll();
			}
		}
	}
</script>

<style>
	.tags {
	    height: 30px;
	    overflow: hidden;
	    background: #fff;
	    padding-right: 120px;
	    box-shadow: 0 5px 10px #ddd;
	}
	.tags ul {
	    box-sizing: border-box;
	    width: 100%;
	    height: 100%;
	}
	.tags-li {
	    float: left;
	    margin: 3px 5px 2px 3px;
	    border-radius: 3px;
	    font-size: 12px;
	    overflow: hidden;
	    cursor: pointer;
	    height: 23px;
	    line-height: 23px;
	    border: 1px solid #e9eaec;
	    background: #fff;
	    padding: 0 5px 0 12px;
	    vertical-align: middle;
	    color: #666;
	    -webkit-transition: all .3s ease-in;
	    -moz-transition: all .3s ease-in;
	    transition: all .3s ease-in;
	}
	.tags-li:not(.active):hover {
	    background: #f8f8f8;
	}
	.tags-li.active {
	    color: #fff;
	}
	.tags-li-title {
	    float: left;
	    max-width: 80px;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    margin-right: 5px;
	    color: #666;
	}
	.tags-li.active .tags-li-title {
	    color: #55aaff;
	}
	.el-icon-close{
		color: #000000;
	}
	.tags-close-box {
	    position: absolute;
	    right: 0px;
	    top: 70px;
	    box-sizing: border-box;
	    padding-top: 1px;
	    text-align: center;
	    width: 110px;
	    height: 30px;
	    z-index: 10;
	}
</style>
