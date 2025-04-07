import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const Form: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // 로그인 로직 처리
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.formBox}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.formLinks}>
          <TouchableOpacity onPress={() => Linking.openURL('#')}>
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('#')}>
            <Text style={styles.link}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialLogin}>
          <TouchableOpacity style={styles.kakaoLogin}>
            <Text style={styles.kakaoLoginText}>Login with Kakao</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    color: '#8C148E',
    marginBottom: 20,
  },
  formBox: {
    backgroundColor: '#f1f1f1',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  label: {
    color: '#333',
    marginVertical: 5,
    textAlign: 'left',
    fontSize: 16,
  },
  input: {
    marginVertical: 6,
    padding: 12,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fbf4ff',
  },
  button: {
    backgroundColor: '#8C148E',
    padding: 14,
    borderRadius: 4,
    marginTop: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  formLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  link: {
    color: '#800080',
    fontSize: 14,
  },
  socialLogin: {
    marginTop: 20,
  },
  kakaoLogin: {
    backgroundColor: '#FEE500',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  kakaoLoginText: {
    color: '#3c1e1e',
    fontSize: 16,
  },
});

export default Form;
