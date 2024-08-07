import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
     padding: 20,
    backgroundColor: '#ffff',
  },
  title: {
    fontSize: 30,
     fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  image: {
    width: 440,
     height: 300,
    resizeMode: 'cover',
    marginBottom: 30,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#0886',
     padding: 0,
    borderRadius: 15,
    marginTop: 15,
  },
     buttonText: {
    textAlign: 'center',
    fontSize: 15,
    

  },
  inputContainer: {
     marginBottom: 10,
  },
  inputLabel: {
    fontSize: 15,
    marginBottom: 10,
   },
  input: {
    borderWidth: 2,
     borderColor: '#0886',
    borderRadius: 50,
    padding: 10,
    fontSize: 15,
  },
   resultContainer: {
    marginTop: 20,
  },
  resultText: {
     fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});