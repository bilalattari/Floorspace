import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {themeColor} from '../Constant';
import {TextInput, View} from 'react-native';
import Text from './Text';
export default CustomInput = (props) => (
  <View
    style={{
      width: '88%',
      marginTop: props.title ? 12 : 3,
      alignSelf: 'center',
    }}>
    {props.title ? <Text font={15} bold = {true}>{props.title}</Text> : null}
    <TextInput
      style={[
        {
          height: 50,
          backgroundColor: '#fff',
          width: '100%',
          paddingLeft: 12,
          fontWeight : 'bold',
          fontFamily : 'OpenSans-SemiBold'
        },
        props.customStyle,
      ]}
      {...props}
    />
  </View>
);
