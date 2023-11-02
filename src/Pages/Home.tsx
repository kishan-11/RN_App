import React, {memo} from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
  const todos = useSelector(({todo}) => todo);

  const dispatch = useDispatch();

  console.log(todos);
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Add Todos"
        onPress={() => {
          dispatch({
            type: 'ADD_TODO',
            payload: {
              title: 'Learn React Native',
              completed: false,
            },
          });
        }}
      />
      <Button
        title="toggle Todos"
        onPress={() => {
          dispatch({
            type: 'TOGGLE_TODO',
            payload: {
              index: 0,
            },
          });
        }}
      />
      <Button
        title="Remove Todos"
        onPress={() => {
          dispatch({
            type: 'REMOVE_TODO',
            payload: {
              index: 0,
            },
          });
        }}
      />
    </View>
  );
};

export default memo(Home);
