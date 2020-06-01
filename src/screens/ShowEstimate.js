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
class EstimateOverView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkList: ['Room', 'Bedroom', 'Lounge'],
      btn: 'on',
      openDetail: null,
      images: [],
    };
  }

  render() {
    let {navigation} = this.props;
    let {checkList, images, openDetail} = this.state;
    let type = navigation.getParam('type');
    return (
      <SafeAreaView>
        <Header
          leftComponent={{
            icon: 'close',
            color: '#fff',
            onPress: () => navigation.navigate('Home'),
          }}
          centerComponent={{
            text: 'Estimate',
            style: styles.headerTitle,
          }}
          rightComponent={
            <View style={styles.customRightComponent}>
              <TouchableOpacity style={{padding: 8}}>
                <Image
                  source={require('../assets/redo.png')}
                  style={styles.undeRedo}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 8}}>
                <Image
                  source={require('../assets/undo.png')}
                  style={styles.undeRedo}
                />
              </TouchableOpacity>
            </View>
          }
          containerStyle={styles.headerContainer}
        />
        <ScrollView>
          <Row
            leftText={'Layout Direction'}
            backgroundColor={undefined}
            leftBold={true}
          />
          <Row
            leftText={'Durable Plus'}
            leftBold={true}
            backgroundColor={'#fff'}>
            <TouchableOpacity style={styles.arrowButton}>
              <Icon type={'feather'} name={'arrow-right'} color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowButton}>
              <Icon type={'feather'} name={'arrow-down'} color={'#fff'} />
            </TouchableOpacity>
          </Row>
          <Row
            leftText={'Super Plash'}
            leftBold={true}
            backgroundColor={'#fff'}>
            <TouchableOpacity style={styles.arrowButton}>
              <Icon type={'feather'} name={'arrow-right'} color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowButton}>
              <Icon type={'feather'} name={'arrow-down'} color={'#fff'} />
            </TouchableOpacity>
          </Row>
          <Row leftBold={true} leftText={'Coving'} />
          <Row leftBold={true} leftText={'Rotate'} />
          <Row leftBold={true} leftText={'Resize'} />
          <Row leftBold={true} leftText={'Flip Horizontal'} />
          <Row leftBold={true} leftText={'Flip Vertical'} />
          <Row leftBold={true} leftText={'Reopen to draw'} />
          <Row leftBold={true} leftText={'Delete'} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#12B3B4',
    justifyContent: 'space-around',
  },
  plusButton: {
    height: 35,
    width: 35,
    marginBottom: 3,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  arrowButton: {
    height: 33,
    width: 60,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginHorizontal: 3,
  },
  plusView: {
    width: 45,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 5,
  },
  detailView: {
    backgroundColor: '#fff',
    height: 40,
    marginLeft: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  undeRedo: {
    height: 15,
    resizeMode: 'contain',
    width: 15,
    resizeMode: 'contain',
  },
  loungeViewButton: {
    height: 28,
    width: 28,
    borderRadius: 125,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#12B3B4',
  },
  loungeView: {
    backgroundColor: '#fff',
    height: 50,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  customRightComponent: {
    width: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerTitle: {color: '#fff', fontWeight: 'bold', fontSize: 18},
});

export default EstimateOverView;
