import { View, Text, Image ,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import VectorIcons from '../utlis/VectorIcons'
import { Colors } from '../utlis/Colors'
import Logo from '../assets/images/logo.png'
import MetaLogo from '../assets/images/meta-logo.png'
const LoginScreen = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    return (
    <View style={styles.Container}>
        <VectorIcons name='arrow-back' size={20} color={Colors.black} type='Ionicons'  />
        <View style={styles.subContainer}>
        <Image source={Logo} style={styles.logoStyle} />
        <TextInput 
        placeholder='Mobile Number Or Email'
        value={email}
        onChangeText={value=>setEmail(value)}
        style={styles.textInoutBox}
        />
<TextInput 
        placeholder='Password'
        value={password}
        onChangeText={value=>setPassword(value)}
        style={styles.textInoutBox}
        
        />
        <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.login}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        <TouchableOpacity style={styles.newAccount}>
            <Text style={styles.newAccountText}>Create new account?</Text>
        </TouchableOpacity>
        <Image source={MetaLogo} style={styles.MetaLogo} />
        </View>
        
    </View>
  )
}
const styles=StyleSheet.create({
    Container:{
        padding:16
    },
    subContainer:{
justifyContent:'center',

alignItems:'center'
    },
    logoStyle:{
height:50,
width:50,
marginVertical:'20%'
    },
    textInoutBox:{
        borderColor:Colors.grey,
        borderWidth:1,
        borderRadius:10,
        width:'95%',
        margin:10
    },
    loginButton:{
        backgroundColor:Colors.primaryColor,
        width:'95%',padding:10,
        borderRadius:20,
        alignItems:'center',
        marginTop:12
    },
login:{
    color:Colors.white,
    fontSize:15,
    fontWeight:'500'
},
forgotPassword:{
    color:Colors.grey,
    fontSize:14,
    fontWeight:'500' ,
    marginTop:15
},
newAccount:{
    borderColor:Colors.primaryColor,
    borderWidth:1,
        width:'95%',
        padding:10,
        borderRadius:20,
        alignItems:'center',
        marginTop:"35%"
},
newAccountText:{
    color:Colors.primaryColor,
    fontSize:14,
    fontWeight:'500'
},
MetaLogo:{
    height:15,
width:70,
marginTop:15
}
})
export default LoginScreen 