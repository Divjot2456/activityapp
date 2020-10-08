import { StatusBar } from "expo-status-bar";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCompass, faSearch, faEnvelope, faUser,
  faCamera, faVideo, faHeadphones, faCopy, faFax, faHeart, faComment, faEye
} from '@fortawesome/free-solid-svg-icons';
import {
  StyleSheet, Text, View, Image,
  SafeAreaView, Dimensions, ScrollView, TouchableOpacity, ImageBackground, TextInput
} from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <SafeAreaView>
          <Text style={styles.header}>Activity</Text>
          <StatusBar style="auto" />
          <View style={styles.imagecontainer}>
            <TouchableOpacity onPress={() => console.log('image pressed')}>
              <ImageBackground style={styles.images} source={require("./assets/1.png")}>
                <Text style={styles.pending}> Pending: 15 </Text>
                <Text style={styles.numb}>23</Text>
                <Text style={styles.imagetext}>Video Shoutout</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('image pressed')}>
              <ImageBackground style={styles.images} source={require("./assets/2.png")}>
                <Text style={styles.pending}> Pending: 15 </Text>
                <Text style={styles.numb}>56</Text>
                <Text style={styles.imagetext}>Video Call</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.imagecontainer}>
            <TouchableOpacity onPress={() => console.log('image pressed')}>
              <ImageBackground style={styles.images} source={require("./assets/3.png")}>
                <Text style={styles.pending}> Pending: 15 </Text>
                <Text style={styles.numb}>11</Text>
                <Text style={styles.imagetext}>Conferencing</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('image pressed')}>
              <ImageBackground style={styles.images} source={require("./assets/4.png")}>
                <Text style={styles.pending}> Pending: 15 </Text>
                <Text style={styles.numb}>110</Text>
                <Text style={styles.imagetext}>Review</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.imagecontainer}>
            <TouchableOpacity onPress={() => console.log('image pressed')}>
              <ImageBackground style={styles.images} source={require("./assets/5.png")}>
                <Text style={styles.pending}> Pending: 15 </Text>
                <Text style={styles.numb}>11</Text>
                <Text style={styles.imagetext}>Comment</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('image pressed')}>
              <ImageBackground style={styles.images} source={require("./assets/6.png")}>
                <Text style={styles.pending}> Pending: 15 </Text>
                <Text style={styles.numb}>56</Text>
                <Text style={styles.imagetext}>Messaging</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: 'rgba(152, 175, 199, 0.2)', marginTop: 20 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image style={{ width: 40, height: 40, borderRadius: 50, margin: 10, justifyContent: 'flex-start' }} source={require('./assets/johnwick.jpg')} />
              <TextInput style={{ height: 50, alignItems: 'center' }} underlineColorAndroid='transparent' placeholder={'Create a new post'} placeholderTextColor={'grey'} multiline={true} numberOfLines={5} />
            </View>
            <View style={{ borderBottomColor: 'rgb(211, 211, 211)', borderBottomWidth: 1, margin: 10 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
              <TouchableOpacity onPress={() => console.log('post icon pressed')}>
                <FontAwesomeIcon icon={faCamera} size={20} color={'rgb(105, 105, 105)'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('post icon pressed')}>
                <FontAwesomeIcon icon={faVideo} size={20} color={'rgb(105, 105, 105)'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('post icon pressed')}>
                <FontAwesomeIcon icon={faHeadphones} size={20} color={'rgb(105, 105, 105)'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('post icon pressed')}>
                <FontAwesomeIcon icon={faCopy} size={20} color={'rgb(105, 105, 105)'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('post icon pressed')}>
                <FontAwesomeIcon icon={faFax} size={20} color={'rgb(105, 105, 105)'} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ margin: 10, marginTop: 20, borderWidth: 1, borderColor: 'rgb(211, 211, 211)', borderRadius: 2 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image style={{ width: 40, height: 40, borderRadius: 50, margin: 10, justifyContent: 'flex-start' }} source={require('./assets/johnwick.jpg')} />
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => console.log('post pressed')}>
                  <Text style={{ fontWeight: 'bold', color: 'royalblue', fontSize: 20 }} >John Wick</Text>
                  <Text style={{ color: 'rgb(211, 211, 211)', margin: 0 }}>1 hour ago</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Image style={{ width: 338, height: 160, resizeMode: 'cover' }} source={require('./assets/mustang.jpg')} />
            </View>
            <View>
              <Text style={{ padding: 10, color: 'grey' }} numberOfLines={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud <TouchableOpacity onPress={() => console.log('post read')}>
                  <Text style={{ color: 'red' }}>  Continue Reading  </Text></TouchableOpacity> exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.</Text>
            </View>
            <View style={{ borderBottomColor: 'rgb(211, 211, 211)', borderBottomWidth: 1, margin: 10 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <TouchableOpacity onPress={() => console.log('like button pressed')}>
                  <View style={{ flexDirection: 'row' }}>
                    <FontAwesomeIcon icon={faHeart} size={20} margin={10} color={'red'} />
                    <Text style={{ color: 'red', marginVertical: 10 }}>1</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('comment button pressed')}>
                  <View style={{ flexDirection: 'row' }}>
                    <FontAwesomeIcon icon={faComment} size={20} margin={10} color={'grey'} />
                    <Text style={{ color: 'grey', marginVertical: 10 }}>0</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <FontAwesomeIcon icon={faEye} size={20} margin={10} color={'grey'} />
                <Text style={{ color: 'grey', marginVertical: 10 }}>Views (10)</Text>
              </View>
            </View>
          </View>
          <View style={{ margin: 10, marginTop: 20, borderWidth: 1, borderColor: 'rgb(211, 211, 211)', borderRadius: 2 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image style={{ width: 40, height: 40, borderRadius: 50, margin: 10, justifyContent: 'flex-start' }} source={require('./assets/johnwick.jpg')} />
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={() => console.log('post pressed')}>
                  <Text style={{ fontWeight: 'bold', color: 'royalblue', fontSize: 20 }} >John Wick</Text>
                  <Text style={{ color: 'rgb(211, 211, 211)', margin: 0 }}>1 hour ago</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Image style={{ width: 338, height: 160, resizeMode: 'cover' }} source={require('./assets/mustang.jpg')} />
            </View>
            <View>
              <Text style={{ padding: 10, color: 'grey' }} numberOfLines={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud <TouchableOpacity onPress={() => console.log('post read')}>
                  <Text style={{ color: 'red' }}>  Continue Reading  </Text></TouchableOpacity> exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.</Text>
            </View>
            <View style={{ borderBottomColor: 'rgb(211, 211, 211)', borderBottomWidth: 1, margin: 10 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <TouchableOpacity onPress={() => console.log('like button pressed')}>
                  <View style={{ flexDirection: 'row' }}>
                    <FontAwesomeIcon icon={faHeart} size={20} margin={10} color={'red'} />
                    <Text style={{ color: 'red', marginVertical: 10 }}>1</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('comment button pressed')}>
                  <View style={{ flexDirection: 'row' }}>
                    <FontAwesomeIcon icon={faComment} size={20} margin={10} color={'grey'} />
                    <Text style={{ color: 'grey', marginVertical: 10 }}>0</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <FontAwesomeIcon icon={faEye} size={20} margin={10} color={'grey'} />
                <Text style={{ color: 'grey', marginVertical: 10 }}>Views (10)</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={styles.rowaround}>
        <TouchableOpacity onPress={() => console.log('icon pressed')}>
          <FontAwesomeIcon icon={faCompass} size={30} color={'grey'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('icon pressed')}>
          <FontAwesomeIcon icon={faSearch} size={30} color={'grey'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('icon pressed')}>
          <FontAwesomeIcon icon={faEnvelope} size={30} color={'grey'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('icon pressed')}>
          <FontAwesomeIcon icon={faUser} size={30} color={'grey'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

let dynwidth = Dimensions.get('window').width;
let dynheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    textAlign: "left",
    fontSize: 40,
    marginTop: 80,
    marginLeft: 20,
    marginVertical: 20,
    fontWeight: "bold",
  },
  images: {
    width: dynwidth / 2 - 20,
    height: dynheight / 5 - 30,
    margin: 10,
    position: 'relative',
    resizeMode: 'contain',
    borderRadius: 5
  },
  imagecontainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  pending: {
    position: 'absolute',
    padding: 2,
    top: 4,
    right: 4,
    backgroundColor: 'rgba(255,255,255,0.4)',
    color: 'snow',
    borderRadius: 40,
  },
  numb: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 25,
    top: 35,
    left: 10,
    color: 'white'
  },
  imagetext: {
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    left: 10,
    bottom: 15
  },
  rowaround: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
