import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../../navigation/types'
import { GLOBAL_BACKGROUND_COLOR, SAFE_AREA_BACKGROUND_COLOR } from '../../constants/Constants';
import CustomAppBar from '../../components/appbar';
import Indices_cell from '../../components/Indices_cell';

type Props = NativeStackScreenProps<RootStackParamList, 'All_tickers_screen'>;

const All_tickers_screen = ({ navigation }: Props) => {
  const indicesData = [
    {
      name: 'NIFTY 50',
      value: '24,968',
      change: '+190.06 (0.77%)',
      isPositive: true,
    },
    {
      name: 'SENSEX',
      value: '82,515',
      change: '+420.12 (0.51%)',
      isPositive: true,
    },
    {
      name: 'BANK NIFTY',
      value: '56,082',
      change: '-120.45 (0.21%)',
      isPositive: false,
    },
    {
      name: 'FINANCE NIFTY',
      value: '56,082',
      change: '+120.45 (0.21%)',
      isPositive: true,
    },
  ];
  return (
    <View style={styles.globalsetting}>
      <SafeAreaView
        edges={['top']}
        style={styles.safeArea}
      >
        <CustomAppBar
          title="All Indices"
          showBack={true}
        />
      </SafeAreaView>
      {indicesData.map((item, index) => (
        <Indices_cell
          key={index}
          name={item.name}
          value={item.value}
          change={item.change}
          isPositive={item.isPositive}
        />
      ))}

    </View>
  )
}

export default All_tickers_screen

const styles = StyleSheet.create({
  globalsetting: {
    flex: 1,
    backgroundColor: GLOBAL_BACKGROUND_COLOR,
  },
  safeArea: {
    backgroundColor: SAFE_AREA_BACKGROUND_COLOR,
  },
});