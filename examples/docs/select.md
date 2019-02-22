## 选择框select

<script>
	export default{
		data(){
			return{
				value1:'',
				options:[{
					value:'chose1',
					label:'小米粥'
				},{
					value:'chose2',
					label:'黑米粥'
				},{
					value:'chose3',
					label:'南瓜粥'
				}]
			}
		}
	}
</script>
<div class="demo-box">
	<div class="demo-block">
		<sc-select v-model="value" placholder="请选择粥">
			<sc-option v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value"
			>
				
			</sc-option>	
		</sc-select>
	</div>
</div>