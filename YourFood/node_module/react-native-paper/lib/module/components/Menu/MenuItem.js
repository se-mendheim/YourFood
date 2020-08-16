function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import color from 'color';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from '../Icon';
import TouchableRipple from '../TouchableRipple';
import Text from '../Typography/Text';
import { withTheme } from '../../core/theming';
import { black, white } from '../../styles/colors';

/**
 * A component to show a single list item inside a Menu.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/menu-item.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Menu } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <View style={{ flex: 1 }}>
 *     <Menu.Item icon="redo" onPress={() => {}} title="Redo" />
 *     <Menu.Item icon="undo" onPress={() => {}} title="Undo" />
 *     <Menu.Item icon="content-cut" onPress={() => {}} title="Cut" disabled />
 *     <Menu.Item icon="content-copy" onPress={() => {}} title="Copy" disabled />
 *     <Menu.Item icon="content-paste" onPress={() => {}} title="Paste" />
 *   </View>
 * );
 *
 * export default MyComponent;
 * ```
 */
class MenuItem extends React.Component {
  render() {
    const {
      icon,
      title,
      disabled,
      onPress,
      theme,
      style,
      testID,
      titleStyle
    } = this.props;
    const disabledColor = color(theme.dark ? white : black).alpha(0.32).rgb().string();
    const titleColor = disabled ? disabledColor : color(theme.colors.text).alpha(0.87).rgb().string();
    const iconColor = disabled ? disabledColor : color(theme.colors.text).alpha(0.54).rgb().string();
    return /*#__PURE__*/React.createElement(TouchableRipple, {
      style: [styles.container, style],
      onPress: onPress,
      disabled: disabled,
      testID: testID
    }, /*#__PURE__*/React.createElement(View, {
      style: styles.row
    }, icon ? /*#__PURE__*/React.createElement(View, {
      style: [styles.item, styles.icon],
      pointerEvents: "box-none"
    }, /*#__PURE__*/React.createElement(Icon, {
      source: icon,
      size: 24,
      color: iconColor
    })) : null, /*#__PURE__*/React.createElement(View, {
      style: [styles.item, styles.content, icon ? styles.widthWithIcon : null],
      pointerEvents: "none"
    }, /*#__PURE__*/React.createElement(Text, {
      numberOfLines: 1,
      style: [styles.title, {
        color: titleColor
      }, titleStyle]
    }, title))));
  }

}

_defineProperty(MenuItem, "displayName", 'Menu.Item');

const minWidth = 112;
const maxWidth = 280;
const iconWidth = 40;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    minWidth,
    maxWidth,
    height: 48,
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  icon: {
    width: iconWidth
  },
  title: {
    fontSize: 16
  },
  item: {
    marginHorizontal: 8
  },
  content: {
    justifyContent: 'center',
    minWidth: minWidth - 16,
    maxWidth: maxWidth - 16
  },
  widthWithIcon: {
    maxWidth: maxWidth - (iconWidth + 48)
  }
});
export default withTheme(MenuItem); // @component-docs ignore-next-line

export { MenuItem };
//# sourceMappingURL=MenuItem.js.map