import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FONT_DEFAULT } from '../constants/Constants';
import { GLOBAL_BORDER_COLOR } from '../constants/Constants';

const IndicesCell = () => {
    return (
        <View>
            
        <View style={styles.indicesCellContainer}>
        
            <Text style={styles.indicesCellText}> NIFTY 50</Text>
            <View
                style={styles.indicesCellPriceContainer}>
                <Text style={styles.valueText}> 24,968</Text>
                <Text style={styles.percentageText}> +190.06 (0.77%)</Text>
            </View>
            
        </View>
        <View style={styles.BorderLine}></View>
        </View>
        
    );
};

export default IndicesCell;

const styles = StyleSheet.create({
    indicesCellContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    indicesCellText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '500',
        fontFamily: FONT_DEFAULT,
    },
    indicesCellPriceContainer: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    valueText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: FONT_DEFAULT,
    },
    percentageText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: FONT_DEFAULT,
    },
    BorderLine: {
        width: '100%',
        height: 0.5,
        paddingHorizontal: 16,
        backgroundColor: GLOBAL_BORDER_COLOR,
    },
});