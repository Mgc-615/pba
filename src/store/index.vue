<template>
  <div id="store">
	
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state={
	car:[]
}
const mutations={
	increment(state){
		localStorage.setItem("carmsg",JSON.stringify(state.car));
	},
	carlo(state){
		state.car=JSON.parse(localStorage.getItem("carmsg"));
	}
}
const actions={
	increment(context){
		context.commit("increment");
	},
	carlo(context){
		context.commit("carlo");
	}
}
const store =new Vuex.Store({
	state,
	mutations,
	actions
})
export default store
</script>

<style>

</style>
