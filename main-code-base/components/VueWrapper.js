import * as React from 'react'
import { MyVueComponent } from "../../vue-web-components/dist/vue-lib-components.common"
import "../../vue-web-components/dist/vue-lib-components.css"

const VueWrapper = function(
	{ componentProps }){
	const vueRef = React.useRef(null);
	const [vueInstance, setVueInstance] = React.useState(undefined)

	React.useEffect(() => {
		setVueInstance(new window.Vue({
			el: vueRef.current,
			data() {
				return {
					props: componentProps
				};
			},
			render: function(h) {
				return h(MyVueComponent, {
					props: this.props
				});
			}
		}));
		return () => vueInstance?.$destroy();
	}, []);

	React.useEffect(() => {
		if(vueInstance) {
			const keys = Object.keys(componentProps)
			keys.forEach(key => vueInstance.props[key] = componentProps[key])
		}
	}, [Object.values(componentProps)]);

	return <div id="vue-component" ref={vueRef}></div>;
};

export default VueWrapper