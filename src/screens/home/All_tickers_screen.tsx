import { View, Text } from 'react-native'
import React from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../../navigation/types'
type Props = NativeStackScreenProps<RootStackParamList, 'All_tickers_screen'>;

const All_tickers_screen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>All_tickers_screen</Text>
    </View>
  )
}

export default All_tickers_screen