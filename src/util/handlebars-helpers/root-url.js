/*global module, require*/
'use strict';
const path = require('path');
module.exports = function rootUrl(urlPath) {
	return urlPath.split(path.sep).slice(1).map(() => '../').join('') || './';
};
