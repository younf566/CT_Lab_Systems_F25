const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Tell Eleventy to copy the entire styles folder
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
      .toFormat("LLLL d, yyyy");
  });

  return {
    dir: {
      input: ".",
      output: "docs"
    }
  };
};


