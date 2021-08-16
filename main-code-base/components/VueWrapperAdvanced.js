import * as React from 'react'
import {
	i18n, store
} from '../../vue-web-components/dist/vue-lib-components.common'
import "../../vue-web-components/dist/vue-lib-components.css"

const VueWrapper = function(
	{ name, componentProps }){
	const vueRef = React.useRef(null);
	const [vueInstance, setVueInstance] = React.useState(undefined)

	React.useEffect(() => {
		async function createVueInstance() {
			const components = await import('../../vue-web-components/dist/vue-lib-components.common');
			const node = document.createElement('div')
			vueRef.current.append(node)
			const i18nInstance = i18n(Vue);
			const storeInstance = store(Vue);

			componentProps.propi18n = i18nInstance

			setVueInstance(new Vue({
				el: node,
				data() {
					return {
						props: componentProps
					};
				},
				render: function(h) {
					return h(components[name], {
						props: this.props
					});
				},
				i18n: i18nInstance,
				store: storeInstance
			}));
		}
		createVueInstance();

		return () => {
			vueInstance?.$destroy()
		};
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