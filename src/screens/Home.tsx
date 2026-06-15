import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FONT_DEFAULT, GLOBAL_BACKGROUND_COLOR, GLOBAL_HORIZANTAL_PADDING, SAFE_AREA_BACKGROUND_COLOR } from '../constants/Constants'
import CustomAppBar from '../components/appbar';

const Home = () => {
  return (
    <View style={styles.globalsetting}>
      <SafeAreaView
        edges={['top']}
        style={styles.safeArea}
      >
        <CustomAppBar
          title="Profile"
          showBack
        />
      </SafeAreaView>

      
    </View>
  );
};

export default Home
const styles = StyleSheet.create({
  globalsetting: {
    flex: 1,
    backgroundColor: GLOBAL_BACKGROUND_COLOR,
  },
  safeArea: {
    backgroundColor: SAFE_AREA_BACKGROUND_COLOR,
  },
  hometext: {
    fontSize: 16,
    color: '#FFF',
  },
});