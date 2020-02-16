import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  PanResponder,
  View,
  StyleSheet,
  Animated,
  Dimensions,
  Button,
  TextInput,
} from 'react-native';

export const deviceWidth = Dimensions.get('window').width;

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <SwipeView />
      </SafeAreaView>
    </>
  );
};

export class SwipeView extends React.Component {
  leftOffset = new Animated.Value(0);

  panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
      return true;
    },
    onPanResponderMove: (evt, gestureState) => {
      this.leftOffset.setValue(gestureState.dx);
    },
  });

  render() {
    return (
      <View
        style={[styles.container, this.props.style]}
        {...this.panResponder.panHandlers}>
        <View style={styles.bottom} />
        <Animated.View
          style={[styles.top, {transform: [{translateX: this.leftOffset}]}]}>
          <Button title="I BUTTON I NO EAT GESTURES" onPress={() => null} />
          <TextInput value="I TEXTINPUT TASTY GESTURES" />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: '100%',
  },
  top: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#CDCDCD',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: deviceWidth,
    height: '100%',
    backgroundColor: 'red',
  },
});

export default App;
