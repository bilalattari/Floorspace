import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, View, SafeAreaView, Switch, Image} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import Text from '../Component/Text';
import Row from '../Component/ProfileRow';
import FPicker from '../Component/Picker';
import Block from '../Component/Block';
import RoundBtn from '../Component/RoundBtn';
import CustomInput from '../Component/Input';
import ImagePicker from 'react-native-image-crop-picker';

import {
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native-gesture-handler';

let footer = [
  {name: 'edit', type: 'feather'},
  {name: 'clipboard-text-outline', type: 'material-community'},
  {name: 'book-open', type: 'feather'},
  {name: 'calculator', type: 'material-community'},
  {name: 'folder-open-outline', type: 'material-community'},
  {name: 'menu', type: 'feather'},
];
let header = [
  {name: 'close', type: 'material-community'},
  {name: 'chevron-left', type: 'entypo'},
  {name: 'plus', type: 'entypo'},
  {name: 'contrast', type: 'foundation'},
];

class EstimateDrawn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  header = () => (
    <View style={styles.topHeaderView}>
      {header.map((icon, index) => {
        return (
          <TouchableOpacity style={styles.topHeaderButton}>
            <Icon
              type={icon.type}
              name={icon.name}
              color={icon.name === 'chevron-left' ? 'grey' : '#fff'}
              size={25}
            />
          </TouchableOpacity>
        );
      })}
      <View style={styles.topHeaderUndoRedo}>
        <Image source={require('../assets/undo.png')} />
        <Image source={require('../assets/redo.png')} />
      </View>
    </View>
  );

  footer = () => (
    <View style={styles.footerView}>
      {footer.map((icon, index) => {
        return (
          <TouchableOpacity style={{padding: 12}}>
            <Icon type={icon.type} name={icon.name} color={'#fff'} size={25} />
          </TouchableOpacity>
        );
      })}
    </View>
  );

  render() {
    let {navigation} = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        {this.header()}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress = {()=> navigation.navigate('EstimateOverView')}>
            <Image
              style={{height: 200, width: 200, resizeMode: 'stretch'}}
              source={require('../assets/room.png')}
            />
          </TouchableOpacity>
        </View>
        {this.footer()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  footerView: {
    width: '92%',
    height: 50,
    borderRadius: 25,
    alignSelf: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  topHeaderButton: {
    height: 45,
    width: 45,
    borderRadius: 25,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topHeaderUndoRedo: {
    width: 110,
    height: 45,
    borderRadius: 25,
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#000',
    alignItems: 'center',
  },
  topHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 65,
  },
});

export default EstimateDrawn;
