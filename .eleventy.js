const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) { 
    
  const md = new markdownIt({
    html: true
  }); 
    
  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  });
    
  eleventyConfig.addPassthroughCopy("./src/about");
  eleventyConfig.addPassthroughCopy("./src/aono");  
  eleventyConfig.addPassthroughCopy("./src/blog");
  eleventyConfig.addPassthroughCopy("./src/book-club");
  eleventyConfig.addPassthroughCopy("./src/diary-2022");
  eleventyConfig.addPassthroughCopy("./src/evil-listicle");
  eleventyConfig.addPassthroughCopy("./src/keypages");
  eleventyConfig.addPassthroughCopy("./src/link-directory");    
  eleventyConfig.addPassthroughCopy("./src/pokemon");
  eleventyConfig.addPassthroughCopy("./src/pippen")
  eleventyConfig.addPassthroughCopy("./src/s");
  eleventyConfig.addPassthroughCopy("./src/silly-stuff");
  eleventyConfig.addPassthroughCopy("./src/update-log");
  eleventyConfig.addPassthroughCopy("./src/yume-nikki");
    
  eleventyConfig.addPassthroughCopy("./src/fonts");
    
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
    templateFormats : ["html", "md", "njk", "js"],  
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk"
  };
};