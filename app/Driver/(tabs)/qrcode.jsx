import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { Tabs } from 'expo-router'
import {supabase} from '../../../Lib/Supabase'
import {useState,useEffect} from 'react'
import QRcode from 'react-native-qrcode-svg'


const qrcode = () => {
  const [capacity,setCapacity]=useState('')
  const[buses,setBuses]=useState([])
  useEffect(()=>{
    const getcapacity=async()=>{
      const {data,error}=await supabase
      .from('buses')
      .select('*')
      if (error){
        console.log(error)
      }
      setBuses(data)
    }
    getcapacity()
  },[])

  const clearcapacity=async()=>{
    const {data,error}=await supabase
    .from('buses')
    .update({capacity:0})
    .eq('driver_id',busid)
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.qrtxt}>QR CODE</Text>
      

    <View style={styles.scan}>
      <Text style={styles.scantxt}>Please Scan</Text>
      <QRcode  value="bus_1" size={300} a />
    </View>

    <View style={styles.Capacity}>
        <Text style={styles.captxt}>Capacity</Text>
        {buses.map((bus)=>(
          <View key={bus.id}>
            <Text style={styles.capcount}>{`${bus.capacity_occupied} / ${bus.capacity}`}</Text>
             </View>
        ))}
    </View>
    <TouchableOpacity style={styles.clearbtn} onPress={clearcapacity}>
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
  },
  capcount:{
    fontSize:25,
    fontWeight:'bold',
    alignSelf:'center'
  },
  


  
})

export default qrcode