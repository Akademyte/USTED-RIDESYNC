import { View, Text, StyleSheet } from 'react-native'
import   MapView, {Marker} from 'react-native-maps'
import {useEffect,useState} from 'react'
import {supabase} from '../../../Lib/Supabase'

const Home = () => {
    const initialRegion={
        latitude:6.697902,
        longitude:-1.681507,
        latitudeDelta:0.003,
        longitudeDelta:0.003,
    }

    const [buses,SetBuses]=useState([])
    useEffect(()=>{
      const fetchBuses=async()=>{
        const {data,error} =await supabase
        .from ('buses')
        .select('*')

        if (error) console.log(error)
          if(data) SetBuses(data)
            console.log("BUSES:",data)
      }
      fetchBuses()
      const channel=supabase
      .channel('updates')
      .on('postgres_changes',{event:'*', schema:'public', table:'buses'},(payload)=>{
        SetBuses((currentBuses)=> currentBuses.map((bus)=>
        bus.id===payload.new.id ? payload.new :bus
        )
      )
      })
      .subscribe()
      return()=>{
        supabase.removeChannel(channel)
      }
    },[])
    

  return (
    <View style={styles.container}>
       
        
      <MapView style={styles.map} initialRegion={initialRegion} > 
      {buses.map((bus) =>(
        <Marker
        key={bus.id}
        coordinate={{latitude:bus.latitude,longitude:bus.longitude}}
        title={bus.bus_name}
        />
           
      ))}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', 
    flex:1
  },
  map:{
    flex:1,
    width:"100%"
  }
})

export default Home