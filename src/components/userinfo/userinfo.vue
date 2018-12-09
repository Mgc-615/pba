<template>
  <div id="userinfo">
	  <div class="main">
		  <p>{{obj.username}},您好！☺</p>
		  <button type="button" @click="outlogin">注销</button>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'App',
	data(){
		return{
			obj:{
			username:localStorage.getItem("username"),	
			pwd:localStorage.getItem("pwd")	
			}
		}
	},
	methods:{
		
	},
	mounted(){
		if(!localStorage.getItem("username")){
			this.$toast({
					message: '请您先登录',
						position: 'bottom',
						duration: 2000
			});
			this.$router.push({name:'user'})
		}
	},
	computed:{
		
	},
	methods:{
		outlogin(){
			localStorage.removeItem('username');
			localStorage.removeItem('pwd');
			localStorage.removeItem('carmsg');
			this.$toast({
					message: '注销成功',
						position: 'bottom',
						duration: 2000
			});
			this.$router.push({name:'home'})
		}
	}
}
</script>

<style>
.main{
	width: 100%;
	text-align: center;
	position: absolute;
	top: 5rem;
}
.main button{
	width: 5rem;
	height: 2rem;
	background: #FD417B;
	color: #fff;
	border: none;
	margin-top: 2rem;
	border-radius: 0.3rem;
}
</style>
