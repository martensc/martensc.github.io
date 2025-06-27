const twig = require('twig');
const yaml = require('js-yaml');

module.exports = function(eleventyConfig) {
  // Images
  eleventyConfig.addPassthroughCopy("CNAME");

  // Images
  eleventyConfig.addPassthroughCopy("src/img");

  // CSS
  eleventyConfig.addWatchTarget("src/css/");

  // YML
  eleventyConfig.addDataExtension('yml, yaml', (contents) => {
    return yaml.load(contents);
  });

  // Set a path for deploying to a subdirectory
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
