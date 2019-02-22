<template>
	<div 
		class="sc-select">
		<div 
			class="sc-select__tags"
			v-if="multiple"
			ref="tags"
			:style="{'max-width':inputWidth - 32 + 'px'}">
			<span v-if="collapsetags && selected.length">
				
			</span>
			<transition-group @after-leave="resetInput" v-if="!collapseTags">
				
			</transition-group>
			<input 
			   type="text"
			   class="sc-select_input"
			   :class="[selectSize ? `is-${selectSize}`: '']"
			   @focus="handleFocus"
			   @input="debounceQuery"
			   v-model="query"
			   ref="input"
			   >
			
		</div>
		<sc-input
			type="text"
			ref="reference"
			:placeholer="currentPlaceholder"
			:name="name"
			:id="id"
			>
			
		</sc-input>
	</div>	
</template>
<script>
	export default{
		name:'scSelect',
		props:{
			name:String,
			id:String,
			automaticDropdown:Boolean,
			filterable:Boolean,
			multiple:Boolean,
		},
		data(){
			return{
				visible:false,
				softfocus:false,
				currentPlaceholder:'',
				menuVisibleOnfocus:false,
			}
		},
		methods:{
			handleFocus(event){
				if(!this.softfocus){
					if(this.automaticDropdown || this.filterable){
						this.visible = true;
						this.menuVisibleOnfocus = true;
					}
					this.$emit('focus',event)
				}else{
					this.softfocus = false;
				}
			}
		}
	}
</script>
