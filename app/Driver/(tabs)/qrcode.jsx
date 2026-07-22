import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { Tabs } from 'expo-router'
import {supabase} from '../../../Lib/Supabase'
import {Ionicons} from '@expo/vector-icons'


const qrcode = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.qrtxt}>QR CODE</Text>
      

    <View style={styles.scan}>
      <Text style={styles.scantxt}>Please Scan</Text>
      
    </View>

    <View style={styles.Capacity}>
        <Text style={styles.captxt}>Capacity</Text>
        <Text style={styles.cabnumtxt}></Text>
    </View>
    <TouchableOpacity style={styles.clearbtn}>
        <Text style={styles.cleartxt}>Clear</Text>
    </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  qrtxt:{
    fontSize:32,
    fontWeight:'bold',
    alignSelf:'center'
  },
  scantxt:{
    fontSize:28,
    alignSelf:'center'
  },
  scan:{
    marginTop:"20%",
  },
  captxt:{
    fontSize:25,
    alignSelf:'center'
  },
  clearbtn:{
    backgroundColor:'#790F0F',
    width:70,
    alignSelf:'center',
    alignItems:'center',
    padding:10,
    borderRadius:20
  },
  cleartxt:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff'
  }


  
})

export default qrcode