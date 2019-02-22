import scSelect from './src/select'

// istanbul ignore next 

scSelect.install = function(Vue){
	Vue.component(scSelect.name,scSelect);	
} 
export default scSelect;