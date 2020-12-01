import React, {useState} from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'

const RegisterScreen = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSignup = () => {}

    return (
        <View style={styles.container}>
            <TextInput value={name} placeholder="username" onChange={(name) => setName(name)} />
            <TextInput value={email} placeholder="email" onChange={(email) => setEmail(email)} />
            <TextInput value={password} placeholder="password" secureTextEntry={true} onChange={(password) => setPassword(password)} />
            <Button title="Press" onPress={() => onSignup} />
        </View>
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
