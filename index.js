var isPositiveInteger = require('is-positive-integer')
var leftpad = require('left-pad')

module.exports = LeftPadFW

function LeftPadFW (str, n, ch) {
    return {
        pad: function (cb) {
            if(!isPositiveInteger(str)) {
                return cb(leftpad(str, n, ch)); // That'll do. JS fixed.
            }
        }
    }
}
