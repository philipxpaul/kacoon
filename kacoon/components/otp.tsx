// OTPPage.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from './Authcontext';

type RootStackParamList = {
  AuthSection: undefined;
  OTPPage: { confirmation: any };  // Adjust the type of `confirmation` as needed
  Home: undefined;
};

type OTPPageProps = StackScreenProps<RootStackParamList, 'OTPPage'>;


const OTPPage = ({ route, navigation }: OTPPageProps) => {
  const [otp, setOtp] = useState('');
  const confirmation = route.params.confirmation;

  const handleVerifyOtp = async () => {
    try {
      const result = await confirmation.confirm(otp);
      if (result.user) {
        // OTP was confirmed successfully
        Alert.alert('OTP confirmed!', 'You are now logged in.');
        navigation.navigate('Home');  // Navigate to Home screen or any other screen
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Invalid OTP', 'The OTP entered is invalid. Please try again.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        maxLength={6}  // Assuming a 6-digit OTP
      />
      <Button title="Verify OTP" onPress={handleVerifyOtp} />
    </View>
  );
};

export default OTPPage;
