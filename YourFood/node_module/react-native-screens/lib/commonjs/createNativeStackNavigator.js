"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNavigation = require("react-navigation");

var _reactNavigationStack = require("react-navigation-stack");

var _reactNativeScreens = require("react-native-screens");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function renderComponentOrThunk(componentOrThunk, props) {
  if (typeof componentOrThunk === 'function') {
    return componentOrThunk(props);
  }

  return componentOrThunk;
}

const REMOVE_ACTION = 'NativeStackNavigator/REMOVE';

class StackView extends _react.default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_removeScene", route => {
      this.props.navigation.dispatch({
        type: REMOVE_ACTION,
        immediate: true,
        key: route.key
      });
    });

    _defineProperty(this, "_onAppear", (route, descriptor) => {
      descriptor.options && descriptor.options.onAppear && descriptor.options.onAppear();
      this.props.navigation.dispatch(_reactNavigation.StackActions.completeTransition({
        toChildKey: route.key,
        key: this.props.navigation.state.key
      }));
    });

    _defineProperty(this, "_onFinishTransitioning", () => {
      const {
        routes
      } = this.props.navigation.state;
      let lastRoute = routes && routes.length && routes[routes.length - 1];

      if (lastRoute) {
        this.props.navigation.dispatch(_reactNavigation.StackActions.completeTransition({
          toChildKey: lastRoute.key,
          key: this.props.navigation.state.key
        }));
      }
    });

    _defineProperty(this, "_renderHeaderConfig", (index, route, descriptor) => {
      const {
        navigationConfig
      } = this.props;
      const {
        options
      } = descriptor;
      const {
        headerMode
      } = navigationConfig;
      const {
        title,
        headerStyle,
        headerTitleStyle,
        headerBackTitleStyle,
        headerBackTitle,
        headerBackTitleVisible,
        headerTintColor,
        largeTitle,
        headerLargeTitleStyle,
        translucent,
        hideShadow,
        headerTopInsetEnabled = true
      } = options;
      const scene = {
        index,
        key: route.key,
        route,
        descriptor
      };
      const headerOptions = {
        translucent: translucent === undefined ? false : translucent,
        title,
        titleFontFamily: headerTitleStyle && headerTitleStyle.fontFamily,
        titleColor: headerTitleStyle && headerTitleStyle.color || headerTintColor,
        titleFontSize: headerTitleStyle && headerTitleStyle.fontSize,
        backTitle: headerBackTitleVisible === false ? '' : headerBackTitle,
        backTitleFontFamily: headerBackTitleStyle && headerBackTitleStyle.fontFamily,
        backTitleFontSize: headerBackTitleStyle && headerBackTitleStyle.fontSize,
        color: headerTintColor,
        largeTitle,
        largeTitleFontFamily: headerLargeTitleStyle && headerLargeTitleStyle.fontFamily,
        largeTitleFontSize: headerLargeTitleStyle && headerLargeTitleStyle.fontSize,
        largeTitleColor: headerLargeTitleStyle && headerLargeTitleStyle.color,
        hideShadow,
        headerTopInsetEnabled
      };
      const hasHeader = headerMode !== 'none' && options.header !== null;

      if (!hasHeader) {
        return /*#__PURE__*/_react.default.createElement(_reactNativeScreens.ScreenStackHeaderConfig, _extends({}, headerOptions, {
          hidden: true
        }));
      }

      if (headerStyle !== undefined) {
        headerOptions.backgroundColor = headerStyle.backgroundColor;
      }

      const children = [];

      if (options.backButtonImage) {
        children.push( /*#__PURE__*/_react.default.createElement(_reactNativeScreens.ScreenStackHeaderBackButtonImage, {
          key: "backImage",
          source: options.backButtonImage
        }));
      }

      if (options.headerLeft !== undefined) {
        children.push( /*#__PURE__*/_react.default.createElement(_reactNativeScreens.ScreenStackHeaderLeftView, {
          key: "left"
        }, renderComponentOrThunk(options.headerLeft, {
          scene
        })));
      } else if (options.headerBackImage !== undefined) {
        const goBack = () => {
          // Go back on next tick because button ripple effect needs to happen on Android
          requestAnimationFrame(() => {
            descriptor.navigation.goBack(descriptor.key);
          });
        };

        children.push( /*#__PURE__*/_react.default.createElement(_reactNativeScreens.ScreenStackHeaderLeftView, {
          key: "left"
        }, /*#__PURE__*/_react.default.createElement(_reactNavigationStack.HeaderBackButton, {
          onPress: goBack,
          pressColorAndroid: options.headerPressColorAndroid,
          tintColor: options.headerTintColor,
          backImage: options.headerBackImage,
          title: options.backButtonTitle,
          truncatedTitle: options.truncatedBackButtonTitle,
          backTitleVisible: this.props.backTitleVisible,
          titleStyle: options.headerBackTitleStyle,
          layoutPreset: this.props.layoutPreset,
          scene: scene
        })));
      }

      if (options.headerTitle) {
        if (title === undefined && typeof options.headerTitle === 'string') {
          headerOptions.title = options.headerTitle;
        } else {
          children.push( /*#__PURE__*/_react.default.createElement(_reactNativeScreens.ScreenStackHeaderCenterView, {
            key: "center"
          }, renderComponentOrThunk(options.headerTitle, {
            scene
          })));
        }
      }

      if (options.headerRight) {
        children.push( /*#__PURE__*/_react.default.createElement(_reactNativeScreens.ScreenStackHeaderRightView, {
          key: "right"
        }, renderComponentOrThunk(options.headerRight, {
          scene
        })));
      }

      if (children.length > 0) {
        headerOptions.children = children;
      }

      return /*#__PURE__*/_react.default.createElement(_reactNativeScreens.ScreenStackHeaderConfig, headerOptions);
    });

    _defineProperty(this, "_renderScene", (index, route, descriptor) => {
      const {
        navigation,
        getComponent,
        options
      } = descriptor;
      const {
        mode,
        transparentCard
      } = this.props.navigationConfig;
      const SceneComponent = getComponent();
      let stackPresentation = 'push';

      if (mode === 'modal' || mode === 'containedModal') {
        stackPresentation = mode;

        if (transparentCard || options.cardTransparent) {
          stackPresentation = mode === 'containedModal' ? 'containedTransparentModal' : 'transparentModal';
        }
      }

      let stackAnimation = options.stackAnimation;

      if (options.animationEnabled === false) {
        stackAnimation = 'none';
      }

      const {
        screenProps
      } = this.props;
      return /*#__PURE__*/_react.default.createElement(_reactNativeScreens.Screen, {
        key: "screen_".concat(route.key),
        style: [_reactNative.StyleSheet.absoluteFill, options.cardStyle],
        stackAnimation: stackAnimation,
        stackPresentation: stackPresentation,
        replaceAnimation: options.replaceAnimation === undefined ? 'pop' : options.replaceAnimation,
        pointerEvents: index === this.props.navigation.state.routes.length - 1 ? 'auto' : 'none',
        gestureEnabled: _reactNative.Platform.OS === 'android' ? false : options.gestureEnabled === undefined ? true : options.gestureEnabled,
        onAppear: () => this._onAppear(route, descriptor),
        onDismissed: () => this._removeScene(route)
      }, this._renderHeaderConfig(index, route, descriptor), /*#__PURE__*/_react.default.createElement(_reactNavigation.SceneView, {
        screenProps: screenProps,
        navigation: navigation,
        component: SceneComponent
      }));
    });
  }

  render() {
    const {
      navigation,
      descriptors
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_reactNativeScreens.ScreenStack, {
      style: styles.scenes,
      onFinishTransitioning: this._onFinishTransitioning
    }, navigation.state.routes.map((route, i) => this._renderScene(i, route, descriptors[route.key])));
  }

}

const styles = _reactNative.StyleSheet.create({
  scenes: {
    flex: 1
  }
});

function createStackNavigator(routeConfigMap, stackConfig = {}) {
  const router = (0, _reactNavigation.StackRouter)(routeConfigMap, stackConfig); // belowe we override getStateForAction method in order to add handling for
  // a custom native stack navigation action. The action REMOVE that we want to
  // add works in a similar way to POP, but it does not remove all the routes
  // that sit on top of the removed route. For example if we have three routes
  // [a,b,c] and call POP on b, then both b and c will go away. In case we
  // call REMOVE on b, only b will be removed from the stack and the resulting
  // state will be [a, c]

  const superGetStateForAction = router.getStateForAction;

  router.getStateForAction = (action, state) => {
    if (action.type === REMOVE_ACTION) {
      const {
        key,
        immediate
      } = action;
      let backRouteIndex = state.index;

      if (key) {
        const backRoute = state.routes.find(route => route.key === key);
        backRouteIndex = state.routes.indexOf(backRoute);
      }

      if (backRouteIndex > 0) {
        const newRoutes = [...state.routes];
        newRoutes.splice(backRouteIndex, 1);
        return _objectSpread(_objectSpread({}, state), {}, {
          routes: newRoutes,
          index: newRoutes.length - 1,
          isTransitioning: immediate !== true
        });
      }
    }

    return superGetStateForAction(action, state);
  }; // Create a navigator with StackView as the view


  return (0, _reactNavigation.createNavigator)(StackView, router, stackConfig);
}

var _default = createStackNavigator;
exports.default = _default;
//# sourceMappingURL=createNativeStackNavigator.js.map