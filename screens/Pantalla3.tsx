import React from 'react';
import { View, Text } from 'react-native';
import estilos from './Styles';


const Pantalla3 = ({ route }) => {
  const { nombre, correo, comentario } = route.params;

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.etiqueta}>Nombre:</Text>
      <Text style={estilos.valor}>{nombre}</Text>
      <Text style={estilos.etiqueta}>Correo:</Text>
      <Text style={estilos.valor}>{correo}</Text>
      <Text style={estilos.etiqueta}>Comentario:</Text>
      <Text style={estilos.valor}>{comentario}</Text>
    </View>
  );
};

export default Pantalla3;
