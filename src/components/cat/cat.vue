<template>
  <div class="cat">
		<sel></sel>
		<div class="allg"><img src="static/img/caption-all.jpg" />
		<ul class="ag">
			<li v-for="(item,key) in allgoods" :key="key">
				<router-link :to="{name:'selmain',params:{'texv':item.gname}}" class="selicon" ><img :src="item.imgurl" /></router-link>
			</li>
		</ul>
		</div>
		<div class="allg"><img src="static/img/caption-category.jpg" />
			<ul class="cg">
				<li v-for="(item,key) in category" :key="key" :class="{'pink':item.type===1}">
					<router-link :to="{name:'selmain',params:{'texv':item.ename}}" class="selicon" >{{item.ename}}</router-link>
					<!-- <span ></span> -->
				</li>
			</ul>
		</div>
		<div class="allg effg"><img src="static/img/caption-effect.jpg" />
			<ul class="cg">
				<li v-for="(item,key) in efficacy" :key="key" :class="{'pink':item.type===1}">
					<router-link :to="{name:'selmain',params:{'texv':item.ename}}" class="selicon" >{{item.ename}}</router-link>
				</li>
			</ul>
		</div>
  </div>
</template>

<script>
import sel from '@/components/sel/sel'
import axios from 'axios'
export default {
  name: 'cat',
  data () {
    return {
		allgoods:[],
		category:[],
		efficacy:[]
    }
  },
	mounted() {
		this.getData();
	},
  methods:{
	  getData(){
	  let url ='http://localhost:86/static/json/homem.json';
	  	axios.get(url).then(res=>{
	  		this.allgoods=res.data.allgoods;
	  		this.category=res.data.category;
	  		this.efficacy=res.data.efficacy;
 	  	},err=>{
	  		console.log("error")
	  	})
	  }
  },
  components:{
	  sel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.allg{
	padding: 0.5rem;
}
.allg img{
	width: 100%;
}
.ag {
	display: flex;
	flex-flow: wrap;
	justify-content: space-between;
}
.ag li{
	width: 40%;
	padding: 0.5rem 0.8rem;
	margin:0.5rem 0;
	border: 1px solid #eee;
	box-shadow:0.1rem 0.3rem 0.4rem #ddd;
}
.ag li img{
	width: 100%;
}
.cg {
	display: flex;
	flex-flow: wrap;
	justify-content: space-between;
}
.cg li{
	width: 30%;
	padding: 0.3rem 0;
	margin:0.5rem 0;
	border: 1px solid #ede;
	text-align: center;
	height: 1.8rem;
	line-height: 1.8rem;
	border-radius:1.6875rem;
	font-size: 0.95rem;
	color: #333;
}
.cg .pink{
	border: 1px solid #FF498C;
	color: #FF498C;
}

.effg{
	margin-bottom: 4rem;
}

</style>
