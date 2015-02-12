var url = require("..")
var test = require("tap").test

test("oss-license-name-to-url", function (t) {
  t.equal(url("apache 2"), "http://opensource.org/licenses/Apache-2.0")
  t.equal(url("apache-2"), "http://opensource.org/licenses/Apache-2.0")
  t.equal(url("bsd"), "http://opensource.org/licenses/BSD-2-Clause")
  t.equal(url("x11"), "http://opensource.org/licenses/MIT")
  t.equal(url("X11"), "http://opensource.org/licenses/MIT")
  t.end()
})
