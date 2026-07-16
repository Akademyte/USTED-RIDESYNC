import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'

const onboarding3 = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/notift.png')} style={styles.Imgboard} />
      </View>
      <TouchableOpacity style={styles.BtnSkip}>
        <Text style={styles.TxtSkip}>SKIP</Text>
      </TouchableOpacity>

        <Text style={styles.Msg}>
            Never miss Your
             Ride
        </Text>

        <TouchableOpacity style={styles.BtnNext}>
        <Text style={styles.TxtNext}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  Imgboard:{
    height:"70%",
    width:"100%"
  },
  BtnSkip:{
    position:'absolute',
    left:"80%",
    top:50
  },
  TxtSkip:{
    fontWeight:'bold',
    fontSize:20
  },
  Msg:{
     fontSize:30,
    fontWeight:'bold',
    textAlign:'center'
  },
  BtnNext:{
      backgroundColor:'#790F0F',
     width:"95%",
     height:50,
     alignItems:'center',
     alignSelf:'center',
     borderRadius:15,
     marginTop:"15%"
  },
  TxtNext:{
      padding:10,
    fontSize:20,
    color:'#fff'
  }
})

export default onboarding3