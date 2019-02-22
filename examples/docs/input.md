<style lang="scss"> 
	.demo-box{
		.sc-input{
			width:200px;
		}
	}
</style>
<script>
	export default{
		data(){
			return{
				inputValue1:''
			}
		}
	}
</script>
# input 输入框

input的表单输入框

### 基础用法
<div class="demo-box">
	<div class="demo-block">
		<sc-input placeholder="这里是内容"></sc-input>	
	</div>

  ::: demo
  ```html
	<sc-input placeholder="这里是内容"></sc-input>
  ```
  :::
	
</div>

### input禁用

<div  class="demo-box">
	<div class="demo-block">
		<sc-input placeholder="这里是内容" disabled></sc-input>
	</div>

   ::: demo
   ```html
   <sc-input placeholder="这里是内容" disabled></sc-input>
   ```
   :::

</div>

### input清空

<div  class="demo-box">
	<div class="demo-block">
		<sc-input placeholder="这里是内容" v-model="inputValue1" clearable></sc-input>
	</div>

   ::: demo
   ```html
      <sc-input placeholder="这里是内容" v-model="inputValue1" clearable></sc-input>
   ```
   :::

</div>

