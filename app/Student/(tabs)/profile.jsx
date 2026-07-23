import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import {useState,useEffect} from 'react'
import {supabase} from '../../../Lib/Supabase'

const profile = () => {
  useEffect(()=>{
    const getinfo =async()=>{
      const {data,error}=await supabase
      
    }
  },[])
  return (
    <View style={styles.container}>
      <Text>Content</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default profile