const path = require('path');
const VisWiz = require('viswiz-sdk');

module.exports = async function() {
	global.__SERVER__.close();

	await global.__BROWSER__.close();

	if (process.env.VISWIZ_API_KEY) {
		const client = new VisWiz(process.env.VISWIZ_API_KEY);
		await client.buildWithImages({
			branch: process.env.TRAVIS_BRANCH || 'master',
			name: process.env.TRAVIS_COMMIT_MESSAGE || 'dev-' + new Date().toISOString(),
			projectID: process.env.VISWIZ_PROJECT_ID,
			revision: process.env.TRAVIS_COMMIT || 'dev-' + new Date().toISOString(),
		}, path.resolve(__dirname, '..', 'results'));
	}
};
