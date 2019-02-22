<template>
	<div class="mqButton">
		<sc-button>默认按钮</sc-button>
		<sc-button type="primary">主要按钮</sc-button>

	</div>	
</template>
<script>
	import scButton from '../../packages/button'
	export default{
		name:"mqButton",

		data(){
			return{
				dis:false
			}
		},

		components:{
			'sc-button':scButton
		}
	}
</script>
<style>
	
</style>