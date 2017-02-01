import _ from 'lodash';

const context = require.context("./", false, /\.js$/);
const components = context
	.keys()
	.filter(name => name.indexOf('index') === -1)
	.map(name => context(name).default);

// [{ id: 1, component: bleh }, { id: 2, component: whoa }]
// turns into
// { 1: bleh, 2: whoa }
// with the adjacent code

export default _.zipObject(
	components.map(c => c.id),
	components.map(c => c.component));
