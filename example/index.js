const Xmind = require('..');

(async () => {

  const doc = await Xmind.load('/tmp/demo.xmind');
  console.log(doc);

})();