import React from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'

import firebase from 'firebase'


const Feed = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text>I am feed</Text>
                <Button title="logout" onPress={() => firebase.auth().signOut()} />
            </View>
        </SafeAreaView>
    )
}

export default Feed

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
