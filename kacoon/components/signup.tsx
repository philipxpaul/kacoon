// src/components/Signup.tsx
import React, { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../components/type';  // Adjust the import path as needed
import { AuthContext } from './Authcontext';  // Import the AuthContext

type SignupProps = StackScreenProps<RootStackParamList, 'Signup'>;

const Signup = ({ navigation }: SignupProps) => {
  const { setConfirmation } = useContext(AuthContext);  // Access setConfirmation from the AuthContext
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignup = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      navigation.navigate('OTPPage', { confirmation });
    } catch (error: any) {
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
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

export default Signup;
