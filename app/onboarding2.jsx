import { View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native'
import {router} from 'expo-router'

const onboarding2 = () => {
  const Next=()=>{
    router.push('/onboarding3')
  }
   const Skip =()=>{
      router.replace('/Register')
    }
  return (
    <View style={styles.container}>
      <View>
      <Image source={require('../assets/capacity.jpeg')} style={styles.Capacity_img}/>
      </View>

       
          <TouchableOpacity style={styles.TxtSkip} onPress={Skip}>
            <Text style={styles.TxtSbtn}>SKIP</Text>
          </TouchableOpacity>

          <Text style={styles.TxtMsg}>Check Capacity before
            you walk
          </Text>
       
      <View>
        <TouchableOpacity style={styles.NxtBtn} onPress={Next}>
            <Text style={styles.NxtTxt}>NEXT</Text>
          </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  Capacity_img:{
    height:"70%",
  },
  TxtMsg:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center'
  },
  NxtBtn:{
     backgroundColor:'#790F0F',
     width:"95%",
     height:50,
     alignItems:'center',
     alignSelf:'center',
     borderRadius:15,
     marginTop:"15%"
  },
  NxtTxt:{
    padding:10,
    fontSize:20,
    color:'#fff'
  },
  TxtSkip:{
    position:'absolute',
    top:50,
    left:"80%"
  },
  TxtSbtn:{
    fontWeight:'bold',
    fontSize:20,
  }
  

  
})

export default onboarding2