import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import { FONT_DEFAULT, GLOBAL_NEGATIVE_CHANGE, GLOBAL_POSITIVE_CHANGE } from '../../constants/Constants';
const SCREEN_WIDTH = Dimensions.get('window').width;

type IndexCardProps = {
  name: string;
  price: string;
  change: string;
};

const Index_Card = ({ name, price, change }: IndexCardProps) => {
  
  return (
    <View>
      <View style={styles.indexCard}>
        
        <Text style={styles.indexCardText}>{name} </Text>
        <Text style={styles.pricetext}>{price} </Text>
        <Text style={[styles.changetext, { color: change.includes('+') ? GLOBAL_NEGATIVE_CHANGE : GLOBAL_POSITIVE_CHANGE }]}>{change} </Text>
      </View>
    </View>
  )
}

export default Index_Card
const styles = StyleSheet.create({
    indexCard: {
        width: SCREEN_WIDTH * 0.44,
        padding:16,
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: 10,
        marginVertical: 10,
        elevation: 0,
    },
    indexCardText: {
        fontSize: 15,
        fontWeight: '500',
        fontFamily: FONT_DEFAULT,
        color: '#FFF',
    },
    pricetext: {
      paddingTop: 6,
        fontSize: 14,
        fontWeight: '400',
        fontFamily: FONT_DEFAULT,
        color: '#FFF',
    },
    changetext: {
      paddingTop: 6,
      fontFamily: FONT_DEFAULT,
        fontSize: 14,
        fontWeight: '400',
    },
    
});