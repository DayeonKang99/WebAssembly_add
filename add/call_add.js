const importObject = { console: { log: (arg) => console.log(arg) } };

WebAssembly.instantiateStreaming(fetch("add.wasm"), importObject).then(
  (obj) => obj.instance.exports.add(10, 100)
);