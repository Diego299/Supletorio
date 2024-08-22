import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pantalla1 from '../screens/Pantalla1';
import Pantalla2 from '../screens/Pantalla2';
import Pantalla3 from '../screens/Pantalla3';



const Pila = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Pila.Navigator initialRouteName="PantallaBienvenida">
        <Pila.Screen name="Pantalla1" component={Pantalla1} />
        <Pila.Screen name="Pantalla2" component={Pantalla2} />
        <Pila.Screen name="Pantalla3" component={Pantalla3} />
      </Pila.Navigator>
    </NavigationContainer>
  );
};

export default App;
