<template>
  <div class="shopcar">
		<p v-if="!car.length">还没有东西快去购物吧！</p>
		<div v-else  v-for="(item,key) in car" :key="key">
		{{item.goods_name}}=====><button type="button" @click="jian(key)">-</button>{{item.count}}<button type="button" @click="add(key)">+</button>
		</div>
		<div>{{price}}</div>
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
		}
	},
	computed:{
		...mapState(["car"]),
		price(){
			let price=0;
			for(let i=0 ;i<this.$store.state.car.length;i++){
				console.log("i",i);
				console.log("i.count",this.$store.state.car[i].count);
				console.log("i.shop_price",this.$store.state.car[i].shop_price);
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
		},
		add(index){
			this.$store.state.car[index].count++;
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
