<template>
	<div class="headerWrapper">
		<header class="header">
			<div class="container">
				<router-link class="link" to="">
					<img src="https://www.sccfc.cn/Public/res_pc/images/logo.png" alt="">
				</router-link>
				<ul>
					<!-- 语言选择 -->
					<li class="nav-item lang-item">
						<!-- 下拉菜单组件 -->
						<!-- 中英文切换part -->
					</li>
				</ul>
			</div>
		</header>
		
	</div>
</template>
<style scoped>
	.headeWrapper{
		height:80px;
	}
	.header{
		height:80px;
		line-height: @height;
		position:relative;
		width:100%;
	}
	.container{height:100%;}
	.container a{
		float:left;
		display:block;
/*		height:100%;*/
		padding-top:10px;
		float:left;
	}
	.container ul{
		float:left;
		margin-left:400px;
	}
	.container ul li{
		list-style: none;
		margin:0;
		cursor:pointer;
	}
</style>