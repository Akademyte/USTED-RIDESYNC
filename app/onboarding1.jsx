import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'
import {router} from 'expo-router'

const Onboarding1 = () => {
    const Next =()=>{
        router.push('/onboarding2')
    }
    const Skip =()=>{
      router.replace('/Register')
    }
  return (
    <View style={styles.container}>
      <Image source={require('../assets/onboarding1.jpeg')} style={styles.Onboarding1}/>
      <TouchableOpacity style={styles.BtnSkip} onPress={Skip}>
         <Text style={styles.TxtSkip} >SkIP</Text>
      </TouchableOpacity>
     <View>
        <Text style={styles.MsgTxt}>
            Track your Bus in
            Real time
        </Text>
     </View>
      <TouchableOpacity style={styles.BtnNext} onPress={Next}>
        <Text style={styles.Txt} >NEXT</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Onboarding1:{
    width:"100%",
    height:"70%",
  },
  BtnNext:{
    width:"95%",
    height:50,
    backgroundColor:'#790F0F',
    borderRadius:15,
    marginTop:"15%"
  },
  Txt:{
    textAlign:'center',
    padding:10,
    fontSize:20,
    color:'rgb(255, 255, 255)'
  },
  BtnSkip:{
    position:'absolute',
    top:30,
    right:20,
  },
  TxtSkip:{
    fontWeight:'bold',
    fontSize:20,
  },
  MsgTxt:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold'
  }
})

export default Onboarding1