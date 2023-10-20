const markdownIt = require("markdown-it");
const markdownItContainer = require("markdown-it-container");
const markdownItInclude = require('markdown-it-include');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");

    const md = markdownIt({
        html: true,
        breaks: true,
        linkify: true
      }).use(markdownItContainer, 'container').use(markdownItInclude, '/_includes');

      console.log(md.render(':::: container cl\n*content*\n\n'));
  eleventyConfig.setLibrary("md", md);
};