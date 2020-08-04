/* eslint-disable */

import React from 'react';
import { Icon } from 'react-native-elements';
import { TouchableOpacity, Image } from 'react-native';
export default AddButton = (props) => (
  <TouchableOpacity
    {...props}>
    <Image
      source={require('../assets/plus.png')}
      style={[props.customStyle ? props.customStyle : {
        height: 70,
        width: 70,
        borderRadius: 125,
        position: "absolute",
        bottom: 15,
        right: 15,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
      }]} />
    {/* <Icon type = {'font-awesome'} name = {'plus'} /> */}
  </TouchableOpacity>
);
