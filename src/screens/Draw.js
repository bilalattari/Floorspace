import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Text from '../Component/Text';
import ImagePicker from 'react-native-image-crop-picker';
import { drawTools } from '../Objects/drawTool';
import Svg, { Line, Circle, G } from 'react-native-svg';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import CircleModal from '../Component/CircleModal';
import HandDrawModal from '../Component/HandDrawModal';
import TextModal from '../Component/TextModal';
import DrawTrimModal from '../Component/DrawTrimModal';
import DrawRectModal from '../Component/DrawRectModal';
import MovableView from 'react-native-movable-view';
import FIcon from 'react-native-vector-icons/FontAwesome';
import IIcon from 'react-native-vector-icons/Ionicons';
import Gestures from 'react-native-easy-gestures';
import Keypad from '../Component/Keypad';
import SortableGrid from 'react-native-sortable-grid-with-fixed';
import SafeAreaView from 'react-native-safe-area-view';

let header = [
  { name: 'close', type: 'material-community' },
  { name: 'chevron-left', type: 'entypo' },
  { name: 'contrast', type: 'foundation' },
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
      changeDirection: { flag: false, index: 0 },
      crossHairLocation: {
        x: 0,
        y: 0,
      },
      showCrossHairImage: false,
      handDraw: false,
      handDrawModal: false,
      HandDrawColor: '',
      HandDrawSize: 0,
      strokeStart: false,
      strokeEnd: false,
      circleModal: false,
      overAllDimension: false,
      circles: [],
      textModal: false,
      textIns: [],
      drawTrim: false,
      trimBtn: false,
      drawRectModal: false,
      drawRects: [],
      keypad: false,
      customTool: false,
      drawTools: drawTools,
      dark: false,
    };
  }

  header = () => (
    <View style={styles.topHeaderView}>
      {header.map((icon, index) => {
        console.log(icon);
        return (
          <TouchableOpacity
            onPress={() => {
              if (icon.name === 'contrast') {
                this.setState({
                  dark: !this.state.dark,
                });
              }
            }}
            key={index}
            style={styles.topHeaderButton}>
            <Icon type={icon.type} name={icon.name} style={{ marginTop: 5 }} color={'#fff'} size={25} />
          </TouchableOpacity>
        );
      })}
      <View style={styles.topHeaderUndoRedo}>
        <TouchableOpacity style={{ padding: 12 }} onPress={this.redo}>
          <Image source={require('../assets/undo.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 12 }} onPress={this.undo}>
          <Image source={require('../assets/redo.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );

  footer = () => {
    let { showFullBottomTools, customTool } = this.state;
    return (
      <View style={styles.iconButton}>
        <TouchableOpacity
          onPress={() =>
            this.setState({ showFullBottomTools: !showFullBottomTools })
          }
          style={{ padding: 8 }}>
          <Icon
            type={'font-awesome'}
            name={!showFullBottomTools ? 'angle-up' : 'angle-down'}
            color={'#C2C2C2'}
            size={41}
            containerStyle={{ height: 30, justifyContent: 'center' }}
          />
        </TouchableOpacity>
        <View style={styles.drawToolView}>
          <View
            style={[
              styles.rowView,
              {
                height: showFullBottomTools ? 'auto' : 70,
              },
            ]}>
            {customTool ? (
              <SortableGrid
                onDragRelease
                itemsPerRow={6}
                onDragRelease={({ itemOrder }) =>
                  this.setState({
                    drawTools: itemOrder.map(
                      (i) => this.state.drawTools[+i.key],
                    ),
                  })
                }
                style={{
                  flex: 1,
                  marginBottom: 12,
                }}>
                {this.state.drawTools.map((data, index) => (
                  <View
                    key={index}
                    onTap={() =>
                      data.name === 'Custom Toolbox' &&
                      this.setState({ customTool: !customTool })
                    }
                    style={[styles.bottomToolsButton, { width: 60 }]}>
                    <Image source={data.image} />
                    <Text color={'#fff'} font={10} bold={true} align={'center'}>
                      {data.name}
                    </Text>
                  </View>
                ))}
              </SortableGrid>
            ) : (
                this.state.drawTools.map((data, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => this.onPressDrawTool(data.name)}
                    style={styles.bottomToolsButton}>
                    <Image source={data.image} />
                    <Text color={'#fff'} font={10} bold={true} align={'center'}>
                      {data.name}
                    </Text>
                  </TouchableOpacity>
                ))
              )}
          </View>
        </View>
      </View>
    );
  };

  handleLinePath = (arr) => {
    this.setState({ linePaths: arr });
  };
  undo = () => {
    if (this.state.handDraw) {
      this._canvas.undo();
    } else {
      let { linePaths, redoArr } = this.state;
      let redoUpdate = redoArr;
      let linePathsUpdate = linePaths;
      let pop = linePathsUpdate.pop();
      redoUpdate.push(pop);
      this.setState({ linePaths: linePathsUpdate, redoArr: redoUpdate });
    }
  };

  redo = () => {
    if (this.state.handDraw) {
    } else {
      let { linePaths, redoArr } = this.state;
      if (redoArr.length > 0) {
        let redoUpdate = redoArr;
        let linePathsUpdate = linePaths;
        let pop = redoUpdate.pop();
        linePathsUpdate.push(pop);
        this.setState({ linePaths: linePathsUpdate, redoArr: redoUpdate });
      }
    }
  };
  onPressDrawTool = (name) => {
    let { changeDirection } = this.state;
    let lines = this.state.linePaths;
    let firstDot = lines[0];
    let lastDot = lines[lines.length - 1];
    if (name === 'Close Rect') {
      let closeRect1 = {
        x1: firstDot && firstDot.x1,
        y1: firstDot && firstDot.y1,
        x2: lastDot && lastDot.x2,
        y2: lastDot && firstDot.y2,
        strokeColor: this.state.strokeColor,
      };
      let closeRect2 = {
        x1: lastDot && lastDot.x2,
        y1: firstDot && firstDot.y1,
        x2: lastDot && lastDot.x2,
        y2: lastDot && lastDot.y2,
        strokeColor: this.state.strokeColor,
      };
      lines.push(closeRect1, closeRect2);
      this.handleLinePath(lines);
      this.setState({
        strokeEnd: false,
        strokeStart: false,
      });
    } else if (name === 'Close Shape') {
      let closeShape = {
        x1: firstDot && `${firstDot.x1}`,
        y1: firstDot && `${firstDot.y1}`,
        x2: lastDot && lastDot.x2,
        y2: lastDot && lastDot.y2,
        strokeColor: this.state.strokeColor,
      };
      lines.push(closeShape);
      this.handleLinePath(lines);
      this.setState({
        strokeEnd: false,
        strokeStart: false,
      });
    } else if (name === 'Change Direction') {
      let dot = changeDirection.flag ? lines[lines.length - 1] : firstDot;
      let obj = {
        x: dot.x2,
        y: dot.y2,
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
        handDrawModal: true,
      });
    } else if (name === 'Free Draw') {
      this.setState({
        handDraw: false,
        HandDrawSize: 0,
        HandDrawColor: '',
        strokeEnd: false,
        strokeStart: false,
        strokeColor: '#12B3B4',
        overAllDimension: false,
      });
    } else if (name === 'Draw Circle') {
      this.setState({
        circleModal: true,
      });
    } else if (name === 'Overall Dimension') {
      this.setState({
        strokeColor: '#000',
        overAllDimension: true,
        strokeEnd: false,
        strokeStart: false,
      });
    } else if (name === 'Cutout') {
      alert('cut out');
    } else if (name === 'Text Instruction') {
      this.setState({
        textModal: true,
      });
    } else if (name === 'DrawTrim') {
      this.setState({
        drawTrim: true,
        strokeEnd: false,
        strokeStart: false,
        overAllDimension: false,
      });
    } else if (name === 'Draw Rect') {
      this.setState({
        drawRectModal: true,
      });
    } else if (name === 'Keypad') {
      this.setState({
        keypad: !this.state.keypad,
      });
    } else if (name === 'Custom Toolbox') {
      this.setState({
        customTool: !this.state.customTool,
      });
    }
    this.setState({
      showFullBottomTools: name === 'Custom Toolbox' ? true : false,
    });
  };
  handleStrokeColor = (color) => {
    this.setState({ strokeColor: color });
  };
  onImageLoad = () => {
    this.setState({ showButtons: false }, () => {
      this._viewShot.capture().then((uri) => {
        console.log('do something with ', uri);
        this.props.onSave(uri);
      });
    });
  };

  getImage = () => {
    if (!this.state.showImage) {
      ImagePicker.openPicker({ mediaType: 'photo' }).then((image) => {
        this.setState({ image, showImage: true });
      });
    } else {
      this.setState({ showImage: false });
    }
  };
  array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
  }
  delete_circle(i) {
    console.log(i);
    console.log(this.state.circles);
    this.state.circles.splice(i, 1);
    this.setState({
      circles: this.state.circles,
    });
  }

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
      circles,
      handDraw,
      handDrawModal,
      HandDrawSize,
      HandDrawColor,
      overAllDimension,
      textModal,
      textIns,
      drawTrim,
      trimBtn,
      drawRectModal,
      drawRects,
      keypad,
      dark,
    } = this.state;
    return (
      <SafeAreaView forceInset={{ top: "always", bottom: "always" }} style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: dark ? '#000' : '#fff' }}>
          {this.header()}
          {trimBtn && (
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  strokeColor: '#12B3B4',
                  trimBtn: false,
                  strokeEnd: false,
                  strokeStart: false,
                });
              }}
              style={[styles.doneBtn, { borderColor: strokeColor }]}>
              <Text font={18} text="Done" color={strokeColor} />
            </TouchableOpacity>
          )}
          <View style={{ flex: 1, zIndex: 0 }}>
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
              {drawRects.map((v, i) => {
                return (
                  <Gestures
                    style={{
                      width: +v.width,
                      zIndex: 1200,
                      position: 'absolute',
                    }}
                    key={i}>
                    <View
                      style={{
                        height: +v.length,
                        width: +v.width,
                        borderWidth: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    />
                  </Gestures>
                );
              })}
              {circles.map((v, i) => {
                return (
                  <Gestures
                    style={{
                      zIndex: 1200,
                      width: +v * 5,
                      position: 'absolute',
                    }}
                    key={i}>
                    <Icon name="circle-thin" type="font-awesome" size={+v * 5} />
                  </Gestures>
                );
              })}
              {textIns.map((v, i) => {
                console.log(v);
                return (
                  <Gestures
                    key={i}
                    style={{
                      zIndex: 1200,
                      position: 'absolute',
                    }}>
                    <Text
                      style={{
                        fontSize: +v.size,
                        color: v.color,
                        textDecorationLine: v.style,
                        fontWeight: v.style,
                        fontStyle: v.style,
                        paddingRight: 25,
                      }}
                      text={v.text}
                    />
                  </Gestures>
                );
              })}
              <Svg>
                {linePaths.map((coordinates) => {
                  console.log('cccc', coordinates);
                  return (
                    <>
                      {coordinates.overAllDimension && (
                        <>
                          <IIcon
                            style={{
                              position: 'absolute',
                              left: coordinates.x1 - 10,
                              top: coordinates.y1 - 20,
                            }}
                            name="md-arrow-dropup"
                            type="ionicons"
                            size={40}
                          />
                          <IIcon
                            style={{
                              position: 'absolute',
                              left: coordinates.x2 - 10,
                              top: coordinates.y2 - 20,
                            }}
                            name="md-arrow-dropdown"
                            type="ionicons"
                            size={40}
                          />
                        </>
                      )}
                      <Line
                        x1={coordinates.x1}
                        y1={coordinates.y1}
                        x2={coordinates.x2}
                        y2={coordinates.y2}
                        stroke={coordinates.strokeColor}
                        strokeWidth="5"
                      />
                    </>
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
                  zIndex: 1,
                }}
                ref={(e) => (this._canvas = e)}
                onStrokeStart={(x, y) => {
                  let obj = {
                    x: x,
                    y: y,
                  };
                  if (!this.state.strokeStart) {
                    this.setState({
                      crossHairLocation: obj,
                      strokeStart: true,
                    });
                  }
                }}
                onStrokeEnd={(paths) => {
                  if (!handDraw) {
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
                      x1:
                        overAllDimension || this.state.strokeStart
                          ? crossHairLocation.x
                          : dot?.x2
                            ? `${dot.x2}`
                            : crossHairLocation.x,
                      y1:
                        overAllDimension || this.state.strokeStart
                          ? crossHairLocation.y
                          : dot?.y2
                            ? `${dot.y2}`
                            : crossHairLocation.y,
                      x2: splitted1[0],
                      y2: splitted1[1],
                      strokeColor: strokeColor,
                      id: paths.path.id,
                      overAllDimension,
                    };
                    let point = {
                      x: splitted1[0],
                      y: splitted1[1],
                    };
                    if (changeDirection.flag || !this.state.strokeEnd) {
                      linePaths.unshift(obj);
                    } else {
                      linePaths.push(obj);
                    }
                    this.setState({
                      crossHairLocation: point,
                      strokeEnd: true,
                    });
                    this.handleLinePath(linePaths);
                    this._canvas.deletePath(paths.path.id);
                  } else {
                    console.log(paths.path.id, 'id');
                  }
                }}
                strokeColor={HandDrawColor ? HandDrawColor : strokeColor}
                strokeWidth={HandDrawSize ? HandDrawSize : 5}
              />
            </View>
          </View>
          {keypad && (
            <MovableView style={{ position: 'absolute' }}>
              <Keypad />
            </MovableView>
          )}
          {this.state.circleModal && (
            <CircleModal
              setCircleModal={(size) => {
                circles.push(size);
                this.setState({ circleModal: false, circles: circles });
              }}
            />
          )}
          {handDrawModal && (
            <HandDrawModal
              setHandDraw={(color, size) => {
                this.setState({
                  handDrawModal: false,
                  handDraw: true,
                  HandDrawSize: size,
                  HandDrawColor: color,
                });
              }}
            />
          )}
          {textModal && (
            <TextModal
              setTextModal={(data) => {
                textIns.push({
                  text: data.text,
                  style: data.style,
                  size: data.size,
                  color: data.color,
                });
                this.setState({
                  textIns: textIns,
                  textModal: false,
                });
              }}
            />
          )}
          {drawTrim && (
            <DrawTrimModal
              setDrawTrim={(trim, color) => {
                this.setState({
                  strokeColor: color,
                  drawTrim: false,
                  trimBtn: true,
                });
              }}
            />
          )}
          {drawRectModal && (
            <DrawRectModal
              setRectModal={(data) => {
                drawRects.push(data);
                this.setState({
                  drawRects: drawRects,
                  drawRectModal: false,
                });
              }}
            />
          )}
          {this.footer()}
        </View>
      </SafeAreaView>
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
    backgroundColor: '#2D2D2D',
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
  rowView: { flexDirection: 'row', flexWrap: 'wrap' },
  topHeaderUndoRedo: {
    width: 110,
    height: 45,
    borderRadius: 25,
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#2D2D2D',
    alignItems: 'center',
  },
  topHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 65,
  },
  bottomToolsButton: {
    padding: 6,
    paddingTop: 12,
    alignItems: 'center',
    width: '16.5%',
  },
  drawToolView: {
    backgroundColor: '#2D2D2D',
    borderRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: 12,
  },
  deleteIcon: {
    backgroundColor: '#fff',
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 2,
  },
  doneBtn: {
    borderWidth: 2,
    borderRadius: 50,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 70,
    right: 25,
    zIndex: 1200,
  },
});

export default DrawImage;
