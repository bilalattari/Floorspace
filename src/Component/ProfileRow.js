import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {themeColor} from '../Constant';
import {
  TextInput,
  View,
  Switch,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Text from './Text';
export default ProfileRow = ({
  leftText,
  rightText,
  icon,
  switchBtn,
  backgroundColor,
  toggleSwitch,
  leftBold,
  children
}) => (
  <View
    style={[
      styles.rowDive,
      {
        backgroundColor: backgroundColor ? backgroundColor : '#fff',
      },
    ]}>
    <Text color={'#1F1C19'} bold={leftBold ? true : false} font={16}>
      {leftText}
    </Text>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {rightText && (
        <Text color={'#1F1C19'} bold={false} font={16}>
          {rightText}
        </Text>
      )}
      {icon && (
        <Icon
          type={'material-icons'}
          name={'chevron-right'}
          color={'#707070'}
          size={25}
          iconStyle={{marginTop: 2}}
        />
      )}
      {switchBtn && (
        <Switch
          trackColor={{false: '#767577', true: '#44C71C'}}
          thumbColor={true ? '#44C71C' : '#f4f3f4'}
          ios_backgroundColor="#fff"
          onValueChange={toggleSwitch}
          value={true}
        />
      )}
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  rowDive: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    paddingHorizontal: 12,
  },
});
