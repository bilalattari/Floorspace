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
          {name: 'A Products', description: 'Some Info'},
          {name: 'A Products', description: 'Some Info'},
          {name: 'A Products', description: 'Some Info'},
        ],
        E: [
          {name: 'E Products', description: 'Some Info'},
          {name: 'E Products', description: 'Some Info'},
          {name: 'E Products', description: 'Some Info'},
        ],
        F: [
          {name: 'F Products', description: 'Some Info'},
          {name: 'F Products', description: 'Some Info'},
          {name: 'F Products', description: 'Some Info'},
        ],
        H: [
          {name: 'F Products', description: 'Some Info'},
          {name: 'F Products', description: 'Some Info'},
          {name: 'F Products', description: 'Some Info'},
        ],
        J: [
          {name: 'J Products', description: 'Some Info'},
          {name: 'J Products', description: 'Some Info'},
          {name: 'J Products', description: 'Some Info'},
        ],
        K: [
          {name: 'K Products', description: 'Sone Info'},
          {name: 'K Products', description: 'Sone Info'},
          {name: 'K Products', description: 'Sone Info'},
        ],
      },
    };
  }

  render() {
    let {navigation} = this.props;
    return (
      <Container heading={'Product List'} navigation={navigation}>
        <SectionList data={this.state.data} navigation={navigation} type = {"Addproducts"} />
        <AddButton onPress={() => navigation.navigate('Addproducts' , {type : 'add'})}  />
      </Container>
    );
  }
}

const styles = StyleSheet.create({});

export default Supplier;
