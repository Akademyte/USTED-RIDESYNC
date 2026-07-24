import { View, Text, StyleSheet } from 'react-native'
import {supabase} from '../../../Lib/Supabase'
import {CameraView,Camera} from 'expo-camera'
import {useEffect,useState} from 'react'
import {useAudioPlayer} from 'expo-audio'


const scan = () => {

    const [scanned,setScanned]=useState('')
    const errorsound=useAudioPlayer(require('../../../assets/error.mp3'))
    const successsound=useAudioPlayer(require('../../../assets/collect.wav'))

    useEffect (()=>{
        const permission=async()=>{
            const {status}=await Camera.requestCameraPermissionsAsync()
            if (status !=='granted'){
                console.log('denied')
                
                return
            }
            console.log('granted')
           
        }
        permission()
    },[])
    const handleScan=async({data})=>{
      console.log('scanned:',data)
        const {error}=await supabase.rpc('increment_capacity',{
            bus_id_input:data
        })
        if(error){
            console.log(error)
            successsound.play()
            return
        }
        setScanned(true)
       errorsound.play()
        console.log('capacity updated')
    }
  return (
    <View style={styles.container}>
      <CameraView
      style={styles.camera}
      onBarcodeScanned={scanned ? undefined:handleScan}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  camera:{
    flex:1,
    width:"100%"
  }
})

export default scan