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
      <Indices_cell />
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