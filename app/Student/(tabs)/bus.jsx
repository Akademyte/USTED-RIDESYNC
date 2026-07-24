import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import {useState} from 'react'
import {supabase} from '../../../Lib/Supabase'

const bus = () => {
  const [bus,setBus]=useState('')
  const [destination,setDestination]=useState('')
  const [capacity,setCapacity]=useState('')
  const[buses,setBuses]=useState([])
  const Getbuses=async()=>{
    const {data,error}= await supabase
    .from('buses')
    .select('*')
    .eq('Driver_id',id)
    if (error){
      console.log('error fetching buses')
      return
    }
    setBuses(data)
  }

  return (
    <View style={styles.container}>
     {buses.map((b)=>(
      <View key={b.id}>
        <Text>Bus:{b.bus}</Text>
        <Text>Capacity:{b.capacity}</Text>
        <Text>Destination:{b.destination}</Text>
        </View>
     ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  }
})

export default bus