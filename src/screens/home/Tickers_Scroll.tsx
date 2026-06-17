import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextTicker from 'react-native-text-ticker';
import { FONT_DEFAULT } from '../../constants/Constants';


const Tickers_Scroll = () => {
    const tickers = {
        SENSEX: '82,515',
        NIFTY: '25,142',
        BANKNIFTY: '56,082',
        FIN: '27,430',
        MID: '59,850',
        SMALL: '19,250',
    };

    const tickerText = Object.entries(tickers)
        .map(([key, value]) => `${key}  ${value}`)
        .join('         ');

    return (
        <View style={styles.tickersContainer}>
            <TextTicker
                style={styles.tickersText}
                duration={21000}
                loop
                bounce={false}
                repeatSpacer={20}
                marqueeDelay={0}
            >
                {tickerText}
            </TextTicker>
        </View>
    );
};

export default Tickers_Scroll;

const styles = StyleSheet.create({
    tickersContainer: {
        height: 32,
        backgroundColor: '#000',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },

    tickersText: {
        fontSize: 14,
        fontFamily: FONT_DEFAULT,
        color: '#FFF',
        fontWeight: '400',
    },
});