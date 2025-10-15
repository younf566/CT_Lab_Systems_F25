module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("fonts");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};