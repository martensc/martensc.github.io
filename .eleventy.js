const path = require('path');
const twig = require('twig');
const yaml = require('js-yaml');
const browserslist = require('browserslist');
const { bundle, browserslistToTargets } = require('lightningcss');

module.exports = function(eleventyConfig) {
  // Copy static files
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  eleventyConfig.addPassthroughCopy("src/img");

  // CSS via LightningCSS with inline source maps
  eleventyConfig.addTemplateFormats('css');
  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    useLayouts: false,
    compile: async function(_inputContent, inputPath) {
      const parsed = path.parse(inputPath);
      if (parsed.name.startsWith('_')) return;

      if (_inputContent.includes('@import')) {
        const fileList = [];
        const importRuleRegex = /@import\s+(?:url\()?['"]?([^'"\);]+)['"]?\)?.*;/g;
        let match;
        while ((match = importRuleRegex.exec(_inputContent))) {
          fileList.push(parsed.dir + '/' + match[1]);
        }
        this.addDependencies(inputPath, fileList);
      }

      const isProduction = process.env.NODE_ENV === 'production';
      const targets = browserslistToTargets(browserslist('> 0.2% and not dead'));

      return async () => {
        const { code, map } = bundle({
          filename: path.resolve(inputPath),
          minify: true,
          sourceMap: !isProduction,
          targets,
          drafts: { nesting: true, customMedia: true },
        });

        let css = Buffer.from(code).toString('utf8');
        if (map) {
          const mapJson = JSON.parse(Buffer.from(map).toString('utf8'));
          mapJson.sourceRoot = 'file:///';
          const mapBase64 = Buffer.from(JSON.stringify(mapJson)).toString('base64');
          css += `\n/*# sourceMappingURL=data:application/json;base64,${mapBase64} */`;
        }
        return css;
      };
    },
  });

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
