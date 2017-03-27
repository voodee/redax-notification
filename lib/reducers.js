'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Notifications;

var _constants = require('./constants');

var _constants2 = require('react-notification/lib/constants');

var _immutable = require('immutable');

var defaultState = new _immutable.Map({
    list: new _immutable.Map(),
    uid: 0
});

function Notifications() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case _constants.SHOW_NOTIFICATION:
            var newIud = state.get('uid') + 1;

            var _notification = _constants2.defaultValue.merge((0, _immutable.Map)(action.payload)).merge((0, _immutable.Map)({ uid: newIud }));

            return state.setIn(['list', newIud], _notification).set('uid', state.get('uid') + 1);

        case _constants.REMOVE_NOTIFICATION:
            return state.set('list', state.get('list').filter(function (notification) {
                return notification.get('uid') !== action.uid;
            }));
    }

    return state;
}