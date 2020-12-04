import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUser, logoutUser} from '../store/actions/index'

const MainScreen = () => {
    const dispatch = useDispatch()
    const selectedData = useSelector(state => state.userState.currentUser)

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    return (
        <View style={styles.container}>
            <Text>I AM MAIN SCREEN</Text>
            <Text>My emailId is: {selectedData.email}</Text>
            <Button title="logout" onPress={() => {
                dispatch(logoutUser())
            }} />
        </View>
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
