(function (global, factory) {
  var root, exportsName, factoryArguments;
  if (typeof define === "function" && define.amd) {
    define(["exports", "foo", "foo-bar", "./directory/foo-bar"], factory);
  } else {
    if (module && typeof module.exports !== "undefined") {
      factoryArguments = [module.exports, require("foo"), require("foo-bar"), require("./directory/foo-bar")];
      root = module;
      exportsName = "exports";
    } else {
      factoryArguments = [global.actual = {}, global.foo, global.fooBar, global.directoryFooBar];
      root = global;
      exportsName = "actual";
    }
    factory.apply(null, factoryArguments);

    if (Object.keys(root[exportsName]).length == 1 && root[exportsName].propertyIsEnumerable("default")) {
      root[exportsName] = root[exportsName]["default"];
    }
  }
})(this, function (exports, _foo, _fooBar, _directoryFooBar) {
  "use strict"
});
