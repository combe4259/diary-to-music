import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './src/screens/SignIn';
import CalendarPage from './src/screens/CalendarPage';
import DiaryEntryPage from './src/screens/DiaryEntryPage';
import NavigationBar from './src/components/NavigationBar';
import RecommendSong from './src/screens/RecommendSong';
import 'react-native-gesture-handler';

export type RootStackParamList = {
  SignIn: undefined;
  Register: undefined;
  CalendarPage: undefined;
  DiaryEntryPage: { date: Date };
  Calendar: undefined;
  Settings: undefined;
  RecommendSong: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const [loading, setLoading] = useState(true); // 로딩 상태를 관리

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="CalendarPage" component={CalendarPage} />
        <Stack.Screen name="DiaryEntryPage" component={DiaryEntryPage} />
        <Stack.Screen name="RecommendSong" component={RecommendSong} />
      </Stack.Navigator>
      <NavigationBar />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
