import { View, Text, StyleSheet,Image,TouchableOpacity, TextInput,Alert } from 'react-native'
import {router} from 'expo-router'
import {useState} from 'react'
import {supabase} from '../Lib/Supabase'

const Register = () => {
  const[fullname,setFullname]=useState('')
  const [index,SetIindex]=useState('')
  const [Email,setEmail]=useState('')
  const [Password,SetIPassword]=useState('')
  const[Confirmpass,setConfrimpass]=useState('')
  const Login =()=>{
    router.push('/Login')
  }

  const HandleRegister= async()=>{
    if(fullname ===""){
      Alert.alert("Error","Fullname is required")
      return
    }
    if (index===""){
      Alert.alert("Error","indexnumber is required")
      return
    }
     if (Email===""){
      Alert.alert("Error","Email is required")
      return
    }
     if (Password===""){
      Alert.alert("Error","Password is required")
      return
     }
      if (Password !== Confirmpass){
        Alert.alert("Error","password mismatch")
        return
      }
      const {data,error}=await supabase.auth.signUp({
        email:Email,
        password:Password,
      })
      console.log("data:",data)
      console.log("error:",error)

      if(error){
        Alert.alert("Error",error.message)
        return
      }
      Alert.alert("success","Account Created! please check your email to verify.")
      router.replace('/Login')
    }

    const Driver=()=>{
      router.replace('Driver/login')
    }
  

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo_img}/>

      <View style={styles.heading}>
        <Text style={styles.head}>STUDENT</Text>
        <Text style={styles.head}>Register</Text>
      </View>

      <View style={styles.inputfield}>
        <Text style={styles.inputfieldtxt} >FullName </Text>
        <TextInput placeholder="your Name"  value={fullname} onChangeText={setFullname} style={styles.inputfieldbtn}/>
        <Text style={styles.inputfieldtxt}>Index Number </Text>
        <TextInput placeholder="5230101003" value={index} onChangeText={SetIindex} style={styles.inputfieldbtn}/>
        <Text style={styles.inputfieldtxt}>Email</Text>
        <TextInput placeholder="aamustedstudent@gmail.com" value={Email} onChangeText={setEmail} style={styles.inputfieldbtn}/>
        <Text style={styles.inputfieldtxt}>Password </Text>
        <TextInput style={styles.inputfieldbtn} value={Password} onChangeText={SetIPassword} />
        <Text style={styles.inputfieldtxt}>Confirm Password</Text>
        <TextInput style={styles.inputfieldbtn} value={Confirmpass} onChangeText={setConfrimpass} />
      </View>
      <View style={styles.Btns}>
        <TouchableOpacity style={styles.BtnRegister} onPress={HandleRegister}>
          <Text style={styles.RegisterTxt}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Login}>
          <Text style={styles.AlreadyTxt}>Already have an Account? Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Driverbtn} onPress={Driver}>
          <Text style={styles.Drivertxt}>DRIVER</Text>
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
    marginTop:5,
  },
  Driverbtn:{
    alignSelf:'center'
  },
  Drivertxt:{
    fontSize:20,
    fontWeight:'bold'
  }


})

export default Register