# vue-in-react-library
For more information about why this repo is created or other ways to use Vue.js inside the React.js codebase, please have look at this [article](https://medium.com/@aliafsah1988/how-to-usevue-js-inside-react-js-code-base-properly-3380f09b60f7).


## Using Vue components as library
In this approach we need to build our whole vue project (and not just one component) as a library. For that we can leverage vue-cli and use the 'lib' as target. Something like this:

```
vue-cli-service build — target lib — name vue-lib-components src/main.ts
```

In this example main.ts is the entry point of our project where we are exporting all of our components.
### Things to consider:
Vue.js should be added to our codebase (we need it in our vue-wrapper component which is a react component itself).
### Pros
We can use features like Vuex and pass them via main codes base the main vue instance. So good flexibility.
Proper working with TypeScript is easier. Since we have two separated projects.
### Cons
We need to build the vue project for every change and then use the build version in the main code base (two step build in two different projects).
