/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//Exercise 01
const Welcome = () => {
  return <Text>Welcome to C308 Web Framework!</Text>;
};
//Exercise 02
class myFirstApp extends React.Component {
  render() {
    return <Text>My First React Native App</Text>;
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

const App: () => React$Node = () => {
  console.log('This is a console statement');
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
              //Exercise 01
              <Welcome />
              //Exercise 02
              <myFirstApp />
              //Exercise 03
              <SemModule day={'Monday'} module={'C348'} />
              <SemModule day={'Tuesday'} module={'C273'} />
              <SemModule day={'Friday'} module={'C308'} />
              //Exercise 04
              <Eats name={'Recommended Eats @ RP \n'} />
              <Eats name={'Sweet Tooth Waffles'} />
              <Eats location={'W6 Level 1, E-canteen'} />
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