import { View, Text, StyleSheet } from 'react-native'
import   MapView, {Marker} from 'react-native-maps'

const Home = () => {
    const initialRegion={
        latitude:6.697902,
        longitude:-1.681507,
        latitudeDelta:0.003,
        longitudeDelta:0.003,
    }
  return (
    <View style={styles.container}>
       
        
      <MapView style={styles.map} initialRegion={initialRegion} > 
         <Marker
        coordinate={{latitude:6.697902,longitude:-1.681507}}
        title="Bus 1"
        description="Destination: NLB" 
        />
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