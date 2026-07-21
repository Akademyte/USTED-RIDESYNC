import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import {} from 'expo-router'
import {supabase} from '../../../Lib/Supabase'


const qrcode = () => {
  return (
    <View style={styles.container}>
      <Text>QR CODE</Text>
      <Text>Please Scan</Text>

    <View style={styles.scan}>

    </View>

    <View style={styles.Capacity}>
        <Text>Capacity</Text>
        <Text></Text>
    </View>
    <TouchableOpacity>
        <Text>Clear</Text>
    </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  }
})

export default qrcode