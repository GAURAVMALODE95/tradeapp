import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import TabNavigator from './navigation/tabnavigator';

import type { RootStackParamList } from './navigation/types';
import All_tickers_screen from './screens/Home/All_tickers_screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
        />
        
        <Stack.Screen
          name="All_tickers_screen"
          component={All_tickers_screen}
        />

        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;