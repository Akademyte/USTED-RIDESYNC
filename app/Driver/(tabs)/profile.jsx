import { View, Text, StyleSheet } from 'react-native'

const profile = () => {
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