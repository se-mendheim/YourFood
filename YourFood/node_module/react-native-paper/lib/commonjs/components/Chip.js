"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _Surface = _interopRequireDefault(require("./Surface"));

var _Text = _interopRequireDefault(require("./Typography/Text"));

var _TouchableRipple = _interopRequireDefault(require("./TouchableRipple"));

var _theming = require("../core/theming");

var _colors = require("../styles/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Chips can be used to display entities in small blocks.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/chip-1.png" />
 *     <figcaption>Flat chip</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/chip-2.png" />
 *     <figcaption>Outlined chip</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Chip } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
 * );
 *
 * export default MyComponent;
 * ```
 */
class Chip extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      elevation: new _reactNative.Animated.Value(0)
    });

    _defineProperty(this, "handlePressIn", () => {
      const {
        scale
      } = this.props.theme.animation;

      _reactNative.Animated.timing(this.state.elevation, {
        toValue: 4,
        duration: 200 * scale,
        useNativeDriver: true
      }).start();
    });

    _defineProperty(this, "handlePressOut", () => {
      const {
        scale
      } = this.props.theme.animation;

      _reactNative.Animated.timing(this.state.elevation, {
        toValue: 0,
        duration: 150 * scale,
        useNativeDriver: true
      }).start();
    });
  }

  render() {
    const _this$props = this.props,
          {
      mode,
      children,
      icon,
      avatar,
      selected,
      disabled,
      accessibilityLabel,
      onPress,
      onLongPress,
      onClose,
      textStyle,
      style,
      theme,
      testID,
      selectedColor
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["mode", "children", "icon", "avatar", "selected", "disabled", "accessibilityLabel", "onPress", "onLongPress", "onClose", "textStyle", "style", "theme", "testID", "selectedColor"]);

    const {
      dark,
      colors
    } = theme;
    const {
      backgroundColor = mode === 'outlined' ? colors.surface : dark ? '#383838' : '#ebebeb',
      borderRadius = 16
    } = _reactNative.StyleSheet.flatten(style) || {};
    const borderColor = mode === 'outlined' ? (0, _color.default)(selectedColor !== undefined ? selectedColor : (0, _color.default)(dark ? _colors.white : _colors.black)).alpha(0.29).rgb().string() : backgroundColor;
    const textColor = disabled ? colors.disabled : (0, _color.default)(selectedColor !== undefined ? selectedColor : colors.text).alpha(0.87).rgb().string();
    const iconColor = disabled ? colors.disabled : (0, _color.default)(selectedColor !== undefined ? selectedColor : colors.text).alpha(0.54).rgb().string();
    const selectedBackgroundColor = (dark ? (0, _color.default)(backgroundColor).lighten(mode === 'outlined' ? 0.2 : 0.4) : (0, _color.default)(backgroundColor).darken(mode === 'outlined' ? 0.08 : 0.2)).rgb().string();
    const underlayColor = selectedColor ? (0, _color.default)(selectedColor).fade(0.5).rgb().string() : selectedBackgroundColor;
    const accessibilityTraits = ['button'];
    const accessibilityState = {
      selected,
      disabled
    };

    if (selected) {
      accessibilityTraits.push('selected');
    }

    if (disabled) {
      accessibilityTraits.push('disabled');
    }

    return /*#__PURE__*/React.createElement(_Surface.default, _extends({
      style: [styles.container, {
        elevation: _reactNative.Platform.OS === 'android' ? this.state.elevation : 0,
        backgroundColor: selected ? selectedBackgroundColor : backgroundColor,
        borderColor,
        borderRadius
      }, style]
    }, rest), /*#__PURE__*/React.createElement(_TouchableRipple.default, {
      borderless: true,
      delayPressIn: 0,
      style: {
        borderRadius
      },
      onPress: onPress,
      onLongPress: onLongPress,
      onPressIn: this.handlePressIn,
      onPressOut: this.handlePressOut,
      underlayColor: underlayColor,
      disabled: disabled,
      accessibilityLabel: accessibilityLabel,
      accessibilityTraits: accessibilityTraits,
      accessibilityComponentType: "button",
      accessibilityRole: "button",
      accessibilityState: accessibilityState,
      testID: testID
    }, /*#__PURE__*/React.createElement(_reactNative.View, {
      style: styles.content
    }, avatar && !icon ? /*#__PURE__*/React.createElement(_reactNative.View, {
      style: [styles.avatarWrapper, disabled && {
        opacity: 0.26
      }]
    }, /*#__PURE__*/React.isValidElement(avatar) ?
    /*#__PURE__*/

    /* $FlowFixMe */
    React.cloneElement(avatar, {
      /* $FlowFixMe */
      style: [styles.avatar, avatar.props.style]
    }) : avatar) : null, icon || selected ? /*#__PURE__*/React.createElement(_reactNative.View, {
      style: [styles.icon, avatar ? [styles.avatar, styles.avatarSelected] : null]
    }, /*#__PURE__*/React.createElement(_Icon.default, {
      source: icon || 'check',
      color: avatar ? _colors.white : iconColor,
      size: 18
    })) : null, /*#__PURE__*/React.createElement(_Text.default, {
      numberOfLines: 1,
      style: [styles.text, _objectSpread(_objectSpread({}, theme.fonts.regular), {}, {
        color: textColor,
        marginRight: onClose ? 4 : 8,
        marginLeft: avatar || icon || selected ? 4 : 8
      }), textStyle]
    }, children), onClose ? /*#__PURE__*/React.createElement(_reactNative.TouchableWithoutFeedback, {
      onPress: onClose,
      accessibilityTraits: "button",
      accessibilityComponentType: "button"
    }, /*#__PURE__*/React.createElement(_reactNative.View, {
      style: styles.icon
    }, /*#__PURE__*/React.createElement(_Icon.default, {
      source: "close-circle",
      size: 16,
      color: iconColor
    }))) : null)));
  }

}

_defineProperty(Chip, "defaultProps", {
  mode: 'flat',
  disabled: false,
  selected: false
});

const styles = _reactNative.StyleSheet.create({
  container: {
    borderWidth: _reactNative.StyleSheet.hairlineWidth,
    borderStyle: 'solid'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4
  },
  icon: {
    padding: 4
  },
  text: {
    minHeight: 24,
    lineHeight: 24,
    textAlignVertical: 'center',
    marginVertical: 4
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12
  },
  avatarWrapper: {
    marginRight: 4
  },
  avatarSelected: {
    position: 'absolute',
    top: 4,
    left: 4,
    backgroundColor: 'rgba(0, 0, 0, .29)'
  }
});

var _default = (0, _theming.withTheme)(Chip);

exports.default = _default;
//# sourceMappingURL=Chip.js.map