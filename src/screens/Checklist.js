import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, View, SafeAreaView, Switch, Image} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import Text from '../Component/Text';
import Row from '../Component/ProfileRow';
import FPicker from '../Component/Picker';
import Block from '../Component/Block';
import RoundBtn from '../Component/RoundBtn';
import CustomInput from '../Component/Input';
import {
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native-gesture-handler';
class Checklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // checkList: ['Room', 'Bedroom', 'Loungr'],
      checkList: ['Lounge'],
      btn: 'on',
    };
  }

  detailView = () => (
    <Block justify={'flex-end'}>
      <View style={styles.detailView}>
        <Text bold={false} font={16}>
          39.43m
        </Text>
      </View>
    </Block>
  );

  render() {
    let {navigation} = this.props;
    let {checkList} = this.state;
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
            text: 'Checklist',
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
            leftText={'Total Area'}
            rightText={'39.42spm'}
            backgroundColor={'#F1F1F1'}
          />
          <FlatList
            data={checkList}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({item, index}) => {
              return (
                <View>
                  <View style={styles.loungeView}>
                    <Text bold={false}>{item}</Text>
                    <TouchableOpacity style={styles.loungeViewButton}>
                      <Icon
                        type={'font-awesome'}
                        name={'angle-down'}
                        color={'#fff'}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginBottom: 85}}>
                    <Row leftText={'Area :'} rightText={'39.43m'} />
                    <Row leftText={'Perimeter'} rightText={'28.5m'} />
                    <Row
                      leftText={'Perimeter less doors'}
                      rightText={'28.42spm'}
                    />
                    <View style={{padding: 12}}>
                      <Block direction={'row'} style={{marginVertical: 5}}>
                        <Block>
                          <FPicker
                            pickerItems={['Concrete']}
                            selectedValue={'Concrete'}
                            header={'Subfloor'}
                            onChange={() => console.log()}
                          />
                        </Block>
                        {this.detailView()}
                        <View style={styles.plusView}>
                          <TouchableOpacity style={styles.plusButton}>
                            <Icon type={'feather'} name={'plus'} />
                          </TouchableOpacity>
                        </View>
                      </Block>
                      <Block direction={'row'} style={{marginVertical: 5}}>
                        <Block>
                          <FPicker
                            pickerItems={['Take up carpet']}
                            selectedValue={'Take up carpet'}
                            header={'Take Up'}
                            onChange={() => console.log()}
                          />
                        </Block>
                        {this.detailView()}
                        <View style={styles.plusView}>
                          <TouchableOpacity style={styles.plusButton}>
                            <Icon type={'feather'} name={'plus'} />
                          </TouchableOpacity>
                        </View>
                      </Block>
                      <Block
                        direction={'row'}
                        style={{marginVertical: 10, marginHorizontal: -7}}>
                        <Block>
                          <FPicker
                            pickerItems={['Standard Install']}
                            selectedValue={'Standard Install'}
                            header={'New Flooring'}
                            onChange={() => console.log()}
                          />
                        </Block>
                      </Block>
                      <Block direction={'row'} style={{marginHorizontal: -1}}>
                        <Block style={{flex: 1.7}}>
                          <FPicker
                            pickerItems={['Vinley Eco Durable']}
                            selectedValue={'Vinley Eco Durable'}
                            onChange={() => console.log()}
                          />
                        </Block>
                        <Block>
                          <FPicker
                            pickerItems={['Colour']}
                            selectedValue={'Colour'}
                            onChange={() => console.log()}
                          />
                        </Block>
                      </Block>
                      <Block direction={'row'} style={{marginVertical: 5}}>
                        <Block>
                          <FPicker
                            pickerItems={['None']}
                            selectedValue={'None'}
                            header={'Underlay'}
                            onChange={() => console.log()}
                          />
                        </Block>
                        {this.detailView()}
                        <View style={styles.plusView}>
                          <TouchableOpacity style={styles.plusButton}>
                            <Icon type={'feather'} name={'plus'} />
                          </TouchableOpacity>
                        </View>
                      </Block>
                      <Block direction={'row'} style={{marginVertical: 5}}>
                        <Block>
                          <FPicker
                            pickerItems={['None']}
                            selectedValue={'None'}
                            header={'Floor Prep'}
                            onChange={() => console.log()}
                          />
                        </Block>
                        {this.detailView()}
                        <View style={styles.plusView}>
                          <TouchableOpacity style={styles.plusButton}>
                            <Icon type={'feather'} name={'plus'} />
                          </TouchableOpacity>
                        </View>
                      </Block>
                      <Block direction={'row'} style={{marginVertical: 5}}>
                        <Block>
                          <FPicker
                            pickerItems={['Take up carpet']}
                            selectedValue={'Take up carpet'}
                            header={'Take Up'}
                            onChange={() => console.log()}
                          />
                        </Block>
                        {this.detailView()}
                        <View style={styles.plusView}>
                          <TouchableOpacity style={styles.plusButton}>
                            <Icon type={'feather'} name={'plus'} />
                          </TouchableOpacity>
                        </View>
                      </Block>
                    </View>

                    <Row leftText={'Set all rooms the same'} switchBtn={true} />
                    <View style={{padding: 12}}>
                      <RoundBtn
                        onSelect={(e) => this.setState({flag: e})}
                        heading={'Onsite Power'}
                        btn={this.state.btn}
                      />
                      <RoundBtn
                        onSelect={(e) => this.setState({flag: e})}
                        heading={'Occupied'}
                        btn={this.state.btn}
                      />
                      <Block direction={'row'} style={{marginVertical: 5}}>
                        <Block>
                          <FPicker
                            pickerItems={['Take up carpet']}
                            selectedValue={'Take up carpet'}
                            header={'Take Up'}
                            onChange={() => console.log()}
                          />
                        </Block>
                        {this.detailView()}
                        <View style={styles.plusView}>
                          <TouchableOpacity style={styles.plusButton}>
                            <Icon type={'feather'} name={'plus'} />
                          </TouchableOpacity>
                        </View>
                      </Block>
                      <RoundBtn
                        onSelect={(e) => this.setState({flag: e})}
                        heading={'Ramping'}
                        btn={this.state.btn}
                      />
                      <RoundBtn
                        onSelect={(e) => this.setState({flag: e})}
                        heading={'Trim Door to Fit'}
                        btn={this.state.btn}
                      />
                      <RoundBtn
                        onSelect={(e) => this.setState({flag: e})}
                        heading={'Does New Flooring Need to Match Existing?'}
                        btn={this.state.btn}
                      />
                      <CustomInput
                        marginLeft={5}
                        title="Best Match"
                        width="97%"
                      />
                      <CustomInput
                        marginLeft={5}
                        title="Furniture"
                        width="97%"
                      />
                      <RoundBtn
                        onSelect={(e) => this.setState({flag: e})}
                        heading={'Possible Asbestos?'}
                        btn={this.state.btn}
                      />
                      <CustomInput marginLeft={5} title="Curving" width="97%" />
                      <CustomInput marginLeft={5} title="Mitres" width="97%" />
                      <CustomInput
                        marginLeft={5}
                        title="Portable Facilities"
                        width="97%"
                      />
                    </View>
                  </View>
                </View>
              );
            }}
          />
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
  plusButton: {
    height: 35,
    width: 35,
    marginBottom: 3,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loungeViewButton: {
    height: 32,
    width: 32,
    borderRadius: 125,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#12B3B4',
  },
  undeRedo: {
    height: 15,
    resizeMode: 'contain',
    width: 15,
    resizeMode: 'contain',
  },
  loungeView: {
    backgroundColor: '#fff',
    height: 60,
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

export default Checklist;
