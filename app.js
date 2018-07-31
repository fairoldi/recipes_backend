const fs = require('fs');
const im = require('simple-imagemagick');

const imgFolder = 'img/ingredients/resized';
let imgs = fs.readdirSync(imgFolder).map(name => imgFolder + '/' + name);

function montage(imgs, layout, geometry, outputname) {
  let args = imgs;
  args.push('-tile');
  args.push(layout);
  args.push('-geometry');
  args.push(geometry);
  args.push(outputname);

  im.montage(args, function(err, stdout) {
    if (err) console.log(err);
    console.log(stdout);
  });
}

function genRadom(arr, n) {
  let idxs = [...Array(arr.length).keys()];
  let ret = [];
  while (n > 0) {
    i = Math.floor(Math.random() * idxs.length);
    ret.push(arr[idxs[i]]);
    idxs[i] = idxs.pop();
    n--;
  }

  return ret;
}

for (let i = 0; i < 20; i++) {
  let srcs = genRadom(imgs, 3);
  console.log(srcs);
  montage(srcs, '3x1', '+0+0', `test${i}.png`);
}

montage(
  ['eggs.png', 'bacon.png', 'potatoes.png'].map(name => imgFolder + '/' + name),
  '3x1',
  '+0+0',
  `test${i}.jpg`
);
