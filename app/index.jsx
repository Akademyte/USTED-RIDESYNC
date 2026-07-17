import {View,Text,Image,StyleSheet} from 'react-native';
import {router} from 'expo-router'
import {StatusBar} from'expo-status-bar'
import {useEffect} from 'react'


const Main =()=>{
    useEffect(()=>{
        setTimeout(()=>{
            router.replace('/onboarding1')
        },5000)
    },[])
    
    return(
        <View style={styles.Container}>
           
            <StatusBar style="auto" />
            <Text style={styles.Header1}>USTED</Text>
            <Text style={styles.Header2}>RIDESYNC</Text>

            <View style={styles.Images}>
                <Image source={require('../assets/bus.jpeg')} style={styles.Bus_img} />
                <Image source={require('../assets/logo.jpg')} style={styles.logo_img}/>
            </View>

            <Text style={styles.Sub}>Track.Ride.Arrive</Text>
           
        </View>
    )
}
const styles=StyleSheet.create({
    Container:{
        backgroundColor:'rgba(255, 255, 255, 0.2)',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        
    },
    Header1:{
        fontSize:35,
        fontWeight:'italic',
        color:'#790F0F'
    },
    Header2:{
        fontSize:40,
        fontWeight:'bold',
        color:'#790F0F'
    },
    Bus_img:{
        width:250,
        height:250
    },
    Sub:{
        fontSize:20,
        color:'#790F0F'
    }

})
export default Main