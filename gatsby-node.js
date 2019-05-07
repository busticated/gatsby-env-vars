process.env.MY_CLIENT_CONFIGS = JSON.stringify({
  foo: 1,
  bar: false,
  baz: {
    qux: [1, 2, 3]
  }
});


exports.onCreateWebpackConfig = ({ stage, actions, plugins, getConfig }) => {
	actions.setWebpackConfig({
		plugins: [
			plugins.define({
				'process.env': {
					MY_CLIENT_CONFIGS: JSON.stringify(process.env.MY_CLIENT_CONFIGS)
				}
			})
		]
	});
};
