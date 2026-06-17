import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Index_Card = () => {
  return (
    <View>
      <View style={styles.indexCard}>
        <Text style={styles.indexCardText}>THIS IS A TEXT{'\n'}THIS IS A TEXT</Text>
        
      </View>
    </View>
  )
}

export default Index_Card
const styles = StyleSheet.create({
    indexCard: {
        padding:16,
        borderWidth: 1,
        borderColor: '#2B343B',
        borderRadius: 10,
        marginHorizontal: 16,
        marginVertical: 10,
        elevation: 5,
    },
    indexCardText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#FFF',
    },
});