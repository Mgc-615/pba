<template>
  <div class="home">
		<sel></sel>
		<div class="move">
			<mt-swipe :auto="4000" class="swipe">
				<mt-swipe-item class="mtsi" v-for="(item,key) in move" :key="key"><img :src="item.imgurl"></mt-swipe-item>
			</mt-swipe>
		</div>
		<ul class="main-product">
       <li v-for="(item,key) in banner" :key="key"><img :src="item.imgurl" :alt="item.alt"></a></li>
    </ul>
		<div class="binner">
			<img src="static/img/banner-hot.jpg">
		</div>
		<div class="goods">
			 <ul>
			 	<li v-for="(item,key) in goods" :key="key">
						<div class="goods1">
							<div class="goodsimg">
								<img :src="item.outside_view">
							</div>
							<div class="goodsmain">
								<p class="gname">{{item.goods_name}}</p>
								<p class="gsd">{{item.simple_desc}}</p>
								<p class="gsp">专享价：<span>￥{{item.shop_price}}</span></p>
							</div>
							<div class="shopcar">
								<img src="static/img/shopcart-light.png"  v-if="item.iconstatus>0" @click="add(item)">
								<img src="static/img/shopcart-unlight.png"  @click="noshop()" v-else >
							</div>
						</div>
				</li>
			 </ul>
		</div>
	</div>
</template>

<script>
import sel from '@/components/sel/sel'
import vue from 'vue'
import axios from 'axios'
import { Swipe, SwipeItem } from 'mint-ui';
import {Toast} from 'mint-ui';
import "mint-ui/lib/style.css"

export default {
  name: 'index',
	props:["user"],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
			banner:[],
			move:[],
			goods:[],
			flag:false,
			shops:[]
    }
  },
	mounted(){
		this.getData()
	},
	components:{
		sel
	},
	methods:{
		getData(){
		let url ='http://localhost:86/static/json/homem.json';
			axios.get(url).then(res=>{
				this.banner=res.data.banner;
				this.move=res.data.move;
				this.goods=res.data.goods;
			},err=>{
				console.log("error")
			})
		},
		noshop(){
			 this.$toast({
				   message: '抱歉,暂时缺货',
						position: 'bottom',
						duration: 2000
			 });
		},
		add(obj){
			if(localStorage.getItem("username")){
				 if(!this.$store.state.car.length){
				 vue.set(obj, 'count', 1);
					console.log("obj",obj)
					this.$store.state.car.push(obj);
					// localStorage.setItem("carmsg",JSON.stringify(this.$store.state.car));
					this.$store.commit('increment');
					this.$toast({
							message: '成功加入购物车',
								position: 'bottom',
								duration: 2000
					});
					return
				}
				console.log("this.user",this.user)
				for(let i=0;i<this.$store.state.car.length;i++){
					if(this.$store.state.car[i].goods_id==obj.goods_id){
							this.$store.state.car[i].count++;
							this.$store.dispatch('increment');
							// localStorage.setItem("carmsg",JSON.stringify(this.$store.state.car));
							this.$toast({
									message: '成功加入购物车',
										position: 'bottom',
										duration: 2000
							});
							return
					}
				}
				vue.set(obj, 'count', 1);
				console.log("obj",obj)
				this.$store.state.car.push(obj);
				localStorage.setItem("carmsg",JSON.stringify(this.$store.state.car));
				this.$toast({
						message: '成功加入购物车',
							position: 'bottom',
							duration: 2000
				});
			}else{
				this.$toast({
						message: '请您先登录',
							position: 'bottom',
							duration: 2000
				});
				this.$router.push({name:'user'});
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.home{
	
}
.home::-webkit-scrollbar {display:none}
ul.main-product{
	width: 100%;
	display: flex;
	justify-content: space-between;
	border-bottom: 0.0625rem solid #F0F0F0;
}
	ul li{
	border-right: 0.0625rem solid #F0F0F0;
}
ul li img{
	width: 7.4375rem;
}
.move{
	width: 100%;
	height: 8.75rem;
	/* border: 1px solid #f00; */
}
.swipe{
	width: 100%;
	height: 8.75rem;
}
.mtsi{
	width: 100%;
	height: 8.75rem;
}
.mtsi img{
	width: 100%;
}
.binner{
	border-bottom: 3px solid #eee;
}
.binner img{
	width: 100%;
	
}
.goods1{
	display: flex;
	padding: 0.625rem 1rem;
	position: relative;
	border-bottom: 0.0625rem solid #eee;
}
.goodsimg{
	
}
.goodsimg img{
	width: 6.5625rem;
}
.goodsmain {
	margin-top: 0.625rem;
	margin-left: 1rem;
}
.goodsmain p{
	height: 1.8rem;
	line-height: 1.8rem;
}
p.gname{
	font-size: 0.95rem;
}
p.gsd{
	font-size: 0.85rem;
	color: #999;
}
p.gsp{
	font-size: 0.85rem;
}
p.gsp span{
	color: #fd417b;
}
.shopcar{
	position: absolute;
	top: 3rem;
	right: 1.5rem;
}
.shopcar img{
	width: 2rem;
}
</style>
