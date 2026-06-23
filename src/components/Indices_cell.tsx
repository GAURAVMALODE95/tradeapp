import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FONT_DEFAULT, GLOBAL_BORDER_COLOR } from '../constants/Constants';

interface Props {
  name?: string;
  value?: string;
  change?: string;
  isPositive?: boolean;
}

const IndicesCell = ({
  name,
  value,
  change,
  isPositive,
}: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.indexName}>{name}</Text>

        <View style={styles.priceContainer}>
          <Text style={styles.valueText}>{value}</Text>

          <Text
            style={[
              styles.changeText,
              {
                color: isPositive ? '#22C55E' : '#EF4444',
              },
            ]}>
            {change}
          </Text>
        </View>
      </View>

      <View style={styles.divider} />
    </View>
  );
};

export default IndicesCell;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },

  indexName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: FONT_DEFAULT,
    fontWeight: '600',
  },

  priceContainer: {
    alignItems: 'flex-end',
  },

  valueText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: FONT_DEFAULT,
    fontWeight: '600',
  },

  changeText: {
    marginTop: 4,
    fontSize: 13,
    fontFamily: FONT_DEFAULT,
    fontWeight: '500',
  },

  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: GLOBAL_BORDER_COLOR,
  },
});