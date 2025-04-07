import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#3498db" style={styles.spinner} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  spinner: {
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});

export default Loading;
