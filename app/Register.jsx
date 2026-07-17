import { View, Text, StyleSheet,Image,TouchableOpacity, TextInput } from 'react-native'
import {router} from 'expo-router'
import {useState} from 'react'

const Register = () => {
  const[fullname,setFullname]=useState('')
  const [index,SetIindex]=useState('')
  const [Email,setEmail]=useState('')
  const [Password,SetIPassword]=useState('')
  const[Confirmpass,setConfrimpass]=useState('')
  const Login =()=>{
    router.push('/Login')
  }
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo_img}/>

      <View style={styles.heading}>
        <Text style={styles.head}>STUDENT</Text>
        <Text style={styles.head}>Register</Text>
      </View>

      <View style={styles.inputfield}>
        <Text style={styles.inputfieldtxt}>FullName </Text>
        <TextInput placeholder="your Name" style={styles.inputfieldbtn}/>
        <Text style={styles.inputfieldtxt}>Index Number </Text>
        <TextInput placeholder="5230101003" style={styles.inputfieldbtn}/>
        <Text style={styles.inputfieldtxt}>Email</Text>
        <TextInput placeholder="aamustedstudent@gmail.com" style={styles.inputfieldbtn}/>
        <Text style={styles.inputfieldtxt}>Password </Text>
        <TextInput style={styles.inputfieldbtn} />
        <Text style={styles.inputfieldtxt}>Confirm Password</Text>
        <TextInput style={styles.inputfieldbtn} />
      </View>
      <View style={styles.Btns}>
        <TouchableOpacity style={styles.BtnRegister}>
          <Text style={styles.RegisterTxt}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Login}>
          <Text style={styles.AlreadyTxt}>Already have an Account? Login</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head:{
    fontSize:30,
    fontWeight:'bold'
  },
  inputfieldtxt :{
    fontSize:20,
    marginTop:5,
  },
  inputfieldbtn:{
    borderColor:'#000000',
    borderRadius:7,
    border:20,
    borderWidth:1
  },
  BtnRegister:{
    alignSelf:'center',
    backgroundColor:'#790F0F',
    padding:10,
    marginTop:10,
    borderRadius:5
  },
  RegisterTxt:{
    color:'rgb(252, 255, 255)',
    fontSize:15
  },
  AlreadyTxt:{
    fontSize:17,
    color:'#790F0F',
    marginTop:20,
  }


})

export default Register