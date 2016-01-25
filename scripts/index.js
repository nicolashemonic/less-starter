var less = require('less');
var fs = require('fs');

fs.readFile('../content/bundles/bundle.less', 'utf8', (err, data) => {
    if (err) throw err;

    less.render(data,
    {
        paths: ['../content/bundles'],
        filename: '../content/build/deep/build.css',
        compress: false,
        relativeUrls: true
    },
    function (e, output) {
        console.log(output.css);
        fs.writeFile('../content/build/deep/build.css', output.css, 'utf8');
    });
});