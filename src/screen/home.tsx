import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Header from '../components/header';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/AppNavigator';

interface HomeScreenProps {
  navigation: NavigationProp<RootStackParamList, 'Home'>;
}
interface User {
  name: string;
  age: number;
  email: string;
}
interface Item {
  title: string;
  price: number;
  id: string;
}
const Home = ({navigation}: HomeScreenProps) => {
  const [counter, setCounter] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    name: '',
    age: 0,
    email: '',
  });
  const [item, setItem] = useState<Item[]>([]);
  const [details, setDetails] = useState<null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const ref = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      {isVisible && (
        <TextInput
          keyboardType="number-pad"
          inputMode="numeric"
          ref={ref}
          style={{
            width: 200,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 20,
            borderRadius: 10,
            padding: 10,
            textAlign: 'left',
          }}
          placeholder="Click the button to hide me"
        />
      )}
      <TouchableOpacity
        onPress={
          () => {
            console.log('click');
            if (isVisible) {
              ref.current && ref.current.blur();
            }
            setIsVisible(!isVisible);
          }

          // navigation.navigate('Setting', {
          //   name: 'John',
          //   email: 'Xs9d0@example.com',
          // })
        }>
        <Text>{isVisible ? 'Hide' : 'Show'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Setting', {
            name: 'John',
            email: 'Xs9d0@example.com',
          })
        }>
        <Text>{'Go to Setting'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
