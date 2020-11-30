import React from 'react'
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native'

const Home = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
                <Text>I am screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
