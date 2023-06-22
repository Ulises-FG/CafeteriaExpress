import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDqVK-WWN_J_Lfl8aLVBX-4RM-1E_auMMw',
  authDomain: 'poli-waiter.firebaseapp.com',
  projectId: 'poli-waiter',
  storageBucket: 'poli-waiter.appspot.com',
  messagingSenderId: '17731923429',
  appId: '1:17731923429:web:f2d120b0b38dd6584f130c',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const productCollection = db.collection('product');

const FormularioProducto = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = () => {
    // Aquí puedes realizar las acciones necesarias con los datos del formulario
    productCollection
      .add({
        name: nombre,
        description: descripcion,
        price: precio,
      })
      .then((docRef) => {
        console.log('Documento agregado con ID:', docRef.id);
        console.log('Documento completo', docRef);
      })
      .catch((error) => {
        console.error('Error al agregar el documento:', error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Nombre del producto'
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder='Descripción'
        value={descripcion}
        onChangeText={setDescripcion}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder='Precio'
        value={precio}
        onChangeText={setPrecio}
        keyboardType='numeric'
      />

      <Button title='Guardar' onPress={handleSubmit} color='red' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  input: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 4,
  },
});

export default FormularioProducto;
