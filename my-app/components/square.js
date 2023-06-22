import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlightOpacity,
  Text,
} from 'react-native';

const Square = ({ sizeWidth, sizeHeight, color, data, leftData }) => {
  const handlePress = () => {
    console.log('¡El botón ha sido presionado!');
    // Aquí puedes realizar las acciones que desees cuando el botón sea presionado
  };
  const squareStyle = {
    width: sizeWidth,
    height: sizeHeight,
    backgroundColor: color,
    borderRadius: sizeHeight / 9, // Hace que el cuadrado sea redondo
    opacity: 0.8, // Establece la opacidad al 80% para que sea semi-transparente
    elevation: 3, // Añade una pequeña elevación para que parezca flotar
  };

  const styles = StyleSheet.create({
    square: {
      left: leftData,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    data: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
  });
  return (
    <View style={[styles.square, squareStyle]}>
      <TouchableHighlightOpacity onPress={handlePress}>
        <View>
          <Text style={styles.data}>{data}</Text>
        </View>
      </TouchableHighlightOpacity>
    </View>
  );
};

export default Square;
