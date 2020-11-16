import moment from 'moment-timezone';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import NativeClipboard from 'react-native/Libraries/Components/Clipboard/NativeClipboard';

//Exercise 01
const Welcome = () => {
  return <Text>Welcome to C308 Web Framework!</Text>;
};
//Exercise 02
class MyFirstApp extends React.Component {
  render() {
    return <Text>My First React Native App {'\n'}</Text>;
  }
}
//Exercise 03
const SemModule = (props) => {
  return (
    <Text>
      {props.day} - {props.module}
    </Text>
  );
};
//Exercise 04
class Eats extends React.Component {
  render() {
    return (
      <Text>
        {this.props.name}
        {this.props.location}
      </Text>
    );
  }
}
//Mini Project
class Clock extends React.Component {
  render() {
    let location = this.props.name;
    let time = moment().tz(location).format('hh:mma Z');
    return (
      <Text>
        {location} - {time}
      </Text>
    );
  }
}
const WorldClock = () => {
  return (
    <View>
      <Clock name="Asia/Singapore" />
      <Clock name="Europe/London" />
      <Clock name="America/New_York" />
      <Clock name="Europe/Oslo" />
    </View>
  );
};
const App: () => React$Node = () => {
  //console.log('This is a console statement');
  //Exercise 05
  console.log('Listing semester modules and recommended eats');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              {/*Exercise 01*/}
              <Welcome />
              {/*Exercise 02*/}
              <MyFirstApp />
              {/*Exercise 03*/}
              <SemModule day={'Monday'} module={'C348'} />
              <SemModule day={'Tuesday'} module={'C273'} />
              <SemModule day={'Friday'} module={'C308'} />
              {/*Exercise 04*/}
              <Text>{'\n'}Recommended Eats @ RP</Text>
              <Eats name={'Sweet Tooth Waffles'} />
              <Eats location={'W6 Level 1, E-canteen\n'} />
              <Eats name={'Crowded Bowl'} />
              <Eats location={'W4/W6 Lawn Canteen \n'} />
              <Eats name={'Western Cuisine @ Koufu'} />
              <Eats location={'E1 Level 1, Koufu \n'} />
              <Eats name={'Ayam Penyet'} />
              <Eats location={'W4/W6 Lawn Canteen \n'} />
              {/*Mini Project*/}
              <WorldClock />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
