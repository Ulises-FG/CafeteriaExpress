import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlightOpacity,
} from 'react-native';

const Square = ({ color, data }) => {
  const squareStyle = {
    width: 150,
    height: 90,
    backgroundColor: color,
    borderRadius: 9,
    opacity: 0.8,
    elevation: 3,
  };
  const viewSquareStyle = {
    width: 150 * 2,
    height: 90,
  };

  const handleDeletePress = () => {
    console.log('Botón Eliminar presionado');
    // Realiza cualquier función relacionada con eliminar aquí
  };

  const handleEditPress = () => {
    console.log('Botón Editar presionado');
    // Realiza cualquier función relacionada con editar aquí
  };

  const styles = StyleSheet.create({
    square: {
      left: -50,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    viewSquare: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    data: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      alignItems: 'center',
    },
    deleteButton: {
      backgroundColor: 'red',
      borderRadius: 10,
      padding: 2,
      margin: 2,
    },
    editButton: {
      backgroundColor: 'blue',
      borderRadius: 10,
      padding: 2,
      margin: 2,
    },
    buttonsContainer: {
      flex: 1,
      left: 75,
      top: -97,
    },
  });

  return (
    <View style={[styles.viewSquare, viewSquareStyle]}>
      <View style={[styles.square, squareStyle]}>
        <Text style={styles.data}>{data}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableHighlightOpacity
          style={styles.deleteButton}
          onPress={handleDeletePress}
        >
          <Text style={styles.data}>Eliminar</Text>
        </TouchableHighlightOpacity>
        <TouchableHighlightOpacity
          style={styles.editButton}
          onPress={handleEditPress}
        >
          <Text style={styles.data}>Editar</Text>
        </TouchableHighlightOpacity>
      </View>
    </View>
  );
};

export default Square;
