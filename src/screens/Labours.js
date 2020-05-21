import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, View} from 'react-native';

import Container from '../Component/Container';
import SectionList from '../Component/SectionList';
import AddButton from '../Component/AddButton';

class Supplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <Container heading={'Labour List'} navigation={navigation}>
        <SectionList data={this.state.data} navigation={navigation} />
        <AddButton />
      </Container>
    );
  }
}

const styles = StyleSheet.create({});

export default Supplier;
