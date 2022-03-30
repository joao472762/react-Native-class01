import React  from "react";
import { View, Text, StyleSheet } from "react-native"; 
export default function  Card(){
    return(
        <View style={styles.card}>
        <Text style={styles.cardTitle}>
          About
        </Text>
        <Text style={styles.cardSubtitle}>
         Today i will learning build a app with js
        </Text>
      </View>)
      
    
}
const styles = StyleSheet.create({
  card: {
    marginVertical: 7,
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
})