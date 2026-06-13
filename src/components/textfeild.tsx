import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TextInputProps,
} from 'react-native';

interface CustomTextFieldProps extends TextInputProps {
    label?: string;
    error?: string;
}

const CustomTextField = ({
    label,
    error,
    ...props
}: CustomTextFieldProps) => {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}

            <TextInput
                style={[
                    styles.input,
                    error ? styles.errorInput : null,
                ]}
                placeholderTextColor="#999"
                {...props}
            />

            {error ? (
                <Text style={styles.errorText}>{error}</Text>
            ) : null}
        </View>
    );
};

export default CustomTextField;

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        marginTop: 15,
    },
    label: {
        fontSize: 14,
        marginBottom: 6,
        fontWeight: '500',
        color:'#efefef'
    },
    input: {
        height: 52,
        borderWidth: 1,
        // borderColor: '#FFF',
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: '#1a1d24',
        color:'#FFF',
        fontSize: 16,
    },
    errorInput: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginTop: 4,
        fontSize: 12,
    },
});