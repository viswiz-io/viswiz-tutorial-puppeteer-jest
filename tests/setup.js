const express = require('express');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

module.exports = async function() {
	const app = express();
	app.use(express.static('public/'));
	global.__SERVER__ = app.listen(8080);

	const browser = await puppeteer.launch({});
	global.__BROWSER__ = browser;
	fs.writeFileSync(
		path.join(__dirname, '..', 'tmp', 'puppeteerEndpoint'),
		browser.wsEndpoint(),
	);
};
