import { View, Text, StyleSheet,Image,TouchableOpacity,TextInput } from 'react-native'
import {router} from 'expo-router'
import {useState} from 'react'

const Login = () => {
    const Register =()=>{
    router.push('/Register')
  }
  const [index,SetIindex]=useState('')
  const [Password,SetIPassword]=useState('')
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo_img}/>
      
        <View style={styles.heading}>
              <Text style={styles.head}>STUDENT</Text>
              <Text style={styles.head}>Login</Text>
        </View>

        <View style={styles.inputfield}>
                <Text style={styles.inputfieldtxt}>Index Number </Text>
                <TextInput placeholder="5230101003" style={styles.inputfieldbtn}/>
                <Text style={styles.inputfieldtxt}>Password </Text>
                <TextInput style={styles.inputfieldbtn} />
        </View>
        <View style={styles.Btns}>
            <TouchableOpacity style={styles.BtnRegister}>
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