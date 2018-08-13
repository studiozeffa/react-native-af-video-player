import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

const backgroundColor = 'transparent';

const padding = 5;

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    backgroundColor,
    justifyContent: 'center',
    padding: padding
  }
});

const ToggleIcon = props => {
  const { isOn, iconOn, iconOff, theme, size, largeHitZone } = props;

  const baseHitZone = size + padding * 2 + 10;
  const fullHitZone = baseHitZone + (largeHitZone ? 30 : 10);

  const hitSlop = {
    top: fullHitZone,
    bottom: baseHitZone,
    left: fullHitZone,
    right: fullHitZone
  };

  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={() => props.onPress()}
      hitSlop={hitSlop}
    >
      <Icons name={isOn ? iconOn : iconOff} color={theme} size={size} />
    </TouchableOpacity>
  );
};

ToggleIcon.propTypes = {
  onPress: PropTypes.func,
  isOn: PropTypes.bool,
  iconOff: PropTypes.string.isRequired,
  iconOn: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  largeHitZone: PropTypes.bool
};

ToggleIcon.defaultProps = {
  onPress: undefined,
  isOn: false,
  style: null,
  largeHitZone: false
};

export { ToggleIcon };
