import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SliderComp from '@react-native-community/slider';
import {convertToHexadecimal} from '../Utils/formatUtil';

interface Props {
  title: string;
  onChanged: (value: number) => void;
  value: number;
}

const Slider: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.titleContainer,
          {backgroundColor: `${props.title.toLowerCase()}`},
        ]}>
        <Text style={styles.title}>{props.title[0]}</Text>
      </View>
      <View style={styles.sliderContainer}>
        <SliderComp
          style={styles.slider}
          minimumValue={0}
          maximumValue={255}
          minimumTrackTintColor={`${props.title.toLowerCase()}`}
          thumbTintColor={`${props.title.toLowerCase()}`}
          maximumTrackTintColor="#EFEFEF"
          onValueChange={props.onChanged}
          step={1}
          value={props.value}
        />
      </View>
      <View
        style={[
          styles.valueContainer,
          {backgroundColor: `${props.title.toLowerCase()}`},
        ]}>
        <Text style={styles.title}>{convertToHexadecimal(props.value)}</Text>
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  slider: {
    width: 200,
    height: 30,
  },
  sliderContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
    color: 'white',
    fontWeight: 'bold',
  },
  valueContainer: {
    height: 30,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});
