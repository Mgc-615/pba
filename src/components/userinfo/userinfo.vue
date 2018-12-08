<template>
  <div id="userinfo">
	{{$route.params.obj}}
	{{obj}}
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
			this.$router.push({name:'user'})
		}
	},
	computed:{
		
	}
}
</script>

<style>

</style>
