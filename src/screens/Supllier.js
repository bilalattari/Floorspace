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
          {name: 'A Supplier', description: 'Some Info'},
          {name: 'A Supplier', description: 'Some Info'},
          {name: 'A Supplier', description: 'Some Info'},
        ],
        E: [
          {name: 'E Supplier', description: 'Some Info'},
          {name: 'E Supplier', description: 'Some Info'},
          {name: 'E Supplier', description: 'Some Info'},
        ],
        F: [
          {name: 'F Supplier', description: 'Some Info'},
          {name: 'F Supplier', description: 'Some Info'},
          {name: 'F Supplier', description: 'Some Info'},
        ],
        H: [
          {name: 'F Supplier', description: 'Some Info'},
          {name: 'F Supplier', description: 'Some Info'},
          {name: 'F Supplier', description: 'Some Info'},
        ],
        J: [
          {name: 'J Supplier', description: 'Some Info'},
          {name: 'J Supplier', description: 'Some Info'},
          {name: 'J Supplier', description: 'Some Info'},
        ],
        K: [
          {name: 'K Supplier', description: 'Sone Info'},
          {name: 'K Supplier', description: 'Sone Info'},
          {name: 'K Supplier', description: 'Sone Info'},
        ],
      },
    };
  }

  render() {
    let {navigation} = this.props;
    return (
      <Container heading={'Supplier List'} navigation={navigation}>
        <SectionList data={this.state.data} navigation={navigation} type = {"AddSupplier"} />
        <AddButton onPress={() => navigation.navigate('AddSupplier' , {type : 'add'})} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({});

export default Supplier;
