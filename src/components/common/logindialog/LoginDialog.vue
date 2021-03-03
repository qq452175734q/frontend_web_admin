<template>
	<div class="dialog-login">
		<div class="dialog-title">后台管理系统</div>
		<el-form ref="login" :rule="rules" :model="account" :path="path" label-width="80px" class="dialog-from">
			<el-form-item label="账号" prop="username" class="dialog-label">
			   <el-input v-model="account.username" placeholder="请输入账号"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password" class="dialog-label">
			   <el-input v-model="account.password" placeholder="请输入密码"></el-input>
			</el-form-item>
			<el-form-item class="dialog-btn">
			    <el-button type="primary" @click="submitLogin">登录</el-button>
			</el-form-item>
			<router-link :to="path" class="dialog-forget">忘记密码</router-link>
			<p class="dialog-tips">Tips : 仅限管理员登录</p>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'LoginDialog',
		props:{
			account: {
				type: Object,
				default() {
					return {username: 'admin',password: '123',}
				}
			},
			rules: {
				type: Object,
				default() {
					return {
						username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
						password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
					}
				}
			},
			submitLogin: {
				type: Function,
				default: function() {
					console.log("submit!")
				}
			},
			path: {
				type: String,
				default(){
					return '/forgetPassword'
				}
			}
		},
	}
</script>

<style>
	.dialog-login {
	    position: absolute;
	    left: 50%;
	    top: 50%;
	    width: 350px;
	    margin: -190px 0 0 -175px;
	    border-radius: 5px;
	    background: rgba(255, 255, 255, 0.3);
	    overflow: hidden;
	}
	.dialog-title {
		text-align: center;
		width: 100%;
		line-height: 50px;
		font-size: 20px;
		color: #fff;
		border-bottom: 1px solid #ddd;
	}
	.dialog-from{
		position: relative;
		left: -25px;
		padding: 40px 30px;
	}
	.dialog-label .el-form-item__label{
	    color: #fff;
	}
	.dialog-btn {
	    text-align: center;
	}
	.dialog-btn button {
	    width: 100%;
	    height: 36px;
	    margin-bottom: 10px;
	}
	.dialog-forget{
		position: relative;
		left:92%;
		font-size: 16px;
	}
	.dialog-tips {
		position: relative;
		left: 20px;
	    font-size: 12px;
	    line-height: 10px;
	    color: #fff;
	}
</style>
