import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import firebase from 'firebase'

const ProfileScreen = () => {
    return (
        <View>
            <Text>I am profile page</Text>
            <Button title="logout" onPress={() => firebase.auth().signOut()} />
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
