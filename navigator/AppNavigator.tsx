import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../screens/types';
import Screens1 from '../screens/Screens1';
import Screens2 from '../screens/Screens2';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="PantallaPrincipal">
      <Stack.Screen name="PantallaPrincipal" component={Screens1} />
      <Stack.Screen name="PantallaSecundaria" component={Screens2} />
    </Stack.Navigator>
  );
};

export default AppNavigator;