/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule EventEmitter
 * 
 * @typecheck
 */
'use strict';

exports.__esModule = true;
exports.default = void 0;

var _EmitterSubscription = _interopRequireDefault(require("./EmitterSubscription"));

var _EventSubscriptionVendor = _interopRequireDefault(require("./EventSubscriptionVendor"));

var _emptyFunction = _interopRequireDefault(require("fbjs/lib/emptyFunction"));

var _invariant = _interopRequireDefault(require("fbjs/lib/invariant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class EventEmitter
 * @description
 * An EventEmitter is responsible for managing a set of listeners and publishing
 * events to them when it is told that such events happened. In addition to the
 * data for the given event it also sends a event control object which allows
 * the listeners/handlers to prevent the default behavior of the given event.
 *
 * The emitter is designed to be generic enough to support all the different
 * contexts in which one might want to emit events. It is a simple multicast
 * mechanism on top of which extra functionality can be composed. For example, a
 * more advanced emitter may use an EventHolder and EventFactory.
 */
var EventEmitter =
/*#__PURE__*/
function () {
  /**
   * @constructor
   *
   * @param {EventSubscriptionVendor} subscriber - Optional subscriber instance
   *   to use. If omitted, a new subscriber will be created for the emitter.
   */
  function EventEmitter(subscriber) {
    this._subscriber = subscriber || new _EventSubscriptionVendor.default();
  }
  /**
   * Adds a listener to be invoked when events of the specified type are
   * emitted. An optional calling context may be provided. The data arguments
   * emitted will be passed to the listener function.
   *
   * TODO: Annotate the listener arg's type. This is tricky because listeners
   *       can be invoked with varargs.
   *
   * @param {string} eventType - Name of the event to listen to
   * @param {function} listener - Function to invoke when the specified event is
   *   emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */


  var _proto = EventEmitter.prototype;

  _proto.addListener = function addListener(eventType, listener, context) {
    return this._subscriber.addSubscription(eventType, new _EmitterSubscription.default(this, this._subscriber, listener, context));
  }
  /**
   * Similar to addListener, except that the listener is removed after it is
   * invoked once.
   *
   * @param {string} eventType - Name of the event to listen to
   * @param {function} listener - Function to invoke only once when the
   *   specified event is emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */
  ;

  _proto.once = function once(eventType, listener, context) {
    var _this = this;

    return this.addListener(eventType, function () {
      _this.removeCurrentListener();

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      listener.apply(context, args);
    });
  }
  /**
   * Removes all of the registered listeners, including those registered as
   * listener maps.
   *
   * @param {?string} eventType - Optional name of the event whose registered
   *   listeners to remove
   */
  ;

  _proto.removeAllListeners = function removeAllListeners(eventType) {
    this._subscriber.removeAllSubscriptions(eventType);
  }
  /**
   * Provides an API that can be called during an eventing cycle to remove the
   * last listener that was invoked. This allows a developer to provide an event
   * object that can remove the listener (or listener map) during the
   * invocation.
   *
   * If it is called when not inside of an emitting cycle it will throw.
   *
   * @throws {Error} When called not during an eventing cycle
   *
   * @example
   *   var subscription = emitter.addListenerMap({
   *     someEvent: function(data, event) {
   *       console.log(data);
   *       emitter.removeCurrentListener();
   *     }
   *   });
   *
   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
   *   emitter.emit('someEvent', 'def'); // does not log anything
   */
  ;

  _proto.removeCurrentListener = function removeCurrentListener() {
    (0, _invariant.default)(!!this._currentSubscription, 'Not in an emitting cycle; there is no current subscription');
    this.removeSubscription(this._currentSubscription);
  }
  /**
   * Removes a specific subscription. Called by the `remove()` method of the
   * subscription itself to ensure any necessary cleanup is performed.
   */
  ;

  _proto.removeSubscription = function removeSubscription(subscription) {
    (0, _invariant.default)(subscription.emitter === this, 'Subscription does not belong to this emitter.');

    this._subscriber.removeSubscription(subscription);
  }
  /**
   * Returns an array of listeners that are currently registered for the given
   * event.
   *
   * @param {string} eventType - Name of the event to query
   * @returns {array}
   */
  ;

  _proto.listeners = function listeners(eventType) {
    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);

    return subscriptions ? subscriptions.filter(_emptyFunction.default.thatReturnsTrue).map(function (subscription) {
      return subscription.listener;
    }) : [];
  }
  /**
   * Emits an event of the given type with the given data. All handlers of that
   * particular type will be notified.
   *
   * @param {string} eventType - Name of the event to emit
   * @param {...*} Arbitrary arguments to be passed to each registered listener
   *
   * @example
   *   emitter.addListener('someEvent', function(message) {
   *     console.log(message);
   *   });
   *
   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
   */
  ;

  _proto.emit = function emit(eventType) {
    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);

    if (subscriptions) {
      for (var i = 0, l = subscriptions.length; i < l; i++) {
        var subscription = subscriptions[i]; // The subscription may have been removed during this event loop.

        if (subscription) {
          this._currentSubscription = subscription;
          subscription.listener.apply(subscription.context, Array.prototype.slice.call(arguments, 1));
        }
      }

      this._currentSubscription = null;
    }
  }
  /**
   * Removes the given listener for event of specific type.
   *
   * @param {string} eventType - Name of the event to emit
   * @param {function} listener - Function to invoke when the specified event is
   *   emitted
   *
   * @example
   *   emitter.removeListener('someEvent', function(message) {
   *     console.log(message);
   *   }); // removes the listener if already registered
   *
   */
  ;

  _proto.removeListener = function removeListener(eventType, listener) {
    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);

    if (subscriptions) {
      for (var i = 0, l = subscriptions.length; i < l; i++) {
        var subscription = subscriptions[i]; // The subscription may have been removed during this event loop.
        // its listener matches the listener in method parameters

        if (subscription && subscription.listener === listener) {
          subscription.remove();
        }
      }
    }
  };

  return EventEmitter;
}();

var _default = EventEmitter;
exports.default = _default;
module.exports = exports.default;