const twig = require('twig');
const yaml = require('js-yaml');

module.exports = function(eleventyConfig) {
  // Images
  eleventyConfig.addPassthroughCopy("CNAME");

  // Images
  eleventyConfig.addPassthroughCopy("img");

  // CSS
  eleventyConfig.addPassthroughCopy({
    "./node_modules/normalize.css/normalize.css": "./css/normalize.css"
  });
  // eleventyConfig.addPassthroughCopy("./css/base.css");
  eleventyConfig.addPassthroughCopy("./_site/css");
  eleventyConfig.addWatchTarget("./css/");

  // YML
  eleventyConfig.addDataExtension('yml, yaml', (contents) => {
    return yaml.load(contents);
  });

  // Set a path for deploying to a subdirectory
  // If your site will be at the root of your domain (e.g., example.com),
  // you can leave this as '/' or set it to an empty string ''.
  // If your site will be at example.com/blog/, set this to '/blog/'.
  eleventyConfig.addGlobalData("path", "/"); // Default to root

  // Twig
  eleventyConfig.addTemplateFormats('twig');
  eleventyConfig.addExtension('twig', {
    compile: async (inputContent, inputPath) => {
      const template = twig.twig({
        data: inputContent,
        path: `./${inputPath}`
      });
      return async (data) => {
        return template.render(data);
      };
    },
  });
  twig.cache(false);
  return {
    markdownTemplateEngine: 'twig',
    htmlTemplateEngine: 'twig',
    templateFormats: ['twig', 'html', 'md'],
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
