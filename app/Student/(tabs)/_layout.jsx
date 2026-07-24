import {Tabs} from 'expo-router'
import {Ionicons} from '@expo/vector-icons'

const Layout =()=>{
    return(
        <Tabs>
            <Tabs.Screen name="home" options={{tabBarIcon:(color,size) => <Ionicons name="home" color={color} size={size} />}}  />
            <Tabs.Screen name="bus"  options={{tabBarIcon:(color,size) => <Ionicons name="bus" color={color} size={size} />}}/>
            <Tabs.Screen name="scan" options={{tabBarIcon:(color,size) => <Ionicons name="scan" color={color} size={size} />}} />
            <Tabs.Screen name="profile" options={{tabBarIcon:(color,size) => <Ionicons name="person" color={color} size={size} />}} />
        </Tabs>
    )
}
export default Layout