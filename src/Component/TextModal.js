import React, {useState} from 'react';
import {Alert, Modal, TouchableOpacity, View, StyleSheet} from 'react-native';
import Text from './Text';
import Input from './Input';
import FPicker from './Picker';
export default function TextModal(props) {
  const [text, setText] = useState('');
  const [style, setStyle] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text font={24} text={'Text Instruction'} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '100%'}}>
                <Input
                  value={text}
                  onChangeText={(text) => setText(text)}
                  customStyle={{marginTop: 5}}
                  title={'Enter Text'}
                  placeholder={'Enter Text'}
                />
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '95%'}}>
                <FPicker
                  selectedValue={style}
                  onChange={(item) => setStyle(item)}
                  bold={false}
                  pickerItems={['Bold', 'Italic', 'Underline']}
                  header={'Font Style'}
                />
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '100%'}}>
                <Input
                  value={size}
                  onChangeText={(text) => setSize(text)}
                  keyboardType={'numeric'}
                  customStyle={{marginTop: 5}}
                  title={'Font Size in PX'}
                  placeholder={'Font Size'}
                />
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '95%'}}>
                <FPicker
                  selectedValue={color}
                  onChange={(item) => setColor(item)}
                  bold={false}
                  pickerItems={['green', 'blue', 'red']}
                  header={'Font Colour'}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => props.setTextModal({text, style, size, color})}
              style={styles.btn}>
              <Text color="#fff" size={20} text={'SAVE'} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '90%',
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    height: 'auto',
  },
  btn: {
    backgroundColor: '#2D2D2D',
    width: '90%',
    height: 55,
    marginTop: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
