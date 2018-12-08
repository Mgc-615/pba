<template>
	<div class="header">
		<div class="sel">
			<input type="text" class="texts" placeholder="搜索商品" v-model="texv">
			<router-link :to="{name:'selmain',params:{'texv':texv}}" class="selicon" ></router-link>
		</div>
	</div>
</template>
<script>
export default {
  name: 'sel',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
			texv:''
    }
  },
	mounted(){
	},
	methods:{
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	div.header{
		width: 100%;
		height: 3.75rem;
		background: #F2F2F2;
	}
	div.sel{
		width: 90%;
		display: flex;
		padding: 2% 5%;
	}
	div input.texts{
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
</style>
