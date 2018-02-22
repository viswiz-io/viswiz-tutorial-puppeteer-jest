const path = require('path');

describe('index page', () => {
	let page;

	beforeAll(async () => {
		page = await __BROWSER__.newPage();
		await page.goto('http://localhost:8080/');
	}, 5000);

	afterAll(async () => {
		await page.close();
	});

	it(
		'should load the index page',
		async () => {
			const text = await page.evaluate(() => document.body.textContent);
			expect(text).toContain('ACME Banana');
		},
		5000,
	);
});
