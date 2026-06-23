import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GLOBAL_BACKGROUND_COLOR, SAFE_AREA_BACKGROUND_COLOR } from '../constants/Constants'
import CustomAppBar from '../components/appbar'
import { SafeAreaView } from 'react-native-safe-area-context'
import Tickers_Scroll from './home/Tickers_Scroll'

const Watchlist = () => {
  return (
    <View style={styles.globalsetting}>
      <SafeAreaView
        edges={['top']}
        style={styles.safeArea}
      >
        <CustomAppBar
          title="Watchlist"
        
        />
      </SafeAreaView>
      
      <View style={{ height: 60 }} /> 
        
    </View>
  )
}

export default Watchlist
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