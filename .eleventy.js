const twig = require('twig');
const yaml = require('js-yaml');

module.exports = function(eleventyConfig) {
  // Images
  eleventyConfig.addPassthroughCopy("img");

  // CSS
  eleventyConfig.addPassthroughCopy({
    "./node_modules/normalize.css/normalize.css": "./css/normalize.css"
  });
  eleventyConfig.addPassthroughCopy("./css/base.css");
  eleventyConfig.addWatchTarget("./css/");

  // YML
  eleventyConfig.addDataExtension('yml, yaml', (contents) => {
    return yaml.load(contents);
  });

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
    templateFormats: ['twig', 'html', 'md']
  };
};
