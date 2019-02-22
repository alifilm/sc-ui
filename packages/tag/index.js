import scTag from './src/tag'

// istanbul ignore next 

scTag.install = function(Vue){
	Vue.component(scTag.name,scTag);	
} 
export default scTag;