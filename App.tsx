import React from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonHeart from './ButtonHeart';
import ButtonLike from './ButtonLike';

export default function App() {
  return (
    <View style={styles.container}>
        <ButtonHeart/>
        <ButtonLike/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
