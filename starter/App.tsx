import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import CarItem from './comp/CarItem/Index'

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem></CarItem>
      <StatusBar  />
    </View>
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
