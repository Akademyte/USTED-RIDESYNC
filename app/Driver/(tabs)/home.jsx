import { View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import {useEffect,useState} from 'react'
import {supabase} from '../../../Lib/Supabase'
import {Picker} from '@react-native-picker/picker'
import * as Location from 'expo-location'

const Home = () => {
  const[bus,setBus]=useState('')
  const[capacity,setCapacity]=useState('')
  const[destination,setDestination]=useState('')
  const destinationOptions=["ROB","ESA","NLB","UBS","NFB","AUTONOMY","OPOKU WARE",
    "IPT","ABUAKWA","TANOSO","SOFOLINE","APATRAPA","TASTY QUEEN"
  ]
  useEffect( () =>{
   const fetchbus = async ()=>{
     const {data:{user}}= await supabase.auth.getUser()
    const {data,error} = await supabase
    .from('buses')
    .select('*')
    .eq('Driver_id',user.id)
    if (data && data.length > 0){
      setBus(data[0].id)
      setCapacity(data[0].capacity)
      setDestination(data[0].destination)
    }
   }
   fetchbus()
  },[])
 
    const option={
      accuracy:Location.Accuracy.High,
      timeInterval:5000,
      distanceInterval:10,
    }
    const Sharebtn=async ()=>{
      const {status}=await Location.requestForegroundPermissionsAsync()
      if (status !=='granted')
        return
      Location.watchPositionAsync(option,(location)=>{
        supabase.from('buses').update({
          latitude:location.coords.latitude,
          longitude:location.coords.longitude
        })
        .eq('id',bus)
        .then ((res)=>console.log("UPDATED RESULTS:",res))
        console.log("GPS UPDATE:",location.coords.latitude,location.coords.longitude  )
      })
      
      
    }
 
  return (
    <View style={styles.container}>
      <View style={styles.Set}>
        <Text style={styles.Settxt}>Set Destination:</Text>
        <Picker style={styles.list}
        selectedValue={(value)=>{setDestination(value)
          supabase.from('buses').update({destination:value}).eq('id',bus).then()
        }}>
          {destinationOptions.map((d)=> <Picker.Item key={d} label={d} value={d} />)}
        </Picker>
      </View>
      <View style={styles.track}>
        <TouchableOpacity style={styles.trackBtn} onPress={Sharebtn}>
          <Text style={styles.trackTxt}>SHARE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
      <Text style={styles.infotxt}>Bus:{bus}</Text>
      <Text style={styles.infotxt}>Capacity:{capacity}</Text>
      <Text style={styles.infotxt}>Destination:{destination}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    
  },
  Settxt:{
    marginTop:"10%",
    fontSize:30,
    fontWeight:'bold',
    alignSelf:'center'
  },
  trackBtn:{
    backgroundColor:'#790F0F',
    width:"70%",
    height:"55%",
    marginTop:"15%",
    alignItems:'center',
    alignSelf:'center',
    borderRadius:150,
    justifyContent:'center'
  },
  trackTxt:{
    fontSize:60,
    color:'#ffffff',
    fontWeight:'bold'
  },
  infotxt:{
    fontSize:25,
    alignSelf:'center',
  },
  info:{
    marginBottom:"10%"
  },
  list:{
    borderWidth:2,
    borderColor:'#000000'
  }

})

export default Home