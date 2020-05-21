import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Header} from 'react-native-elements';
import Input from '../Component/Input';
class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {navigation} = this.props;
    let type = navigation.getParam('type')
    return (
      <View style={{flex: 1, backgroundColor: '#F1F1F1'}}>
        <Header
          leftComponent={{
            icon: 'close',
            color: '#fff',
            onPress: () => navigation.navigate('Products'),
          }}
          centerComponent={{
            text: 'Product',
            style: styles.headerTitle,
          }}
          rightComponent={{
            text: type === 'add' ? 'Add' : 'Edit',
            style: styles.headerTitle,
          }}
          containerStyle={styles.headerContainer}
        />
        <ScrollView>
          <Input title={'Company'} placeholder={'Company'} />
          <Input
            title={'Contact First Name'}
            placeholder={'Contact First Name'}
          />
          <Input
            title={'Contact Last Name'}
            placeholder={'Contact Last Name'}
          />
          <Input
            title={'Phone Number'}
            placeholder={'Phone Number'}
            keyboardType={'number-pad'}
          />
          <Input title={'Email'} placeholder={'Email'} />
          <Input title={'Address'} placeholder={'Street'} />
          <Input placeholder={'Suburb'} />
          <Input placeholder={'City'} />
          <Input
            title={'Notes'}
            placeholder={'Notes'}
            multiline={true}
            numberOfLines={4}
            customStyle={{height: 120, marginBottom: 12}}
          />
        </ScrollView>
      </View>
    );
  }
}

export default AddProduct;
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#12B3B4',
    justifyContent: 'space-around',
  },
  headerTitle: {color: '#fff', fontWeight: 'bold', fontSize: 18},
});
