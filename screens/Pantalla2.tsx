import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilos from './Styles';

const Pantalla2 = () => {

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [comentario, setComentario] = useState('');
  const navegación = useNavigation();

  const manejodeEnvio = () => {
    if (nombre && correo && comentario) {
      navegación.navigate('Pantalla3', { nombre, correo, comentario });
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.etiqueta}>Nombre:</Text>
      <TextInput style={estilos.entrada} value={nombre}
        onChangeText={setNombre} placeholder="Ingresa tu nombre"/>

      <Text style={estilos.etiqueta}>Correo:</Text>
      <TextInput style={estilos.entrada} value={correo}
        onChangeText={setCorreo} placeholder="Ingresa tu correo"
        keyboardType="email-address"/>

      <Text style={estilos.etiqueta}>Comentario:</Text>
      <TextInput style={estilos.entrada} value={comentario}
        onChangeText={setComentario} placeholder="Ingresa tu comentario"/>

      <TouchableOpacity style={estilos.boton} onPress={manejodeEnvio}>
        <Text style={estilos.textoBoton}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pantalla2;
