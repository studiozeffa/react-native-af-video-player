import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const backgroundColor = 'transparent';

const styles = StyleSheet.create({
  playButton: {},
  playContainer: {
    flex: 1,
    backgroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  playIconContainer: {
    position: 'relative'
  },
  playIconBackground: {
    position: 'absolute',
    // Assumes an icon size of 90
    top: 22,
    bottom: 22,
    left: 22,
    right: 22
  }
});

const PlayButton = ({ onPress, theme, paused }) => {
  const isCircleTheme =
    theme.centerBackground && theme.centerBackground !== 'transparent';
  const playIcon = isCircleTheme ? 'play-circle-filled' : 'play-arrow';
  const pausedIcon = isCircleTheme ? 'pause-circle-filled' : 'pause';
  const iconColor = isCircleTheme ? 'centerBackground' : 'center';

  // Need to disable opacigty onPress for circle theme
  // otherwise the background shows through on tap
  const activeOpacity = isCircleTheme ? 1 : 0.5;

  return (
    <View style={styles.playContainer}>
      <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
        <View style={styles.playIconContainer}>
          {isCircleTheme && (
            <View
              style={[
                styles.playIconBackground,
                { backgroundColor: theme.center }
              ]}
            />
          )}
          <Icon
            style={styles.playButton}
            name={paused ? playIcon : pausedIcon}
            color={theme[iconColor]}
            size={90}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

PlayButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired
};

export { PlayButton };
