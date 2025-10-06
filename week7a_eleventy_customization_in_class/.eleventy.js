const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Tell Eleventy to copy the entire styles folder
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("assets");

  //filter to modify and trim our date to make it more readable
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" })
      .toFormat("LLLL d, yyyy");
  });

  //filter to shorten our content to 100 characters 
  eleventyConfig.addFilter("truncate", (str, len = 100) => {
    return str.length > len ? str.substring(0, len) + "…" : str;
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
