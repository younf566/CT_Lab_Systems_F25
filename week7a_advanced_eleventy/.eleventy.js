const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Tell Eleventy to copy the entire styles folder
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    // Format in Eastern Time (America/New_York) with time and short zone name
    return DateTime.fromJSDate(dateObj, { zone: "America/New_York" })
      .toFormat("LLLL d, yyyy, h:mm a 'EST'");
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};



