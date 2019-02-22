/*
*	@author yuqiang	
*	date:2019/1/31
*/

import scButton from './button/index';

import scInput from './input/index';
import scSelect from './select/index';

import scTag from './tag/index'; 

const components = [
	scButton,
	scInput,
	scSelect,
	scTag
]

const install = function(Vue){
	if(install.installed){return}
	components.map(component => Vue.component(component.name,component))
}

export default {
	install,
	scButton,
	scInput,
	scSelect,
	scTag
}
