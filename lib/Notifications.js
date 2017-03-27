'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactNotification = require('react-notification');

var _reactNotification2 = _interopRequireDefault(_reactNotification);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReduxNotification = function (_Component) {
    _inherits(ReduxNotification, _Component);

    function ReduxNotification() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ReduxNotification);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReduxNotification.__proto__ || Object.getPrototypeOf(ReduxNotification)).call.apply(_ref, [this].concat(args))), _this), _this._setReactNotification = function (notification) {
            _this._reactNotification = notification;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ReduxNotification, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            this.props.notifications.keySeq().map(function (uid) {
                return !nextProps.notifications.get(uid) && _this2._reactNotification.remove(uid);
            });

            nextProps.notifications.map(function (notification, uid) {
                if (!_this2.props.notifications.get(uid)) {
                    _this2._reactNotification.add(_extends({}, notification.toJS(), {
                        onRemove: function onRemove() {
                            _this2.props.dispatch((0, _actions.removeNotification)(uid));
                            notification.onRemove && notification.onRemove();
                        }
                    }));
                }
            });
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return this.props !== nextProps;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                notifications = _props.notifications,
                rest = _objectWithoutProperties(_props, ['notifications']);

            return _react2.default.createElement(_reactNotification2.default, _extends({ ref: this._setReactNotification }, rest));
        }
    }]);

    return ReduxNotification;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    var notifications = state.notifications;


    return {
        notifications: notifications.get('list')
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ReduxNotification);