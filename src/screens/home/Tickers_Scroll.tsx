import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextTicker from 'react-native-text-ticker';
import { FONT_DEFAULT } from '../../constants/Constants';


const Tickers_Scroll = () => {
    const tickers = {
        RELIANCE: '1,485',
        TCS: '4,120',
        HDFCBANK: '2,045',
        ICICIBANK: '1,320',
        INFY: '1,610',
        SBIN: '845',
        BHARTIARTL: '1,895',
        ITC: '455',
        LT: '3,980',
        AXISBANK: '1,215',
        KOTAKBANK: '2,020',
        HCLTECH: '1,745',
        SUNPHARMA: '1,780',
        MARUTI: '12,650',
        TITAN: '3,780',
        BAJFINANCE: '9,250',
        WIPRO: '285',
        TATAMOTORS: '715',
        ADANIENT: '2,950',
        ASIANPAINT: '2,880',
      };

    const tickerText = Object.entries(tickers)
        .map(([key, value]) => `${key}  ${value}`)
        .join('         ');

    return (
        <View style={styles.tickersContainer}>
            <TextTicker
                style={styles.tickersText}
                duration={25000}
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