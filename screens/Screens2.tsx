import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Styles } from '../theme/theme';


const Screens2: React.FC = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const Divicion = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (n2 === 0) {
      if (n1 === 0) {
        setResult('INDETERMINACIÓN');
      } else {
        setResult('NO EXISTE DIVISIÓN PARA CERO');
      }
    } else {
      setResult((n1 / n2).toString());
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.inputContainer}>
        <Text style={Styles.inputLabel}>Campo número 1</Text>
        <TextInput
          style={Styles.input}
          onChangeText={setNum1}
          value={num1}
          keyboardType="numeric"
        />
      </View>
      <View style={Styles.inputContainer}>
        <Text style={Styles.inputLabel}>Campo número 2</Text>
        <TextInput
          style={Styles.input}
          onChangeText={setNum2}
          value={num2}
          keyboardType="numeric"
        />
      </View>
      <View style={Styles.button}>
        <Button title="Dividir" onPress={Divicion} color="#0886" />
      </View>
      <View style={Styles.resultContainer}>
        <Text style={Styles.resultText}>Resultado: {result}</Text>
      </View>
    </View>
  );
};

export default Screens2;