import Firebase from 'firebase'

    var config = {
        apiKey: "YOUR API KEY",
        authDomain: "YOUR DOMAIN",
        databaseURL:"YOUR URL
    };

    var firebase = Firebase.initializeApp(config)

export default firebase
