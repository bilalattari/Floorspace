/* eslint-disable */

import React, {Component} from 'react';
import {Button, Icon} from 'react-native-elements';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {themeColor, pinkColor} from '../Constant/index';
import Text from './Text';
export default CustomButton = (props) =>
 
    <TouchableOpacity
      style={[
        {
          height: props.height ? props.height : 50,
          width: props.width ? props.width : '85%',
          borderRadius: 12,
          alignSelf: 'center',
          backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : themeColor,
          justifyContent: 'center',
          alignItems: 'center',
        },
        props.buttonStyle,
      ]}
      {...props}>
      {props.loader ? (
        <ActivityIndicator
          color={props.loaderColor ? props.loaderColor : '#fff'}
          size={'large'}
        />
      ) : (
        <Text text={props.title} bold={true} style={props.textStyle} />
      )}
    </TouchableOpacity>
