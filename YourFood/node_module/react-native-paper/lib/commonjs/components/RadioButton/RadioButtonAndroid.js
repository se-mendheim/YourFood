"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButtonAndroid = exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _RadioButtonGroup = require("./RadioButtonGroup");

var _utils = require("./utils");

var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple"));

var _theming = require("../../core/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const BORDER_WIDTH = 2;
/**
 * Radio buttons allow the selection a single option from a set.
 * This component follows platform guidelines for Android.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/radio-enabled.android.png" />
 *     <figcaption>Enabled</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-disabled.android.png" />
 *     <figcaption>Disabled</figcaption>
 *   </figure>
 * </div>
 */

class RadioButtonAndroid extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      borderAnim: new _reactNative.Animated.Value(BORDER_WIDTH),
      radioAnim: new _reactNative.Animated.Value(1)
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status === this.props.status) {
      return;
    }

    const {
      scale
    } = this.props.theme.animation;

    if (this.props.status === 'checked') {
      this.state.radioAnim.setValue(1.2);

      _reactNative.Animated.timing(this.state.radioAnim, {
        toValue: 1,
        duration: 150 * scale,
        useNativeDriver: true
      }).start();
    } else {
      this.state.borderAnim.setValue(10);

      _reactNative.Animated.timing(this.state.borderAnim, {
        toValue: BORDER_WIDTH,
        duration: 150 * scale,
        useNativeDriver: false
      }).start();
    }
  }

  render() {
    const _this$props = this.props,
          {
      disabled,
      onPress,
      theme,
      value,
      status
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["disabled", "onPress", "theme", "value", "status"]);

    const checkedColor = this.props.color || theme.colors.accent;
    const uncheckedColor = this.props.uncheckedColor || (0, _color.default)(theme.colors.text).alpha(theme.dark ? 0.7 : 0.54).rgb().string();
    let rippleColor, radioColor;
    return /*#__PURE__*/React.createElement(_RadioButtonGroup.RadioButtonContext.Consumer, null, context => {
      const checked = (0, _utils.isChecked)({
        contextValue: context === null || context === void 0 ? void 0 : context.value,
        status,
        value
      }) === 'checked';

      if (disabled) {
        rippleColor = (0, _color.default)(theme.colors.text).alpha(0.16).rgb().string();
        radioColor = theme.colors.disabled;
      } else {
        rippleColor = (0, _color.default)(checkedColor).fade(0.32).rgb().string();
        radioColor = checked ? checkedColor : uncheckedColor;
      }

      return /*#__PURE__*/React.createElement(_TouchableRipple.default, _extends({}, rest, {
        borderless: true,
        rippleColor: rippleColor,
        onPress: disabled ? undefined : () => {
          (0, _utils.handlePress)({
            onPress,
            onValueChange: context === null || context === void 0 ? void 0 : context.onValueChange,
            value
          });
        },
        accessibilityTraits: disabled ? ['button', 'disabled'] : 'button',
        accessibilityComponentType: checked ? 'radiobutton_checked' : 'radiobutton_unchecked',
        accessibilityRole: "button",
        accessibilityState: {
          disabled
        },
        accessibilityLiveRegion: "polite",
        style: styles.container
      }), /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
        style: [styles.radio, {
          borderColor: radioColor,
          borderWidth: this.state.borderAnim
        }]
      }, checked ? /*#__PURE__*/React.createElement(_reactNative.View, {
        style: [_reactNative.StyleSheet.absoluteFill, styles.radioContainer]
      }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
        style: [styles.dot, {
          backgroundColor: radioColor,
          transform: [{
            scale: this.state.radioAnim
          }]
        }]
      })) : null));
    });
  }

}

exports.RadioButtonAndroid = RadioButtonAndroid;

_defineProperty(RadioButtonAndroid, "displayName", 'RadioButton.Android');

const styles = _reactNative.StyleSheet.create({
  container: {
    borderRadius: 18
  },
  radioContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    margin: 8
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5
  }
});

var _default = (0, _theming.withTheme)(RadioButtonAndroid); // @component-docs ignore-next-line


exports.default = _default;
//# sourceMappingURL=RadioButtonAndroid.js.map