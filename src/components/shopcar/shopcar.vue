<template>
  <div class="shopcar">
		<p v-if="!car.length" class="nogoods" @click="tohome">购物车空空如也，快去购物吧！</p>
		<div v-else  v-for="(item,key) in car" :key="key">
			<div class="goods1">
				<div class="goodsimg">
					<img :src="item.outside_view">
				</div>
				<div class="goodsmain">
					<p class="gname">{{item.goods_name}}</p>
					<p class="gsd">{{item.simple_desc}}</p>
					<p class="gsp">专享价：<span>￥{{item.shop_price}}</span></p>
				</div>
				<div class="count">
					<button type="button" @click="jian(key)">-</button><input type="number" :value="item.count" @blur="inblur(key)" ref="inblur"><button type="button" @click="add(key)">+</button>
				</div>
			</div>
		</div>
		<div v-show="car.length" class="allp">
			<p>合计:￥{{price}}</p>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'shopcar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
	mounted(){
		if(!localStorage.getItem("username")){
			this.$toast({
					message: '请您先登录',
						position: 'bottom',
						duration: 2000
			});
			this.$router.push({name:'user'})
		}else{
			if(localStorage.getItem("carmsg")){
				this.$store.dispatch("carlo");
			}
		}
	},
	computed:{
		...mapState(["car"]),
		price(){
			let price=0;
				for(let i=0 ;i<this.$store.state.car.length;i++){
					price+=Number(this.$store.state.car[i].count)*Number(this.$store.state.car[i].shop_price);
				}
			return price.toFixed(2);
		}
	},
	methods:{
		jian(index){
			if(this.$store.state.car[index].count==1){
				this.$store.state.car.splice(index,1);
			}else{
				this.$store.state.car[index].count--;
			}
			this.$store.dispatch('increment');
		},
		add(index){
			this.$store.state.car[index].count++;
			this.$store.dispatch('increment');
		},
		tohome(){
			this.$router.push({name:'home'})
		},
		inblur(index){
			// console.log("222",this.$refs.inblur[0].value)
			this.$store.state.car[index].count=Number(this.$refs.inblur[0].value);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nogoods{
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	text-align: center;
	line-height: 30rem;
	font-size: 1.2rem;
	color: grey;
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
	margin-left: 0rem;
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
.count{
	position: absolute;
	top: 3rem;
	right: 0.6rem;
}
.count input{
	font-size: 1rem;
	width: 1.2rem;
	text-align: center;
	margin: 0.5rem;
	outline:none ;
}
.count button{
	width: 1.3rem;
	height: 1.3rem;
	line-height: 1.3rem;
	text-align: center;
	font-size: 1.2rem;
	border: 1px solid #ddd;
	outline:none ;
}
.allp{
	width: 100%;
	height: 3rem;
	position: absolute;
	bottom: 3.2rem;
	border: 1px solid #eee;
	border-bottom: none;
}
.allp p{
	font-size: 1.3rem;
	position: absolute;
	right: 0.5rem;
	top: 0.8rem;
	color: #666;
}
</style>
