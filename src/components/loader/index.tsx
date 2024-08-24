import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const CustomLoader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loaderBox}>
        <ActivityIndicator color={'#FFF'} size={'large'} />
        <Text style={styles.loaderText}>Loading...</Text>
      </View>
    </View>
  );
};
export default CustomLoader;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: '#FF5349',
  },
  loaderBox: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  loaderText: {
    fontSize: 21,
    color: '#FFF',
    fontWeight: '200',
  },
});
