import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, View, FlatList, Image,SafeAreaView} from 'react-native';
import {themeColor} from '../Constant/index';
import Button from '../Component/Button';
import Text from '../Component/Text';
import {Icon, SearchBar} from 'react-native-elements';
import Footer from '../Component/Footer';
import Container from '../Component/Container';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const List = [
  {
    name: 'Jon Jones',
    address: '20 Chelsea Way, Mapleton',
    created: '01/ 01/ 2020',
    createdTime: '10:54 am',
    modified: '03/ 01/ 2020',
    modifiedTime: '11:54 pm',
    status: 'Active',
  },
  {
    name: 'Jon Jones',
    address: '20 Chelsea Way, Mapleton',
    created: '01/ 01/ 2020',
    createdTime: '10:54 am',
    modified: '03/ 01/ 2020',
    modifiedTime: '11:54 pm',
    status: 'Cold',
  },
  {
    name: 'Jon Jones',
    address: '20 Chelsea Way, Mapleton',
    created: '01/ 01/ 2020',
    createdTime: '10:54 am',
    modified: '03/ 01/ 2020',
    modifiedTime: '11:54 pm',
    status: 'Not Interested',
  },
  {
    name: 'Jon Jones',
    address: '20 Chelsea Way, Mapleton',
    created: '01/ 01/ 2020',
    createdTime: '10:54 am',
    modified: '03/ 01/ 2020',
    modifiedTime: '11:54 pm',
    status: 'Active',
  },
  {
    name: 'Jon Jones',
    address: '20 Chelsea Way, Mapleton',
    created: '01/ 01/ 2020',
    createdTime: '10:54 am',
    modified: '03/ 01/ 2020',
    modifiedTime: '11:54 pm',
    status: 'Cold',
  },
  {
    name: 'Jon Jones',
    address: '20 Chelsea Way, Mapleton',
    created: '01/ 01/ 2020',
    createdTime: '10:54 am',
    modified: '03/ 01/ 2020',
    modifiedTime: '11:54 pm',
    status: 'Not Interested',
  },
  {
    name: 'Jon Jones',
    address: '20 Chelsea Way, Mapleton',
    created: '01/ 01/ 2020',
    createdTime: '10:54 am',
    modified: '03/ 01/ 2020',
    modifiedTime: '11:54 pm',
    status: 'Active',
  },
  {
    name: 'Jon Jones',
    address: '20 Chelsea Way, Mapleton',
    created: '01/ 01/ 2020',
    createdTime: '10:54 am',
    modified: '03/ 01/ 2020',
    modifiedTime: '11:54 pm',
    status: 'Cold',
  },
  {
    name: 'Jon Jones',
    address: '20 Chelsea Way, Mapleton',
    created: '01/ 01/ 2020',
    createdTime: '10:54 am',
    modified: '03/ 01/ 2020',
    modifiedTime: '11:54 pm',
    status: 'Not Interested',
  },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  render() {
    let {navigation} = this.props;
    return (
      <Container
        navigation={navigation}
        value={this.state.search}
        cancel={() => this.setState({search: ''})}
        onChangeText={(text) => this.setState({search: text})}>
        <ScrollView>
          <Text
            color={themeColor}
            text={'Recent Project'}
            bold={true}
            font={21}
            style={styles.heading}
          />
          <FlatList
            data={List}
            renderItem={({item, index}) => (
              <View style={styles.textView}>
                <View style={styles.itemContainer}>
                  <Text color={'#000'} text={item.name} font={18} bold={true} />
                  <Text
                    color={'#000'}
                    text={item.address}
                    font={12}
                    bold={true}
                  />
                  <Text
                    color={'#707070'}
                    text={`Created : ${item.created} ${item.createdTime}`}
                    font={12}
                  />
                  <Text
                    color={'#707070'}
                    text={`Edited : ${item.modified} ${item.modifiedTime}`}
                    font={12}
                  />
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text
                    text={item.status.toUpperCase()}
                    color={
                      item.status === 'Active'
                        ? '#43C71B'
                        : item.status === 'Cold'
                        ? '#1BBAC7'
                        : '#D96034'
                    }
                    font={12}
                    bold={true}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    type={'entypo'}
                    name={'dots-two-vertical'}
                    size={25}
                    color={'black'}
                  />
               
                </TouchableOpacity>
              </View>
            )}
          />
        </ScrollView>
        <Footer />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  heading: {padding: 12},
  itemContainer: {
    flex: 1,
  },
  textView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    minHeight: 80,
    marginVertical: 3,
    padding: 5,
    paddingLeft: 12,
  },
  button: {
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    backgroundColor: '#F1F1F1',
  },
});

export default Home;
