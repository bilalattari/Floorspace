/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import SafeAreaView  from 'react-native-safe-area-view';

// import auth from '@react-native-firebase/auth';
function SplashScreen({ navigation }) {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }, []);
  return (
    <SafeAreaView forceInset={{top: "never",bottom: "never"}} style={{flex: 1}}>
      <StatusBar barStyle={"light-content"}/>
      <View style={styles.container}>
        <Image
          source={require('../assets/logo.png')}
          style={{
            height: 180,
            width: '60%',
            resizeMode: 'contain',
            marginBottom: 63,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D2D2D',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSafeArea: {
    flex: 0, 
    backgroundColor: "#000"
}, 
});

export default SplashScreen;
