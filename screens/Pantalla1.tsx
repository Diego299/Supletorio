import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilos from './Styles';

const Pantalla1 = () => {
  const navegación = useNavigation();
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>BIENVENIDO</Text>
      <TouchableOpacity
        style={estilos.boton}
        onPress={() => navegación.navigate('Pantalla2')}
      >
        <Text style={estilos.textoBoton}>Acceder</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pantalla1;
