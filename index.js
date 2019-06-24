const fs = require('fs');
const JSZip = require('jszip');
const { promisify } = require('util');
const EventEmitter = require('events');

const readFile = promisify(fs.readFile);

class Xmind extends EventEmitter {
  static async load(filename) {
    if (Array.isArray(filename))
      return Promise.all(filename.map(Sketch.load));
    const file = await readFile(filename);
    const doc = await JSZip.loadAsync(file);
    return new Xmind(doc);
  }
  constructor(document){
    super();
    this.document = document;
  }
}

module.exports = Xmind;