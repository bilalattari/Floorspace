/* eslint-disable */

import React, {Component} from 'react';
import {Text} from 'react-native';
import {themeColor} from '../Constant';
export default CustomText = (props) => (
  <Text
    style={[
      {
        fontSize: props.font ? props.font : 18,
        textAlign: props.align ? props.align : 'left',
        fontWeight: props.bold ? 'bold' : 'normal',
        fontFamily : props.bold ? 'OpenSans-SemiBold' : 'OpenSans-Regular',
        marginVertical: props.marginVertical ? props.marginVertical : 2,
        color: props.color ? props.color : themeColor,
        marginLeft: props.marginLeft ? props.marginLeft : 0,
      },
      props.style,
    ]}
    numberOfLines={props.numberOfLines ? props.numberOfLines : null}>
    {props.text || props.children}
  </Text>
);
