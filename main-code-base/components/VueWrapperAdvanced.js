import * as React from 'react'
import "../../vue-web-components/dist/vue-lib-components.css"

const VueWrapper = function(
	{ name, componentProps, disableRerender }){
	const vueRef = React.useRef(null);
	const [vueInstance, setVueInstance] = React.useState(undefined)

	async function createVueInstance() {
		const components = await import('../../vue-web-components/dist/vue-lib-components.common');
		const { i18n, store } = components;

		const node = document.createElement('div');
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

	const rerenderSource = disableRerender ? [] : [componentProps]
	// by having disableRerender, rerenderSource would be [] and it means just render this component once.
	React.useEffect(() => {
		createVueInstance();
		return () => {
			vueInstance?.$destroy()
			setVueInstance(undefined)
			vueRef.current.innerHTML = ""
		};
	}, rerenderSource);

	return <div id="vue-component" ref={vueRef}></div>;
};

export default VueWrapper