const autoe = require("@w5/utf8/autoe.cjs");
module.exports = (svg) => {
	return svgWebp(autoe(svg));
};
