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
const store =new Vuex.Store({
	state
})
export default store
</script>

<style>

</style>
