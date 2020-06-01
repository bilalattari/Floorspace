import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
export default Block = ({
  justify,
  align,
  flex,
  background,
  children,
  direction,
  style,
}) => (
  <View
    style={[
      {
        flex: flex ? flex : 1,
        justifyContent: justify,
        alignItems: align,
        backgroundColor: background,
        flexDirection: direction,
      },
      style,
    ]}>
    {children}
  </View>
);
