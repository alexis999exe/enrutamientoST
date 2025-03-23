import React from 'react';
import { View, Text, Image, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const images = [
  { id: '1', uri: require('./assets/imagen1.jpeg') },
  { id: '2', uri: require('./assets/imagen2.jpeg') },
  { id: '3', uri: require('./assets/imagen3.jpg') }
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galería</Text>
      <FlatList
        data={images}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Image source={item.uri} style={styles.image} />}
      />
      <Button title="Ir a Perfil" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario</Text>
      <TextInput style={styles.input} placeholder="Nombre" />
      <TextInput style={styles.input} placeholder="Fecha de Nacimiento" />
      <TextInput style={styles.input} placeholder="Edad" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Sexo" />
      <TextInput style={styles.input} placeholder="Dirección" />
      <Button title="Guardar" onPress={() => alert('Datos guardados')} />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  image: { width: 100, height: 100, margin: 5 },
  input: { width: '100%', borderWidth: 1, padding: 10, marginVertical: 5, borderRadius: 5 }
});
