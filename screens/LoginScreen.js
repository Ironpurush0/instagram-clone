import React, {useState} from 'react'
import { StyleSheet, TextInput, View, Button, Text, SafeAreaView } from 'react-native'
import firebase from 'firebase'

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSignup = async () => {
        try {
            const res = await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log(res)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <TextInput placeholder="email" onChangeText={(text) => setEmail(text)} />
                <TextInput placeholder="password" secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
                <Button title="Login" onPress={onSignup} />
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
