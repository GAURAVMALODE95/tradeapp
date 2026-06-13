import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import CustomButton from '../components/Button'
import { showSnackbar } from '../components/snackbar'
import CustomTextField from '../components/textfeild'
import { SafeAreaView } from 'react-native-safe-area-context'





const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const verifyform = () => {
    if(email.length == 0){
        showSnackbar('Email is required');
        return false;
    }
    if(password.length == 0){
        showSnackbar('password is required');
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
                if(verifyform()){
                    return 
                }
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
        paddingHorizontal: 16,
        backgroundColor: '#131416'
    },
    headingstyle: {
        fontSize: 34,
        fontWeight: '700',
        marginTop: 20,
        color: "#efefef",
        fontFamily: "Inter",
    },
    nonheadingstyle: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 10,        
        color: "#efefef",
        fontFamily: "Inter",
    },


})