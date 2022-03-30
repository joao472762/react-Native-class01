import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Card from './card';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>React Native</Text>
      <ScrollView>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    flex: 1,
    backgroundColor: '#2a2a2a',
    justifyContent: 'center',
    alignItems: 'center',

  },
  title:{
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 4,
  },
  cardTitle:{
    textAlign: 'center',
    fontSize: 22,
     fontWeight: 'bold',
     marginBottom: 10
  },
  cardSubtitle: {
    fontSize: 18,
    color: 'gray'
  }
});
