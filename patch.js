import autoe from "@w5/utf8/autoe.js";
export default (svg, quality = 82) => svgWebp(autoe(svg), quality);
