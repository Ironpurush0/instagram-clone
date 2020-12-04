import firebase from 'firebase'
// require('firebase/firestore')

const USER_STATE_CHANGE = 'USER_STATE_CHANGE'
const LOGOUT_USER = 'LOGOUT_USER'

export function fetchUser(){
    return((dispatch) => {
        firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists){
                console.log(snapshot.data())
                dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
            }
        })
        .catch(error => {
            console.log(error.message)
        })
    })
}
