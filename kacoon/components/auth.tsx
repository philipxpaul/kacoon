// auth.tsx

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../components/type';   // Adjust the import path as needed

type AuthSectionProps = StackScreenProps<RootStackParamList, 'AuthSection'>;


const AuthSection = ({ navigation }: AuthSectionProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleAuth = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      // If the above line doesn't throw an error, then the OTP has been sent
      // Navigate to the OTP screen and pass the confirmation object
      navigation.navigate('OTPPage', { confirmation });
    } catch (error:any) {
      console.error(error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />
      <Button title="Continue" onPress={handleAuth} />
      <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

export default AuthSection;
