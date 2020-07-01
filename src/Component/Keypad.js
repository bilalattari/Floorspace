import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';
import Input from './Input';
import FIcon from 'react-native-vector-icons/Feather';
import Gestures from 'react-native-easy-gestures';
import MovableView from 'react-native-movable-view';

function Keypad() {
  const [input, setInput] = useState('');
  return (
    <View style={styles.container}>
      <Input value={input} style={styles.input} />
      <FIcon
        name="move"
        size={22}
        color="#aeb0b3"
        style={{position: 'absolute', right: 5, top: 2}}
      />
      <View style={styles.btnView}>
        <TouchableOpacity
          onPress={() => setInput(input + '1')}
          style={[styles.btn, {borderWidth: 0, borderBottomWidth: 2}]}>
          <Text text={'1'} font={18} bold={true} color="#aeb0b3" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setInput(input + '2')}
          style={[styles.btn, {borderTopWidth: 0, borderRightWidth: 0}]}>
          <Text text={'2'} font={18} bold={true} color="#aeb0b3" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setInput(input + '3')}
          style={[styles.btn, {borderTopWidth: 0, borderRightWidth: 0}]}>
          <Text text={'3'} font={18} bold={true} color="#aeb0b3" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setInput(input + "'")}
          style={[styles.btn, {borderTopWidth: 0, borderRightWidth: 0}]}>
          <Text text={"'"} font={18} bold={true} color="#aeb0b3" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setInput(input + '4')}
          style={[
            styles.btn,
            {borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0},
          ]}>
          <Text text={'4'} font={18} bold={true} color="#aeb0b3" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setInput(input + '5')}
          style={[styles.btn, {borderTopWidth: 0, borderRightWidth: 0}]}>
          <Text text={'5'} font={18} bold={true} color="#aeb0b3" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setInput(input + '6')}
          style={[styles.btn, {borderTopWidth: 0, borderRightWidth: 0}]}>
          <Text text={'6'} font={18} bold={true} color="#aeb0b3" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setInput(input + '"')}
          style={[styles.btn, {borderTopWidth: 0, borderRightWidth: 0}]}>
          <Text text={'"'} font={18} bold={true} color="#aeb0b3" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setInput(input + '7')}
          style={[
            styles.btn,
            {borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0},
          ]}>
          <Text text={'7'} font={18} bold={true} color="#aeb0b3" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setInput(input + '8')}
          style={[styles.btn, {borderTopWidth: 0, borderRightWidth: 0}]}>
          <Text text={'8'} font={18} bold={true} color="#aeb0b3" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setInput(input + '9')}
          style={[styles.btn, {borderTopWidth: 0, borderRightWidth: 0}]}>
          <Text text={'9'} font={18} bold={true} color="#aeb0b3" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setInput(input + '<-')}
          style={[styles.btn, {borderTopWidth: 0, borderRightWidth: 0}]}>
          <Text text={'<-'} font={18} bold={true} color="#aeb0b3" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setInput('')}
          style={[
            styles.btn,
            {
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
            },
          ]}>
          <Text text={'Clear'} font={16} color="#aeb0b3" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setInput(input + '0')}
          style={[
            styles.btn,
            {borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 0},
          ]}>
          <Text text={'0'} font={18} bold={true} color="#aeb0b3" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setInput(input + '.')}
          style={[
            styles.btn,
            {borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 0},
          ]}>
          <Text text={'.'} font={18} bold={true} color="#aeb0b3" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setInput('')}
          style={[
            styles.btn,
            {borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 0},
          ]}>
          <Text text={'Enter'} font={16} color="#aeb0b3" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 75,
    backgroundColor: 'transparent',
    borderWidth: 2,
    width: 200,
    borderColor: '#ccc',
  },
  input: {
    borderColor: '#ccc',
    backgroundColor: 'transparent',
    width: '100%',
    borderBottomWidth: 2,
    height: 50,
    paddingBottom: 2,
    fontSize: 18,
    color: '#aeb0b3',
  },
  btn: {
    borderColor: '#ccc',
    borderWidth: 2,
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnView: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

export default Keypad;
