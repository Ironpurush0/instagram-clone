import React, {useState} from 'react'
import { StyleSheet, TextInput, View, Button, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import firebase from 'firebase'

const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState()

    const onSignup = async () => {
        try {
            const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
            firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
                name,
                email
            })
            setLoading(false)
            navigation.navigate('Home')
        } catch (error) {
            navigation.navigate('Register')
            console.log(error.message)
        }
    }

    if(loading){
        return <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <ActivityIndicator />
        </View>
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <TextInput placeholder="username" onChangeText={(text) => setName(text)} />
                <TextInput placeholder="email" onChangeText={(text) => setEmail(text)} />
                <TextInput placeholder="password" secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
                <Button title="Press" onPress={onSignup} />
                <Text>or</Text>
                <Button title="press" onPress={() => navigation.navigate('Login')} />
            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
