/* eslint-disable */

import React from 'react';
import { Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native';
export default AddButton = (props) => (
  <TouchableOpacity
    style={{
      height: 55,
      width: 55,
      borderRadius: 125,
      position : "absolute",
      bottom : 15,
      right : 15,
      elevation : 3,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    {...props}>
    <Icon type = {'font-awesome'} name = {'plus'} />
    </TouchableOpacity>
);
