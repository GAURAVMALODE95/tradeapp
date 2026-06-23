import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
} from 'react-native';

interface CustomButton2Props {
  title: string;
  color: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
}

const CustomButton2 = ({
  title,
  color,
  onPress,
  loading = false,
  disabled = false,
}: CustomButton2Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: color } as ViewStyle,
        disabled && styles.disabledButton,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton2;

const styles = StyleSheet.create({
  button: {
    minHeight: 24,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  disabledButton: {
    opacity: 0.5,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});