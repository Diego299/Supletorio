import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import { Styles } from '../theme/theme';


type Screen1NavigationProp = StackNavigationProp<RootStackParamList, 'PantallaPrincipal'>;
type Props = { navigation: Screen1NavigationProp };

const Screens1: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Bienvenido Mundo Cruel :3</Text>
      <Image 
        source={{ uri: 'https://innovacion.uas.edu.mx/wp-content/uploads/2017/02/bbva-open4u-disenar-apps-moviles.jpg' }}
        style={Styles.image}
      />
      <View style={Styles.button}>
        <Button 
          title="Acceder al Formulario" 
          onPress={() => navigation.navigate('PantallaSecundaria')} 
          color="#0886"
        />
      </View>
    </View>
  );
};

export default Screens1;