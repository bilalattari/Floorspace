import React, {useState} from 'react';
import {Alert, Modal, TouchableOpacity, View, StyleSheet} from 'react-native';
import Text from './Text';
import Input from './Input';

export default function HandDrawModal(props) {
  const [color, setColor] = useState('#000');
  const [size, setSize] = useState(2);

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
            <Text font={24} text={'Hand Draw'} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '50%', justifyContent: 'center'}}>
                <Text
                  style={{marginLeft: 15}}
                  font={16}
                  text={'Select Color'}
                />
                <View style={styles.colorView}>
                  <TouchableOpacity
                    onPress={() => setColor('#000')}
                    style={[
                      styles.colors,
                      {borderWidth: color === '#000' ? 5 : 0},
                    ]}></TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setColor('red')}
                    style={[
                      styles.colors,
                      {
                        backgroundColor: 'red',
                        borderWidth: color === 'red' ? 5 : 0,
                      },
                    ]}></TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setColor('#12B3B4')}
                    style={[
                      styles.colors,
                      {
                        backgroundColor: '#12B3B4',
                        borderWidth: color === '#12B3B4' ? 5 : 0,
                      },
                    ]}></TouchableOpacity>
                </View>
              </View>
              <View style={{width: '50%'}}>
                <Input
                  value={size}
                  onChangeText={(text) => setSize(text)}
                  keyboardType={'numeric'}
                  customStyle={{marginTop: 5}}
                  title={'Enter Size'}
                  placeholder={'Enter Size'}
                  style={{fontSize: 16, backgroundColor: '#fff'}}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => props.setHandDraw(color, size)}
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
  colors: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#000',
  },
  colorView: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
