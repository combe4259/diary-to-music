// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './screens/HomeScreen'; // 기본 화면
// import DetailsScreen from './screens/DetailsScreen'; // 상세 화면

// // 네비게이션 스택의 각 화면에 대한 파라미터 타입을 정의합니다.
// export type RootStackParamList = {
//   Home: undefined;
//   Details: undefined;
// };

// const Stack = createStackNavigator<RootStackParamList>();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
