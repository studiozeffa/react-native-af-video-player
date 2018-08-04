import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Animated, View } from 'react-native';

const styles = StyleSheet.create({
  outerBar: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  completed: {
    height: 1
  }
});

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.complete = new Animated.Value(props.progress);
  }

  render() {
    const { progress, theme } = this.props;
    Animated.timing(this.complete, {
      toValue: progress,
      duration: 250
    }).start();
    return (
      <View style={styles.outerBar}>
        <Animated.View
          style={[
            { flex: this.complete, backgroundColor: theme },
            styles.completed
          ]}
        />
      </View>
    );
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired
};

export { ProgressBar };
