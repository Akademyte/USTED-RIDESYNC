import { View, Text, StyleSheet,Image,TouchableOpacity,TextInput,Alert } from 'react-native'
import {router} from 'expo-router'
import {useState} from 'react'
import {supabase} from '../Lib/Supabase'

const Login = () => {
    const Register =()=>{
    router.push('/Register')
  }
  const [Email,setEmail]=useState('')
  const [Password,SetIPassword]=useState('')

  const HandleLogin= async()=>{
    if(Email===""){
      Alert.alert("error","Email is empty")
      return
    }
    if(Password===""){
      Alert.alert("error","password is empty")
      return
    }
    const{data,error}=await supabase.auth.signInWithPassword({
      email:Email,
      password:Password,
    })
    if (error){
      Alert.alert("Error",error.message)
      return
    }
    Alert.alert("Success","Login Successfully")
    router.replace('/Student/home')
  }
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo_img}/>
      
        <View style={styles.heading}>
              <Text style={styles.head}>DRIVER</Text>
              <Text style={styles.head}>Login</Text>
        </View>

        <View style={styles.inputfield}>
                <Text style={styles.inputfieldtxt}>Email </Text>
                <TextInput  value={Email} onChangeText={setEmail} style={styles.inputfieldbtn}/>
                <Text style={styles.inputfieldtxt}>Password </Text>
                <TextInput value={Password} onChangeText={SetIPassword} style={styles.inputfieldbtn} />
        </View>
        <View style={styles.Btns}>
            <TouchableOpacity style={styles.BtnRegister} onPress={HandleLogin}>
            <Text style={styles.RegisterTxt}>Login</Text>
             </TouchableOpacity>
                <TouchableOpacity onPress={Register}>
                <Text style={styles.AlreadyTxt}>Don't Have an Account? Register</Text>
                </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width:180,
    borderWidth:1

  }, BtnRegister:{
    alignSelf:'center',
    backgroundColor:'#790F0F',
    padding:12,
    marginTop:10,
    borderRadius:5
  },
  RegisterTxt:{
    color:'rgb(252, 255, 255)',
    fontSize:17
  },
  AlreadyTxt:{
    fontSize:17,
    color:'#790F0F',
    marginTop:20,
  }
})

export default Login