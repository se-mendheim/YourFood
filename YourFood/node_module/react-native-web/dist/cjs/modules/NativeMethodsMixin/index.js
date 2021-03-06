"use strict";

exports.__esModule = true;
exports.default = void 0;

var _createDOMProps = _interopRequireDefault(require("../createDOMProps"));

var _findNodeHandle = _interopRequireDefault(require("../../exports/findNodeHandle"));

var _styleResolver = _interopRequireDefault(require("../../exports/StyleSheet/styleResolver"));

var _UIManager = _interopRequireDefault(require("../../exports/UIManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var NativeMethodsMixin = {
  /**
   * Removes focus from an input or view. This is the opposite of `focus()`.
   */
  blur: function blur() {
    _UIManager.default.blur((0, _findNodeHandle.default)(this));
  },

  /**
   * Requests focus for the given input or view.
   * The exact behavior triggered will depend the type of view.
   */
  focus: function focus() {
    _UIManager.default.focus((0, _findNodeHandle.default)(this));
  },

  /**
   * Determines the position and dimensions of the view
   */
  measure: function measure(callback) {
    _UIManager.default.measure((0, _findNodeHandle.default)(this), callback);
  },

  /**
   * Determines the location of the given view in the window and returns the
   * values via an async callback. If the React root view is embedded in
   * another native view, this will give you the absolute coordinates. If
   * successful, the callback will be called be called with the following
   * arguments:
   *
   *  - x
   *  - y
   *  - width
   *  - height
   *
   * Note that these measurements are not available until after the rendering
   * has been completed.
   */
  measureInWindow: function measureInWindow(callback) {
    _UIManager.default.measureInWindow((0, _findNodeHandle.default)(this), callback);
  },

  /**
   * Measures the view relative to another view (usually an ancestor)
   */
  measureLayout: function measureLayout(relativeToNativeNode, onSuccess, onFail) {
    _UIManager.default.measureLayout((0, _findNodeHandle.default)(this), relativeToNativeNode, onFail, onSuccess);
  },

  /**
   * This function sends props straight to the underlying DOM node.
   * This works as if all styles were set as inline styles. Since a DOM node
   * may aleady be styled with class names and inline styles, we need to get
   * the initial styles from the DOM node and merge them with incoming props.
   */
  setNativeProps: function setNativeProps(nativeProps) {
    if (!nativeProps) {
      return;
    }

    var node = (0, _findNodeHandle.default)(this);

    if (node) {
      // Next state is determined by comparison to existing state (in the DOM).
      // Existing state has already gone through i18n transform
      var domProps = (0, _createDOMProps.default)(null, nativeProps, function (style) {
        return _styleResolver.default.resolveWithNode(style, node);
      });

      _UIManager.default.updateView(node, domProps, this);
    }
  }
};
var _default = NativeMethodsMixin;
exports.default = _default;
module.exports = exports.default;