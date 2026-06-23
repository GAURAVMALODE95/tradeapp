import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FONT_DEFAULT, GLOBAL_BACKGROUND_COLOR, GLOBAL_HORIZANTAL_PADDING, SAFE_AREA_BACKGROUND_COLOR } from '../constants/Constants'
import CustomAppBar from '../components/appbar';
import Tickers_Scroll from './Home/Tickers_Scroll';
import Indexes_Widget from './Home/indexes_widget';
import Top_Movers from './Home/Top_Movers';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.globalsetting}>
        <SafeAreaView
          edges={['top']}
          style={styles.safeArea}
        >
          <CustomAppBar
            title="Home"
            showBack={false}
          />
        </SafeAreaView>

        <Tickers_Scroll />
        <Indexes_Widget />
        <View style={{ height: 10 }} />
        <Top_Movers />

      </View>
    </ScrollView>
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
    fontFamily: FONT_DEFAULT,
  },
});