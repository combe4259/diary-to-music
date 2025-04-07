import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App'; // RootStackParamList를 정의한 파일에서 가져옵니다.

const SignIn: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleKakaoLogin = () => {
    // 실제 카카오톡 로그인 로직이 여기에 추가됩니다.
    // 예: 카카오톡 SDK를 통해 로그인 처리 후, 성공 시 아래 로직 실행
    // 이 예제에서는 로그인 성공 시 직접 호출합니다.
    Alert.alert('카카오톡 로그인', '카카오톡 로그인 성공!');

    // 로그인 성공 시 CalendarPage로 이동
    navigation.navigate('CalendarPage');
  };

  return (
    <View style={styles.formContainer}>
      <Image source={require('../assets/images/logo_full2.png')} style={styles.appLogo} />
      <View style={styles.formBox}>
        {/* <Image source={require('../assets/images/logo_full2.png')} style={styles.appfullLogo} /> */}
        <TouchableOpacity style={styles.kakaoLoginButton} onPress={handleKakaoLogin}>
          <Text style={styles.kakaoLoginText}>카카오톡으로 로그인하기</Text>
        </TouchableOpacity>
        <View style={styles.formFooter}>
          <Text style={styles.footerText}>listen to own's story</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  appLogo: {
    width: 280,
    height: 280,
    marginBottom: 20,
  },
  formBox: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#f1f1f1',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  appfullLogo: {
    width: 200,
    height: 50,
    marginBottom: 20,
  },
  kakaoLoginButton: {
    backgroundColor: '#FEE500',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    width: '100%',
  },
  kakaoLoginText: {
    color: '#3c1e1e',
    fontSize: 16,
    fontWeight: 'bold',
  },
  formFooter: {
    marginTop: 20,
  },
  footerText: {
    color: '#800080',
    fontSize: 16,
  },
});

export default SignIn;
