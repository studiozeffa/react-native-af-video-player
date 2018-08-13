import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { ToggleIcon, Time, Scrubber } from './';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 35,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    paddingHorizontal: 5
  }
});

const ControlBar = props => {
  const {
    onSeek,
    onSeekRelease,
    progress,
    currentTime,
    duration,
    muted,
    fullscreen,
    theme,
    inlineOnly,
    hidden,
    hideMute
  } = props;

  if (hidden) {
    return <View style={styles.container} />;
  }

  return (
    <View style={styles.container}>
      <Time
        time={currentTime}
        theme={theme.seconds}
        textStyle={theme.textStyle}
      />
      <Scrubber
        onSeek={pos => onSeek(pos)}
        onSeekRelease={pos => onSeekRelease(pos)}
        progress={progress}
        theme={{
          scrubberThumb: theme.scrubberThumb,
          scrubberBar: theme.scrubberBar
        }}
      />
      {!hideMute && (
        <ToggleIcon
          theme={theme.volume}
          onPress={() => props.toggleMute()}
          isOn={muted}
          size={20}
          iconOff="volume-up"
          iconOn="volume-mute"
          style={styles.muteIcon}
        />
      )}
      <Time
        time={duration}
        theme={theme.duration}
        textStyle={theme.textStyle}
      />
      {!inlineOnly && (
        <ToggleIcon
          onPress={() => props.toggleFS()}
          iconOff="fullscreen"
          iconOn="fullscreen-exit"
          size={25}
          largeHitZone
          isOn={fullscreen}
          theme={theme.fullscreen}
        />
      )}
    </View>
  );
};

ControlBar.propTypes = {
  toggleFS: PropTypes.func.isRequired,
  toggleMute: PropTypes.func.isRequired,
  onSeek: PropTypes.func.isRequired,
  onSeekRelease: PropTypes.func.isRequired,
  fullscreen: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired,
  inlineOnly: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
  hidden: PropTypes.bool.isRequired,
  hideMute: PropTypes.bool.isRequired
};

export { ControlBar };
