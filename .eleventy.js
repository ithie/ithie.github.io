const markdownIt = require("markdown-it");
const markdownItContainer = require("markdown-it-container");
const markdownItInclude = require('markdown-it-include');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addWatchTarget("src/css/");

    const md = markdownIt({
        html: true,
        breaks: true,
        linkify: true
      }).use(
        markdownItContainer, 'container'
      ).use(
        markdownItInclude, '/_includes'
      ).use(
        markdownItAttrs, {
          allowedAttributes: ['id', 'class']
        }
      );

  eleventyConfig.setLibrary("md", md);

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};