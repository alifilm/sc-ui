<template>
	<button
		class="sc-button"
		:disabled="buttonDisabled"
		:type="nativeType"
		:class="[
			type ? 'sc-button--' + type :'',
			{
				'is-disabled':buttonDisabled,
				'is-plain':plain,				
				'is-round':round,
			}
		]"
	>
		<i v-if="loading" class="sc-icon-loading"></i>
		<i :class="icon" v-if="icon && !loading"></i>
		<span v-if="$slots.default"><slot></slot></span>	
	</button>
</template>
<script>
	export default {
		name:'scButton',

		props:{
			type:{
				type:String,
				default:'default'
			},
			icon:{
				type:String,
				default:''
			},
			disabled:Boolean,
			nativeType:{
				type:String,
				default:'button'
			},
			loading:Boolean,
			plain:Boolean,
			round:Boolean,
		},

		computed:{
			buttonDisabled(){
				return this.disabled;
			}
		}
	}
</script>