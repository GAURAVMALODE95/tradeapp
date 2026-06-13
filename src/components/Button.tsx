import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

interface CustomButtonProps {
  title: string;
  color: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
}

const CustomButton = ({
  title,
  color,
  onPress,
  loading = false,
  disabled = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        {backgroundColor:color},
        styles.button,
        disabled && styles.disabledButton,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={[styles.buttonText]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 100,
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