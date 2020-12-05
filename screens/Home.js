import React from 'react'
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Button } from 'react-native'
import {useSelector} from 'react-redux'


const Home = ({navigation}) => {
    const selectedData = useSelector(state => state.userState.currentUser)
    
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <Text>I am screen</Text>
                <Text>{selectedData.name} is logged in.</Text>
                <Button title="press" onPress={() => navigation.navigate('Register')} />
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
