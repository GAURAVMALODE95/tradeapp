import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomAppBar from '../components/appbar'
import { GLOBAL_BACKGROUND_COLOR, SAFE_AREA_BACKGROUND_COLOR } from '../constants/Constants'

const Profile = () => {
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
      <View style={{ height: 60 }} /> 
        
    </View>
  )
}

export default Profile
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