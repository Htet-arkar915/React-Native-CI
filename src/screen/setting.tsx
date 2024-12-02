import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useReducer} from 'react';
import {NavigationProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/AppNavigator';

interface SettingScreenProps {
  navigation: NavigationProp<RootStackParamList, 'Setting'>;
}
type MyState = {
  count: number;
};
const initialState: MyState = {
  count: 0,
};
type action = {
  type: 'INCREMENT' | 'DECREMENT';
};

const reducer = (state: MyState, action: action): MyState => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1};
    case 'DECREMENT':
      return {...state, count: state.count - 1};
    default:
      return state;
  }
};
const Setting = ({navigation}: SettingScreenProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const route = useRoute();
  console.log(route.params);
  return (
    <View style={styles.container}>
      <Text>{state.count}</Text>
      <TouchableOpacity onPress={() => dispatch({type: 'INCREMENT'})}>
        <Text> Increment count</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch({type: 'DECREMENT'})}>
        <Text> Increment count</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
