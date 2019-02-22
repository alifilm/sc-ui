import Vue from 'vue'
import Router from 'vue-router'
import navConf from '../nav.config.json'

Vue.use(Router)

let routes = [];

Object.keys(navConf).forEach((header) => {
	console.log(header)
	routes = routes.concat(navConf[header])

})
console.log(routes)
let addComponent = (router) => {
	router.forEach((route) => {
		// console.log(route)
		if(route.type === 'pages'){
			route.component = r => require.ensure([], ()=>
			r(require(`../components/${route.name}.vue`)))
			return
		}
		route.component = r => require.ensure([], ()=>
			r(require(`../docs/${route.name}.md`)))
	})
}
addComponent(routes)

export default new Router({
  routes
})
