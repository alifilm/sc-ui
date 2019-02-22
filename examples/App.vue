<template>
  <div id="app" class="is-component">
    <header-part></header-part>
    <div class="main-cnt">
    	<div class="page-component_scroll sc-scrollbar">
    		<div class="sc-scrollbar__wrap">
          <div class="page-container page-component">
            <slide-nav></slide-nav>
            <router-view class="view"></router-view>
          </div> 
        </div>
    	</div>   	
    </div> 
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
  },
  mounted(){
  	console.log(/^component-/.test(this.$route.name || ''))
  }
}
</script>

<style lang="scss">
@import 'assets/style/common.scss';

</style>
