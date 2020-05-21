import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {themeColor} from '../Constant';
import {TextInput, View} from 'react-native';
import Text from './Text';
export default CustomInput = (props) => (
  <View style={{width: '88%', marginTop: props.title ?  12 : 3, alignSelf: 'center'}}>
    {props.title ? (
      <Text bold={true} font={15} style={{paddingBottom: 2}}>
        {props.title}
      </Text>
    ) : null}
    <TextInput
      style={[
        {
          height: 50,
          backgroundColor: '#fff',
          elevation: 1,
          width: '100%',
          paddingLeft: 12,
          fontWeight: 'bold',
        },
        props.customStyle,
      ]}
      
      {...props}
    />
  </View>
);
