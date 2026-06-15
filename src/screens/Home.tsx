import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FONT_DEFAULT, GLOBAL_HORIZANTAL_PADDING } from '../constants/Constants'
import CustomAppBar from '../components/appbar';

const Home = () => {
  return (
    <SafeAreaView style={styles.globalsetting}>
      <CustomAppBar
        
        title="Profile"
        showBack
      />
    </SafeAreaView>
  )
}


export default Home
const styles = StyleSheet.create({
  globalsetting: {
    flex: 1,
    paddingHorizontal: GLOBAL_HORIZANTAL_PADDING,
    backgroundColor: '#131416',
  },
  hometext: {
    fontSize: 16,
    fontFamily: FONT_DEFAULT,
    color: '#FFF',
  },
});