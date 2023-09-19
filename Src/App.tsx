import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Slider from './Components/Slider';
import {getHexadecimalColor} from './Utils/formatUtil';

const App = () => {
  const [state, setState] = React.useState({
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View
          style={[
            styles.displayBox,
            {
              backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
            },
          ]}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{getHexadecimalColor(state)}</Text>
        </View>
        <View>
          <Slider
            title="Red"
            onChanged={value => {
              setState({...state, red: value});
            }}
            value={state.red}
          />
          <Slider
            title="Green"
            onChanged={value => {
              setState({...state, green: value});
            }}
            value={state.green}
          />
          <Slider
            title="Blue"
            onChanged={value => {
              setState({...state, blue: value});
            }}
            value={state.blue}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  displayBox: {
    height: 100,
    borderRadius: 32,
    marginVertical: 16,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: 'bold',
    marginVertical: 16,
  },
});
