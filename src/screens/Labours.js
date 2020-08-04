import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, View} from 'react-native';

import Container from '../Component/Container';
import SectionList from '../Component/SectionList';
import AddButton from '../Component/AddButton';

class Supplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search : '',
      data: {
        A: [
          {name: 'A Labour', description: 'Some Info'},
          {name: 'A Labour', description: 'Some Info'},
          {name: 'A Labour', description: 'Some Info'},
        ],
        E: [
          {name: 'E Labour', description: 'Some Info'},
          {name: 'E Labour', description: 'Some Info'},
          {name: 'E Labour', description: 'Some Info'},
        ],
        F: [
          {name: 'F Labour', description: 'Some Info'},
          {name: 'F Labour', description: 'Some Info'},
          {name: 'F Labour', description: 'Some Info'},
        ],
        H: [
          {name: 'F Labour', description: 'Some Info'},
          {name: 'F Labour', description: 'Some Info'},
          {name: 'F Labour', description: 'Some Info'},
        ],
        J: [
          {name: 'J Labour', description: 'Some Info'},
          {name: 'J Labour', description: 'Some Info'},
          {name: 'J Labour', description: 'Some Info'},
        ],
        K: [
          {name: 'K Labour', description: 'Sone Info'},
          {name: 'K Labour', description: 'Sone Info'},
          {name: 'K Labour', description: 'Sone Info'},
        ],
      },
    };
  }

  render() {
    let {navigation} = this.props;
    return (
      <Container
        heading={'Labour List'}
        navigation={navigation}
        value={this.state.search}
        cancel={() => this.setState({search: ''})}
        onChangeText={(text) => this.setState({search: text})}>
        <SectionList
          data={this.state.data}
          navigation={navigation}
          type={'AddLabor'}
        />
        <AddButton
          onPress={() => navigation.navigate('AddLabor', {type: 'add'})}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({});

export default Supplier;
