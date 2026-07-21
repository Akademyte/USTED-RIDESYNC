import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import {} from 'expo-router'
import {supabase} from '../../../Lib/Supabase'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Set}>
        <Text style={styles.Settxt}>Set Destination:</Text>
        
      </View>
      <View style={styles.track}>
        <TouchableOpacity style={styles.trackBtn}>
          <Text style={styles.trackTxt}>SHARE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
      <Text style={styles.infotxt}>Bus:</Text>
      <Text style={styles.infotxt}>Capacity:</Text>
      <Text style={styles.infotxt}>Destination:</Text>
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
    marginTop:"20%",
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
    marginBottom:"20%"
  }

})

export default Home