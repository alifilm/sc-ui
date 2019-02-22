<template>
	<div class="slide-nav">
		<div v-for="title in Object.keys(data)">
			<p>{{title}}</p>
			<div class="slide-nav-items" v-for="nav in data[title]">
				<router-link :to="{name:nav.name}">{{nav.desc}}</router-link>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.slide-nav{
		width:270px;
		position: fixed;
		top:0;
		bottom:0;
		margin-top:80px;
		transition:  padding-top 0.3s
	}
</style>
<script>
	import navConf from '../nav.config.json';
	export default{
		data(){
			return{
				data:navConf
			}
		},
		created(){

		}
	}
</script>