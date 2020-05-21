import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {themeColor} from '../Constant';
import {TextInput, View, TouchableOpacity} from 'react-native';
import Text from './Text';
export default ProfileRow = ({}) => (
  <View
    style={{
      backgroundColor: '#fff',
      paddingVertical: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5,
      paddingHorizontal: 6,
    }}>
    <Text>Subscription Settings</Text>
    <TouchableOpacity style={{flexDirection: 'row'}}>
      <Text>Admin</Text>
    </TouchableOpacity>
  </View>
);
