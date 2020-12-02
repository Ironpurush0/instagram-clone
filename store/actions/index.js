import firebase from 'firebase'

const USER_STATE_CHANGE = 'USER_STATE_CHANGE'

export function fetchUser(){
    return((dispatch) => {
        await firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then(snapshot => {
            if(snapshot.exists){
                dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
            }
        })
        .catch(error => {
            console.log(error.message)
        })
    })
}