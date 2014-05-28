var pt = require("./"),
    fs = require('fs');

var IMAGE_PATH = process.argv[2];

fs.open(IMAGE_PATH, 'r', function (e,fd) {
    if (e) throw e;
    else fs.read(fd, Buffer(512), 0, 512, 0, function (e,n,d) {
        if (e) throw e;
        else console.log(pt.parse(d));
    });
});
