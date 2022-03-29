const imageToAscii = require("image-to-ascii");

// Passing options
imageToAscii("maxheadroom.jpg", {
    pxWidth: 2,
    colored: true,
    size: {
      width: 28 
    }
}, (err, converted) => {
    console.log(err || converted);
});