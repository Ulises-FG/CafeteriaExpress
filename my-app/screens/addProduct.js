import React from 'react';
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore';
import {
  View,
  Text,
  StyleSheet,
  VirtualizedList,
  StatusBar,
  Pressable,
  TouchableHighlight,
} from 'react-native';
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

const getDatabase = async () => {
  let item = [];
  await productCollection
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        item.push(doc.data());
      });
    })
    .catch((error) => {
      console.error('Error al obtener los documentos:', error);
    });
  return item;
};

const getItem = (_data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});

const getItemCount = async () => {
  const items = await getDatabase(); // Obtenemos el array completo de la función getDatabase()
  return items.length; // Retornamos el length del array
};

const EditButton = () => {
  return (
    <TouchableHighlight>
      <Pressable style={[styles.button, styles.editButton]}>
        <Text style={styles.buttonText}>Editar</Text>
      </Pressable>
    </TouchableHighlight>
  );
};

const DeleteButton = () => {
  return (
    <TouchableHighlight>
      <Pressable style={[styles.button, styles.deleteButton]}>
        <Text style={styles.buttonText}>Eliminar</Text>
      </Pressable>
    </TouchableHighlight>
  );
};

const ActionButtons = () => {
  return (
    <View style={styles.actionButtonsContainer}>
      <EditButton />
      <DeleteButton />
    </View>
  );
};

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>Descripción del item...</Text>
    <View style={styles.actionButtonsWrapper}>
      <ActionButtons />
    </View>
  </View>
);
const itemsGet = async () => {
  const items = await getDatabase();
  return items;
};
const AddProduct = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight>
        <Pressable
          style={styles.addButton}
          onPress={() => navigation.navigate('FormScreen')}
        >
          <Text style={styles.buttonText}>Agregar Producto</Text>
        </Pressable>
      </TouchableHighlight>
      <VirtualizedList
        initialNumToRender={3}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
        getItemCount={() => 8}
        getItem={getItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginBottom: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  actionButtonsWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  actionButtonsContainer: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    borderRadius: 8,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  editButton: {
    backgroundColor: '#3498DB',
  },
  deleteButton: {
    backgroundColor: '#FF0000',
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    marginVertical: '2%',
    marginHorizontal: '5%',
    borderRadius: 8,
    backgroundColor: '#27AE60',
  },
});

export default AddProduct;
