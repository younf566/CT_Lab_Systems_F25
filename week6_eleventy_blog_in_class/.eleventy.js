module.exports = function(eleventyConfig) {
  // Tell Eleventy to copy the entire styles folder
  eleventyConfig.addPassthroughCopy("styles");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};