/* eslint-disable */

import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Image,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';
import Drawer from 'react-native-drawer';
import { themeColor } from '../Constant/index';
import { Icon, SearchBar } from 'react-native-elements';
import CustomText from './Text';
import ControlPanel from '../Component/ControlPanel';
import SafeAreaView from 'react-native-safe-area-view';

export default class Header extends Component {
  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };
  render() {
    let { navigation, heading, placeholder } = this.props;
    return (
      <Drawer
        ref={(ref) => (this._drawer = ref)}
        type="overlay"
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={{
          drawerOverlay: {
            borderRightWidth: 2,
            borderRightColor: 'rgba(0, 0, 0, 0.1)',
          },
        }}
        content={<ControlPanel closeControlPanel={this.closeControlPanel} navigation={this.props.navigation} />}>
        <SafeAreaView forceInset={{ top: "always", bottom: "always" }} style={{ flex: 1 }}>
          <View style={{ backgroundColor: 'rgb(255,255,255)' }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={this.openControlPanel}>
                <Image
                  source={require('../assets/menu.png')}
                  style={styles.menu}
                />
              </TouchableOpacity>
              <CustomText text={heading} bold={true} />
              <TouchableOpacity>
                <Image
                  source={require('../assets/avatar.jpg')}
                  style={styles.avatar}
                />
              </TouchableOpacity>
            </View>
            <SearchBar
              placeholder={placeholder ? placeholder : 'Search Existing Project'}
              containerStyle={styles.containerStyle}
              onChangeText={(text) => this.props.onChangeText(text)}
              inputContainerStyle={styles.inputContainerStyle}
              placeholderTextColor={'#707070'}
              value={this.props.value}
              onCancel={() => this.props.cancel()}
              inputStyle={{ fontWeight: 'bold', fontSize: 15 }}
            />
          </View>
          {this.props.children}
        </SafeAreaView>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  containerStyle: {
    backgroundColor: '#fff',
    borderBottomColor: '#fff',
    borderTopColor: '#fff',
    marginVertical: 6,
  },
  inputContainerStyle: {
    backgroundColor: '#F1F1F1',
    borderColor: '#ccc',
    borderWidth: 1,
    height: 40,
    marginHorizontal: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderRadius: 25,
  },

  menu: { height: 40, width: 40, resizeMode: 'contain' },
  avatar: { height: 50, width: 50, borderRadius: 125 },
});
