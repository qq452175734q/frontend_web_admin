<template>
	<div class="login">
		<LoginDialog></LoginDialog>
	</div>
</template>

<script>
	import LoginDialog from 'components/common/logindialog/LoginDialog.vue'
	
	export default {
		components: {
			LoginDialog
		}
	}
</script>

<style>
	.login {
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: url(~assets/img/login/login-background.jpg);
		background-size: cover;
		background-repeat: no-repeat;
		overflow: hidden;
	}
</style>
