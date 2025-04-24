const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  // Standard passthrough copies
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addWatchTarget("./src/");
  eleventyConfig.ignores.add("src/data/**");

  // Copy robots.txt and sitemap.xml to the output directory
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");

  return {
    pathPrefix: "/",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: path.resolve(__dirname, "_site")
    }
  };
};
