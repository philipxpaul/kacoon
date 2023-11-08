// App.tsx

import React from 'react';
import firebase from '@react-native-firebase/app';
import { AuthProvider } from './components/Authcontext';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './appnavigator/nav';  // Adjust the import path as needed

const firebaseConfig = {
  appId: '1:773133299388:android:a9d0a89bbb4a9df6002ab9', // Replace with your app's Firebase appId
  projectId: 'kacoon-62e55',
  apiKey: "AIzaSyC8U2YEprTWhXg2ibv6_DHNc6Ah4TgMfjc",
  authDomain: "kacoon-62e55.firebaseapp.com",
  databaseURL: "https://kacoon-62e55-default-rtdb.asia-southeast1.firebasedatabase.app/",
  messagingSenderId: "773133299388",
  storageBucket: "https://console.firebase.google.com/project/kacoon-62e55/storage/kacoon-62e55.appspot.com/files",
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
