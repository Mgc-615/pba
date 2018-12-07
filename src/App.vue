<template>
  <div id="app">
		<div class="nav">
			<router-link to="/home" router-link-exact-active="aaa"><div @click="homea"><span><img src="../static/img/icon_home.png" v-show="!home" /><img src="../static/img/icon_home_active.png" v-show="home" /></span><p>首页</p></div></router-link>
			<router-link to="/cat"><div @click="categorya"><span><img src="../static/img/icon_category.png" v-show="!category"/><img src="../static/img/icon_category_active.png" v-show="category"/></span><p>分类 </p></div></router-link>
			<router-link to="/shopcar"><div><span><img src="../static/img/icon_cart.png" /></span><p>购物车</p></div></router-link>
			<router-link to="/user"><div><span><img src="../static/img/icon_my.png" /></span><p>我的</p></div></router-link>
		</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
	data(){
		return{
			home:true,
			category:false
		}
	},
	methods:{
		homea(){
			this.home=true;
			this.category=false;
		},
		categorya(){
			this.category=true;
			this.home=false;
		}
	}
}
</script>

<style>
#app {
}
div .nav{
  width: 100%;
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: space-around;
	text-align: center;
	border-top: 0.0625rem solid #eee;
	font-size: 0.75rem;
	background: #fff;
	z-index: 20;
}
div .nav img{
	width: 1.875rem;
	height: 1.875rem;
}
.router-link-active {
	color: #f00;
}
</style>
