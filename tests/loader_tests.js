const Loader = require("./../lib/loader");
const expect = require("chai").expect;
const Sinon = require("sinon");
var stdout = require("test-console").stdout;
var stderr = require("test-console").stderr;

describe("Tests", function() {
  var _sut;
  beforeEach(() => {
		_sut = Loader;
		clock = Sinon.useFakeTimers();
  });

  it("", () => {
    stdout.inspectSync(function(output) {
			_sut.start(1000);
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
