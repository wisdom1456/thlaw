const lazyImagesPlugin = require("eleventy-plugin-lazyimages");

const CONFIG = {
    dir: {
        input: "src",
        output: "_site",
        include: "includes"
    },
    passthroughsFileCopy: true,
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"]
};

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(lazyImagesPlugin, {
        imgSelector: ".lazyimages img"
    });
    eleventyConfig.addPassthroughCopy("assets");

    return CONFIG;
};
