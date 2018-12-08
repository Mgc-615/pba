<template>
  <div id="app">
		<div class="nav"> 
			<router-link to="/home" ><div @click="homea"><span><img src="../static/img/icon_home.png"  class="hof" /><img src="../static/img/icon_home_active.png"  class="hot" /></span><p>首页</p></div></router-link>
			<router-link to="/cat"><div @click="categorya"><span><img src="../static/img/icon_category.png"  class="hof" /><img src="../static/img/icon_category_active.png"  class="hot" /></span><p>分类 </p></div></router-link>
			<router-link to="/shopcar"><div><span><img src="../static/img/icon_cart.png" class="hof" /><img src="../static/img/icon_cart_active.png"  class="hot" /></span><p>购物车</p></div></router-link>
			<router-link to="/user"><div><span><img src="../static/img/icon_my.png" class="hof" /><img src="../static/img/icon_my_active.png"  class="hot" /></span><p>我的</p></div></router-link>
		</div>
    <router-view :user="user"/>
  </div>
</template>

<script>
export default {
  name: 'App',
	data(){
		return{
			home:true,
			category:false,
			user:[{"username":"admin","pwd":"admin","shops":[]}]
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
	overflow-x :hidden;
}
div .nav{
  width: 100%;
	position: fixed;
	bottom: -0.2rem;
	display: flex;
	justify-content: space-around;
	text-align: center;
	border-top: 0.0625rem solid #eee;
	font-size: 0.75rem;
	background: #fff;
	z-index: 20;
	padding: 0.3rem 0rem;
}
div .nav img{
	width: 1.875rem;
	height: 1.875rem;
}
.router-link-active {
	color: #f00;
}
.hot{
	display: none;
}
.router-link-active .hof{
	display: none;
}
.router-link-active .hot{
	display: inline-block;
}
</style>
