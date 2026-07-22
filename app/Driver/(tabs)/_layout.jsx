import {Tabs} from 'expo-router'
import {Ionicons} from '@expo/vector-icons'

const Layout =()=>{
    return(
        <Tabs>
            <Tabs.Screen name="home" options={{tabBarIcon:(color,size) => <Ionicons name="home" color={color} size={size} />}}  />
            <Tabs.Screen name="qrcode"  options={{tabBarIcon:(color,size) => <Ionicons name="qr-code" color={color} size={size} />}}/>
            <Tabs.Screen name="profile" options={{tabBarIcon:(color,size) => <Ionicons name="person" color={color} size={size} />}} />
        </Tabs>
    )
}
export default Layout