// AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthSection from '../components/auth';
import OTPPage from '../components/otp';
import Home from '../components/home';
import Signup from '../components/signup';
import { RootStackParamList } from '../components/type';  // Adjust the import path as needed


const Stack = createStackNavigator<RootStackParamList>();

// ... rest of your file


const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="AuthSection">
      <Stack.Screen name="AuthSection" component={AuthSection} options={{ title: 'Enter Phone Number' }} />
      <Stack.Screen name="OTPPage" component={OTPPage} options={{ title: 'Verify OTP' }} />
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen name="Signup" component={Signup} options={{ title: 'Signup' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
