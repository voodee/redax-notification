'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Notifications;

var _constants = require('./constants');

var _Constants = require('react-notification/src/Constants');

var _immutable = require('immutable');

function Notifications() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _immutable.Map();
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case _constants.SHOW_NOTIFICATION:

            var _notification = _Constants.defaultValue.merge((0, _immutable.Map)(action.payload)).merge((0, _immutable.Map)({ uid: state.size }));

            return state.set(state.size, _notification);

        case _constants.REMOVE_NOTIFICATION:
            return state.filter(function (notification) {
                return notification.get('uid') !== action.uid;
            });
    }

    return state;
}
module.exports = exports['default'];