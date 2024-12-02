jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: jest.fn(),
}));

// Mock react-navigation/native
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(),
    useRoute: jest.fn(),
  };
});
