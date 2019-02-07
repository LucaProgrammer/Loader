const Loader = require("./../lib/loader");
const expect = require("chai").expect;
const Sinon = require("sinon");
var stdout = require("test-console").stdout;
var stderr = require("test-console").stderr;

describe("Tests", function() {
  var _sut;
	var message;

  beforeEach(() => {
		_sut = Loader;
		messagge = "Loading"
    clock = Sinon.useFakeTimers();
  });

  it("", () => {
    stdout.inspectSync(function(output) {
      _sut.start(1000, message);
      clock.tick(10000);
      _sut.stop();
      expect(output.join("")).eq("Loading..........");
    });
  });

  afterEach(() => {
    _sut = {};
    clock = Sinon.restore();
  });
});
