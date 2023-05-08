import autoe from "@w5/utf8/autoe.js";
export default (svg, quality = 82) =>
	nativeBinding.svgWebp(autoe(svg), quality);
