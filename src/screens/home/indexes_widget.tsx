import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FONT_DEFAULT, GLOBAL_HORIZANTAL_PADDING } from '../../constants/Constants';
import Index_Card from './Index_Card';

const Indexes_Widget = () => {
  const navigation = useNavigation();

  return (
    <>
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
    </>
  );
};

export default Indexes_Widget;

const styles = StyleSheet.create({
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
