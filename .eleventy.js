module.exports = function(eleventyConfig) {
  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };

  let markdownLib = markdownIt(options).use(require("./plugin").default, { theme: "light_vs" })
  eleventyConfig.setLibrary("md", markdownLib);
};
