import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'
import Explore from '../components/screens/explore/Explore'
import Home from '../components/screens/home/Home'
import Language from '../components/screens/language/Language'
import Location from '../components/screens/location/Location'
import Search from '../components/screens/search/Search'
import Settings from '../components/screens/settings/Settings'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const HomeNavigation = () => {
  
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='Location' component={Location} options={{ headerShown: true, headerShadowVisible: false }} />
      <Stack.Screen name='Language' component={Language} options={{ headerShown: true, headerShadowVisible: false }} />
    </Stack.Navigator>
  )
}

const Navigation: FC = () => {
  const ref = useNavigationContainerRef()
  
  return (
    <NavigationContainer ref={ref}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#F5F6F8',
            borderTopWidth: 0,
            paddingBottom: 10,
            height: 55
          },
        }}
        backBehavior='firstRoute'
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigation}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color, focused }) => {
              const iconColor = focused ? '#1359BA' : '#596372'
              return (
                <Feather name='home' size={16} color={iconColor} style={{ marginBottom: -10 }} />
              )
            }
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color, focused }) => {
              const iconColor = focused ? '#1359BA' : '#596372'
              return (
                <Feather name='compass' size={16} color={iconColor} style={{ marginBottom: -10 }} />
              )
            }
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color, focused }) => {
              const iconColor = focused ? '#1359BA' : '#596372'
              return (
                <Feather name='search' size={16} color={iconColor} style={{ marginBottom: -10 }} />
              )
            }
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color, focused }) => {
              const iconColor = focused ? '#1359BA' : '#596372'
              return (
                <Feather name='settings' size={16} color={iconColor} style={{ marginBottom: -10 }} />
              )
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation