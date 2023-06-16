import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importación de componentes 
import Login from './screens/Login';





const Stack = createNativeStackNavigator();

function MyStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{title:'Login'}}/>
      
    
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
