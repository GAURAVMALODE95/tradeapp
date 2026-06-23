import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FONT_DEFAULT, GLOBAL_HORIZANTAL_PADDING } from '../../constants/Constants';
import Index_Card from './Index_Card';
import CustomButton2 from '../../components/Button2';

const Top_Movers = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.popularindexcolstyle}>
        <Text style={styles.popularIndexText}>Top Movers</Text>
        <View style={styles.popularindexrowstyle}>
      <CustomButton2 title="Top Gainers" color="#2B343B" onPress={() => {}} />
      <View style={{ width: 20 }} />
      <CustomButton2 title="Top Loosers" color="#2B343B" onPress={() => {} } />
      </View>
      </View>

      <View style={styles.indexRow}>
        <Index_Card name="AAPL" price="23,350" change="+230.06 (2.11%)" />
        <Index_Card name="NVDA" price="23,350" change="+402.02 (1.78%)" />
      </View>
      <View style={styles.indexRow}>
        <Index_Card name="HDFC" price="23,350" change="-190.89 (2.29%)" />
        <Index_Card name="SBI" price="23,350" change="-780.21 (1.56%)" />
      </View>
    </>
  );
};

export default Top_Movers;

const styles = StyleSheet.create({
  indexRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  popularIndexText: {
  
    marginTop: 10,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: FONT_DEFAULT,
    color: '#FFF',
  },
  
  popularindexrowstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#FFF',
    alignItems: 'flex-start',
  },
  popularindexcolstyle: {
    flexDirection: 'column',
    color: '#FFF',
    alignItems: 'flex-start',
    paddingHorizontal : GLOBAL_HORIZANTAL_PADDING,
  },
});
