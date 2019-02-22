import scInput from './src/input'

// istanbul ignore next 

scInput.install = function(Vue){
	Vue.component(scInput.name,scInput);	
} 
export default scInput;