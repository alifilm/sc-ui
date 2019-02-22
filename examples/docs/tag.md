<script>
	export default{
		data(){
			return{
				tags:['包子','饺子','馒头']
			}
		},
		methods:{
			handleClose(tag){
				this.tags.splice(this.tags.indexOf(tag),1)
			}
		}
	}
</script>
## 标签tag

### 基本使用
<div class="demo-box">
	<div class="demo-block">
		<sc-tag>标签1</sc-tag>
		<sc-tag closeable>标签2</sc-tag>
		<sc-tag 
			@close="handleClose(tag)" 
			v-for="tag in tags"
			closeable
			:key="tag">
				{{tag}}
		</sc-tag>	
	</div>
</div>