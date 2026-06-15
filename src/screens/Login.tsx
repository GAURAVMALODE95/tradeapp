import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import CustomButton from '../components/Button'
import { showSnackbar } from '../components/snackbar'
import CustomTextField from '../components/textfeild'
import { SafeAreaView } from 'react-native-safe-area-context'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../navigation/types'
import { FONT_DEFAULT,GLOBAL_HORIZANTAL_PADDING } from '../constants/Constants'

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({ navigation }: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const verifyform = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.length == 0){
        showSnackbar('Email is required.');
        return false;
    }
    if(password.length == 0){
        showSnackbar('password is required.');
        return false;
    }
    if (!emailRegex.test(email.trim())) {
        showSnackbar('Please enter a valid email.');
        return false;
      }
    if(password.length < 6){
        showSnackbar('Password must be at least 6 characters long.');
        return false;
    }
    

    return true;
}

    return (
        <SafeAreaView style={styles.globalsetting}>
            <Text style={styles.headingstyle}>Welcome Back!</Text>
            <Text style={styles.nonheadingstyle}>Sign in to continue</Text>
            <View style={{ height: 40 }} />
            <CustomTextField label='Email' value={email} onChangeText={setEmail}></CustomTextField>
            <CustomTextField label='Password' value={password} onChangeText={setPassword}></CustomTextField>
            <View style={{ height: 40 }} /> 
            <CustomButton title="Login" color="#1E293B" onPress={() => {
                if(!verifyform()){
                    return;
                }
                navigation.replace('Home');
                }}/>
            <View style={{ height: 60 }} /> 
            


        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    globalsetting: {
        flex: 1,
        justifyContent:'center',
        paddingHorizontal: GLOBAL_HORIZANTAL_PADDING,
        backgroundColor: '#131416'
    },
    headingstyle: {
        fontSize: 34,
        fontWeight: '700',
        marginTop: 20,
        color: "#efefef",
        fontFamily: FONT_DEFAULT,
    },
    nonheadingstyle: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 10,        
        color: "#efefef",
        fontFamily: FONT_DEFAULT,
    },


})