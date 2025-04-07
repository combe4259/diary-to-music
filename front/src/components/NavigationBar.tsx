import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const NavigationBar: React.FC = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.navContainer}>
        <Image source={require('../assets/images/logo.png')} style={styles.navTitle}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    backgroundColor: '#fff', // 배경 색상 설정
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, // 그림자 효과
    shadowRadius: 4,
    elevation: 2, // 그림자 효과 (Android)
    position: 'absolute', // 상단 고정
    top: 0,
    left: 0,
    zIndex: 1000, // 다른 요소 위에 위치
    height: 60,
    justifyContent: 'center', // 중앙 타이틀 위치 조정
    alignItems: 'center',
    padding: 10,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 5,
    paddingTop: 20,
  },
  navTitle: {
    height: 30,
    resizeMode: 'contain', // 이미지 크기 비율 유지하며 조정
  },
});

export default NavigationBar;
