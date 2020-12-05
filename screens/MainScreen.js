import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUser, logoutUser} from '../store/actions/index'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FeedScreen from '../screens/FeedScreen'
import Home from '../screens/Home'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import ProfileScreen from './ProfileScreen'
import AddPostScreen from './AddPostScreen'
import SearchScreen from './SearchScreen'

const Tab = createBottomTabNavigator()

const MainScreen = () => {
    const dispatch = useDispatch()
    const selectedData = useSelector(state => state.userState.currentUser)

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    return (
            <Tab.Navigator tabBarOptions={{
                activeTintColor: "black",
            }}>
                <Tab.Screen 
                options={{                    
                    tabBarIcon: () => {
                        return <Ionicons name="ios-home" size={22} />
                    },
                }} 
                name="Home" 
                component={Home} 
                />
                <Tab.Screen 
                    name="Search" 
                    component={SearchScreen}
                    options={{
                        tabBarIcon: () => {
                            return <Ionicons name="ios-search" size={22} />
                        }
                    }} 
                />
                <Tab.Screen 
                    name="Add" 
                    component={AddPostScreen}
                    options={{
                        tabBarIcon: () => {
                            return <Ionicons name="ios-add" size={22} />
                        }
                    }}
                />
                <Tab.Screen 
                    name="Profile" 
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: () => {
                            return <Ionicons name="ios-person" size={22} />
                        }
                    }} 
                />
            </Tab.Navigator>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
