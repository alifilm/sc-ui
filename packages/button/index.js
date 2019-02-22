import scButton from './src/button'

// istanbul ignore next 

scButton.install = function(Vue){
	Vue.component(scButton.name,scButton);	
} 
export default scButton;
