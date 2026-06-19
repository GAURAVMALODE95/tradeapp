import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FONT_DEFAULT, GLOBAL_BACKGROUND_COLOR, GLOBAL_HORIZANTAL_PADDING, SAFE_AREA_BACKGROUND_COLOR } from '../constants/Constants'
import CustomAppBar from '../components/appbar';
import Tickers_Scroll from './home/Tickers_Scroll';
import Index_Card from './home/Index_Card';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const navigation = useNavigation();
  return (

    <View style={styles.globalsetting}>
      <SafeAreaView
        edges={['top']}
        style={styles.safeArea}
      >
        <CustomAppBar
          title="Home"
          showBack
        />

      </SafeAreaView>
      <Tickers_Scroll />
      <View style={styles.popularindexrowstyle}>
        <Text style={styles.popularIndexText}>Popular Index</Text>

        <TouchableOpacity onPress={() => navigation.navigate('All_tickers_screen')}>
          <Text style={styles.showalltext}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.indexRow}>
        <Index_Card name="Sensex" price="23,350" change="+230.06 (2.11%)" />
        <Index_Card name="Nifty 50" price="23,350" change="+402.02 (1.78%)" />
      </View>
      <View style={styles.indexRow}>
        <Index_Card name="Nifty Bank" price="23,350" change="-190.89 (2.29%)" />
        <Index_Card name="Nifty 100" price="23,350" change="-780.21 (1.56%)" />
      </View>
      <View style={{ height: 60 }} />

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
    fontFamily: FONT_DEFAULT,
  },
  indexRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

  },
  popularIndexText: {
    marginHorizontal: GLOBAL_HORIZANTAL_PADDING,
    marginTop: 10,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: FONT_DEFAULT,
    color: '#FFF',
  },
  showalltext: {
    marginHorizontal: GLOBAL_HORIZANTAL_PADDING,
    marginTop: 10,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: FONT_DEFAULT,
    color: '#FFF',
  },
  popularindexrowstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#FFF',
  },
});