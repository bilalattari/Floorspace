import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import Text from '../Component/Text';
import ImagePicker from 'react-native-image-crop-picker';
import {drawTools} from '../Objects/drawTool';
import Svg, {Line} from 'react-native-svg';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
let header = [
  {name: 'close', type: 'material-community'},
  {name: 'chevron-left', type: 'entypo'},
  {name: 'contrast', type: 'foundation'},
];

class DrawImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linePaths: [],
      loader: false,
      image: {},
      showButtons: true,
      showImage: false,
      text: '',
      showText: false,
      focused: true,
      showFullBottomTools: false,
      redoArr: [],
      strokeColor: '#12B3B4',
      changeDirection: {falg: false, index: 0},
      crossHairLocation: {
        x: 0,
        y: 0,
      },
      showCrossHairImage: false,
      handDraw: false,
    };
  }

  header = () => (
    <View style={styles.topHeaderView}>
      {header.map((icon, index) => {
        return (
          <TouchableOpacity key={index} style={styles.topHeaderButton}>
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
        <TouchableOpacity style={{padding: 12}} onPress={this.redo}>
          <Image source={require('../assets/undo.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 12}} onPress={this.undo}>
          <Image source={require('../assets/redo.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );

  footer = () => {
    let {showFullBottomTools} = this.state;
    return (
      <View style={styles.iconButton}>
        <TouchableOpacity
          onPress={() =>
            this.setState({showFullBottomTools: !showFullBottomTools})
          }
          style={{padding: 8}}>
          <Icon
            type={'font-awesome'}
            name={!showFullBottomTools ? 'angle-up' : 'angle-down'}
            color={'#C2C2C2'}
            size={41}
            containerStyle={{height: 30, justifyContent: 'center'}}
          />
        </TouchableOpacity>
        <View style={styles.drawToolView}>
          <View style={styles.rowView}>
            {drawTools[0].map((data, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => this.onPressDrawTool(data.name)}
                style={styles.bottomToolsButton}>
                <Image source={data.image} />
                <Text color={'#fff'} font={10} bold={true} align={'center'}>
                  {data.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {showFullBottomTools && (
            <>
              <View style={styles.rowView}>
                {drawTools[1].map((data, index) => (
                  <TouchableOpacity
                    onPress={() => this.onPressDrawTool(data.name)}
                    style={styles.bottomToolsButton}>
                    <Image source={data.image} />
                    <Text color={'#fff'} font={12} bold={true} align={'center'}>
                      {data.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.rowView}>
                {drawTools[2].map((data, index) => (
                  <TouchableOpacity
                    onPress={() => this.onPressDrawTool(data.name)}
                    style={styles.bottomToolsButton}>
                    <Image source={data.image} />
                    <Text color={'#fff'} font={12} bold={true} align={'center'}>
                      {data.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.rowView}>
                {drawTools[3].map((data, index) => (
                  <TouchableOpacity
                    onPress={() => this.onPressDrawTool(data.name)}
                    style={styles.bottomToolsButton}>
                    <Image source={data.image} />
                    <Text color={'#fff'} font={12} bold={true} align={'center'}>
                      {data.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}
        </View>
      </View>
    );
  };
  handleLinePath = (arr) => {
    this.setState({linePaths: arr});
  };
  undo = () => {
    let {linePaths, redoArr} = this.state;
    let redoUpdate = redoArr;
    let linePathsUpdate = linePaths;
    let pop = linePathsUpdate.pop();
    redoUpdate.push(pop);
    this.setState({linePaths: linePathsUpdate, redoArr: redoUpdate});
  };

  redo = () => {
    let {linePaths, redoArr} = this.state;
    if (redoArr.length > 0) {
      let redoUpdate = redoArr;
      let linePathsUpdate = linePaths;
      let pop = redoUpdate.pop();
      linePathsUpdate.push(pop);
      this.setState({linePaths: linePathsUpdate, redoArr: redoUpdate});
    }
  };
  onPressDrawTool = (name) => {
    let {changeDirection} = this.state;
    let lines = this.state.linePaths;
    let firstDot = lines[0];
    let lastDot = lines[lines.length - 1];
    console.log(name);

    if (name === 'Close Rect') {
      let closeRect1 = {
        x1: firstDot && `${firstDot.x1}`,
        y1: firstDot && firstDot.y1,
        x2: lastDot && lastDot.x2,
        y2: lastDot && firstDot.y2,
      };
      let closeRect2 = {
        x1: lastDot && `${lastDot.x2}`,
        y1: firstDot && firstDot.y1,
        x2: lastDot && lastDot.x2,
        y2: lastDot && lastDot.y2,
      };
      lines.push(closeRect1, closeRect2);
      this.handleLinePath(lines);
    } else if (name === 'Close Shape') {
      let closeShape = {
        x1: firstDot && `${firstDot.x1}`,
        y1: firstDot && `${firstDot.y1}`,
        x2: lastDot && lastDot.x2,
        y2: lastDot && lastDot.y2,
      };
      lines.push(closeShape);
      this.handleLinePath(lines);
    } else if (name === 'Change Direction') {
      let dot = changeDirection.flag ? lines[changeDirection.index] : firstDot;
      let obj = {
        x: changeDirection.flag ? dot.x2 : dot.x1,
        y: changeDirection.flag ? dot.y2 : dot.y1,
      };
      this.setState({
        crossHairLocation: obj,
        changeDirection: {
          flag: !changeDirection.flag,
          index: lines.length - 1,
        },
      });
    } else if (name === 'Hand Draw') {
      this.setState({
        handDraw: !this.state.handDraw,
      });
    }
  };
  handleStrokeColor = (color) => {
    this.setState({strokeColor: color});
  };
  onImageLoad = () => {
    this.setState({showButtons: false}, () => {
      this._viewShot.capture().then((uri) => {
        console.log('do something with ', uri);
        this.props.onSave(uri);
      });
    });
  };

  getImage = () => {
    if (!this.state.showImage) {
      ImagePicker.openPicker({mediaType: 'photo'}).then((image) => {
        this.setState({image, showImage: true});
      });
    } else {
      this.setState({showImage: false});
    }
  };
  render() {
    let {
      linePaths,
      image,
      strokeColor,
      showText,
      focused,
      text,
      showImage,
      showButtons,
      crossHairLocation,
      changeDirection,
    } = this.state;
    console.log('test==>', changeDirection, linePaths.length);
    return (
      <View style={{flex: 1}}>
        {this.header()}
        <View style={{flex: 1, zIndex: 1200}}>
          <View
            style={{
              flex: 1,
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
            }}>
            <Image
              source={require('../assets/DrawTool/crossHair.png')}
              style={{
                height: 20,
                width: 20,
                position: 'absolute',
                left: crossHairLocation.x - 10,
                top: crossHairLocation.y - 10,
              }}
            />
            <Svg>
              {linePaths.map((coordinates) => {
                return (
                  <Line
                    x1={coordinates.x1}
                    y1={coordinates.y1}
                    x2={coordinates.x2}
                    y2={coordinates.y2}
                    stroke={strokeColor}
                    strokeWidth="5"
                  />
                );
              })}
            </Svg>
            <SketchCanvas
              // ref={canvas}
              style={{
                flex: 1,
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
                zIndex: 1200,
              }}
              ref={(e) => (this._canvas = e)}
              onStrokeStart={(x, y) => {
                console.log(x, y, 'start');
                let obj = {
                  x: x,
                  y: y,
                };
                this.setState({crossHairLocation: obj});
              }}
              onStrokeEnd={(paths) => {
                if (!this.state.handDraw) {
                  let lastLinePaths = this.state.linePaths;
                  let path = paths.path;
                  let firstPath = path.data[0];
                  let lastPath = path.data[path.data.length - 1];
                  let splitted = firstPath.split(',');
                  let splitted1 = lastPath.split(',');
                  let dot = changeDirection.flag
                    ? lastLinePaths[0]
                    : lastLinePaths[lastLinePaths.length - 1];
                  let obj = {
                    x1: dot?.x2 ? `${dot.x2}` : crossHairLocation.x,
                    y1: dot?.y2 ? `${dot.y2}` : crossHairLocation.y,
                    x2: splitted1[0],
                    y2: splitted1[1],
                    strokeColor: strokeColor,
                    top: dot?.y2
                      ? `${dot.y2}` < splitted1[1]
                      : crossHairLocation.y < splitted1[1],
                  };
                  console.log('hh===>', obj.top);
                  linePaths.push(obj);
                  this.handleLinePath(linePaths);
                  this._canvas.deletePath(paths.path.id);
                } else {
                  console.log(paths.path.id, 'id');
                }
              }}
              // onPathsChange={(paths) => { }}
              strokeColor={strokeColor}
              strokeWidth={7}
            />
          </View>
        </View>
        {this.footer()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getImageButton: {
    height: 172,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bbb',
  },
  undeRedoButton: {
    height: 35,
    width: 35,
    marginRight: 12,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
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
  iconButton: {
    position: 'absolute',
    bottom: 5,
    zIndex: 1200,
    width: '95%',
    alignSelf: 'center',
  },
  rowView: {flexDirection: 'row'},
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
  bottomToolsButton: {
    flex: 1,
    padding: 6,
    paddingTop: 12,
    alignItems: 'center',
  },
  drawToolView: {
    backgroundColor: '#2D2D2D',
    borderRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: 12,
  },
});

export default DrawImage;
