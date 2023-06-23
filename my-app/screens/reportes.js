import React, { useRef } from 'react';
import { FlatList, Text, View } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';



const data = [
  
  { id: 1, name: 'Jugo Manzana', cant: 1, price_c: 8, price_v: 12, total: 0 },
  { id: 2, name: 'Refresco', cant: 2, price_c: 24, price_v: 35, total: 0 },
  { id: 3, name: 'Papas', cant: 3, price_c: 31, price_v: 40, total: 0 },
  { id: 3, name: 'Churros', cant: 1, price_c: 31, price_v: 15, total: 0 }
]

data.forEach(item => {
  item.total = item.price_v * item.cant;
})



const Table = () => {

  const item = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'black' }}>
        <View style={{ width: 100, backgroundColor: '#95B8F6', justifyContent: 'center', alignItems: 'center' }}>
          <Text>{item.id}</Text>
        </View>
        <View style={{ width: 100, backgroundColor: '#95B8F6', justifyContent: 'center', alignItems: 'center' }}>
          <Text>{item.name}</Text>
        </View>
        <View style={{ width: 100, backgroundColor: '#95B8F6', justifyContent: 'center', alignItems: 'center' }}>
          <Text>{item.cant}</Text>
        </View>
        <View style={{ width: 100, backgroundColor: '#95B8F6', justifyContent: 'center', alignItems: 'center' }}>
          <Text>{item.price_c}</Text>
        </View>
        <View style={{ width: 100, backgroundColor: '#95B8F6', justifyContent: 'center', alignItems: 'center' }}>
          <Text>{item.price_v}</Text>
        </View>
        <View style={{ width: 100, backgroundColor: '#95B8F6', justifyContent: 'center', alignItems: 'center' }}>
          <Text>{item.total}</Text>
        </View>
        
      </View>
      
    )
  }

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  const totalSum = data.reduce((accumulator, item) => accumulator + item.total, 0);

  return (
    <View style={{ flex: 1, marginTop: '10%' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, alignItems:'center' }}>Reporte de Ventas  {formattedDate} ****** Total General ${totalSum}</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, alignItems:'center' }}></Text>
      <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'black' }}>
        <View style={{ width: 100, backgroundColor: '#C3F8FF', justifyContent: 'center', alignItems: 'center' }}>
          <Text>ID</Text>
        </View>
        <View style={{ width: 100, backgroundColor: '#C3F8FF', justifyContent: 'center', alignItems: 'center' }}>
          <Text>PRODUCTO</Text>
        </View>
        <View style={{ width: 100, backgroundColor: '#C3F8FF', justifyContent: 'center', alignItems: 'center' }}>
          <Text>CANTIDAD</Text>
        </View>
        <View style={{ width: 100, backgroundColor: '#C3F8FF', justifyContent: 'center', alignItems: 'center' }}>
          <Text>PRECIO C</Text>
        </View>
        <View style={{ width: 100, backgroundColor: '#C3F8FF', justifyContent: 'center', alignItems: 'center' }}>
          <Text>PRECIO V</Text>
        </View>
        <View style={{ width: 100, backgroundColor: '#C3F8FF', justifyContent: 'center', alignItems: 'center' }}>
          <Text>TOTAL</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={item}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )

  
}

export default Table