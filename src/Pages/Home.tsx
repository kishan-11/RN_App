import React, {memo} from 'react';
import {SafeAreaView, View} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </SafeAreaView>
  );
};

export default memo(Home);
