<template>
  <div class="userq">
		<div class="logo">
			<img src="./pba-slogan.png" />
		</div>
		<div class="login">
			<input type="text" placeholder="账号" />
			<input type="password" placeholder="密码" />
		</div>
		<div class="gologin">
			立即登录
		</div>
		<div class="regin gologin">
			注册PBA账号
		</div>
	</div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
	width: 100%;
	text-align: center;
	padding: 2rem 0;
}
.logo img{
	width: 70%;
}
.login{
}
.login input{
	width: 90%;
	border: 1px solid #ddd;
	height: 2.5rem;
	padding-left: 0.5rem;
	margin-left: 0.8rem;
}
.login input:first-child{
	border-bottom: none;
}
.gologin{
	width: 90%;
	background: #FF498C;
	color: #fff;
	height: 2.5rem;
	line-height: 2.5rem;
	padding-left: 0.5rem;
	margin-left: 0.8rem;
	text-align: center;
	font-size: 1rem;
	border-radius: 0.3rem;
	margin-top: 1rem;
	cursor: pointer;
}
.regin{
	background: #F8F8F8;
	color: #333;
	border: 1px solid #ddd;
}
</style>
