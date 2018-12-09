<template>
	<div class="selmain">
	<div class="sel">
		<input type="text" class="texts" ref="texts" placeholder="搜索商品" v-model="texv">
		<button class="selicon" @click="postv()"></router-link>
				<!-- <router-view/> -->
		</button>
	</div> 
	<div class="goods">
		<ul>
			<li v-for="(item,key) in goods" :key="key" v-if="!show">
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
							<img src="static/img/shopcart-light.png"  v-if="item.iconstatus>0" @click="add(item)" />
							<img src="static/img/shopcart-unlight.png"  @click="noshop()" v-else />
						</div>
					</div>
			</li>
			<li v-for="(item,key) in show" :key="key" v-if="show">
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
							<img src="static/img/shopcart-light.png"  v-if="item.iconstatus>0" @click="add(item)" />
							<img src="static/img/shopcart-unlight.png"  @click="noshop()" v-else />
						</div>
					</div>
			</li>
			<li v-if="len===0">
				<div>{{nosel()}}</div>
			</li>
		</ul>
		
	</div>
	<!-- {{goods}} -->
	<!-- {{show}} -->
	</div>
</template>

<script>
	
import axios from 'axios'
export default {
  name: 'selmain',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
	  goods:[],
	  texv:'',
	  show:this.goods,
	  len:1
    }
  },
  components:{
	  // sel
  },
  mounted(){
	 this.getData();
  },
  methods:{
	  getData(){
	  let url ='http://localhost:86/static/json/homem.json';
	  	axios.get(url).then(res=>{
	  		this.goods=res.data.goods;
	  	},err=>{
	  		console.log("error")
	  	})
	  },
	  gettextv(str){
		  this.str=str;
			console.log(this.str);
			this.selgoods(str);
	  },
	 
	  selgoods(str){
	  	let arr=this.goods;
	  	let arr2=[];
	  	if(str==''){
			this.show=arr;
	  		return arr;
	  	}else if(str=='搜索商品'){
			this.show=arr;
			return arr;
		}else if(str==undefined){
			this.show=arr;
			return arr;
		}else{
			for(let i=0;i<this.goods.length;i++){
				if(this.goods[i].goods_name.indexOf(str)>=0){
					arr2.push(this.goods[i]);
				}
			}
			
			this.show=arr2;
			this.len=arr2.length;
			console.log("this.len",this.len)
			return arr2;
	  }	
	  },
	  postv(){
	  let str=this.$refs.texts.value;
		console.log(str);
	  this.selgoods(str); 
	  },
	  Trim(str)
		{ 
		  return str.replace(/(^\s*)|(\s*$)/g, ""); 
		},
	noshop(){
		this.$toast({
				message: '抱歉,暂时缺货',
					position: 'bottom',
					duration: 2000
		});
	},
	nosel(){
		this.$toast({
				message: '抱歉,搜索的商品不存在',
					position: 'center',
					duration: 2000
		});
		this.selgoods();
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
  },
  computed:{
// 	  postv(){
// 	  this.str=document.getElementsByClassName("texts")[0].value;
// 	  }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	div.sel{
			width: 90%;
			display: flex;
			padding: 2% 5%;
			background-color: #F2F2F2;
		}
	input.texts{
		width: 90%;
		height: 2.5rem;
		color: #666;
		padding-left: 0.625rem;
		border-radius: 0.3125rem 0 0 0.3125rem;
		outline:none ;
	}
	.selicon{
		width: 9%;
		height: 2.5rem;
		background-color: #fff;
		border: none;
		background: #fff url(search-input.png) no-repeat 0rem;
		background-size: 70%;
		border-radius: 0 0.3125rem 0.3125rem 0;
		outline:none ;
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
