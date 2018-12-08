<template>
  <div class="userq">
		<div class="logo">
			<img src="./pba-slogan.png" />
		</div>
		<div class="login">
			<input type="text" placeholder="账号" @blur="blo" ref="login" />
			<input type="password" placeholder="密码" @blur="reo" ref="regin" />
		</div>
		<div class="gologin" @click="golo">
			立即登录
		</div>
		<div class="regin gologin" @click="gore">
			注册PBA账号
		</div>
	</div>
</template>

<script>
export default {
  name: 'user',
	props:["user"],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
	mounted(){
		if(localStorage.getItem("username")){
			this.$router.push({name:'userinfo'})
		}
	}
	,
	methods:{
		blo(){
			console.log("账号：",this.$refs.login.value)
		},
		reo(){
			console.log("密码：",this.$refs.regin.value)
		},
		golo(){
			if(this.$refs.login.value==""){
				this.$toast({
						message: '账号不能为空',
							position: 'bottom',
							duration: 2000
				});
			}else if(this.$refs.regin.value==""){
				this.$toast({
						message: '密码不能为空',
							position: 'bottom',
							duration: 2000
				});
			}else{
				for(let i=0;i<this.user.length;i++){
					if((this.$refs.login.value==this.user[i].username)&&(this.$refs.regin.value==this.user[i].pwd)){
						localStorage.setItem("username",this.user[i].username);
						localStorage.setItem("pwd",this.user[i].pwd);
						this.$router.push({name:'userinfo',params:{obj:this.user[i]}});
					}else{
						this.$toast({
								message: '账号或密码错误',
									position: 'bottom',
									duration: 2000
						});
					}
				}
			
			}
		},
		gore(){
			console.log("bbb")
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
