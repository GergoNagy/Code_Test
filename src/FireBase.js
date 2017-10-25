import Firebase from 'firebase'

    var config = {
        apiKey: "AIzaSyDxZAfU6OuXlmu309SX5LM9vSk3joTj2Fo",
        authDomain: "beezer-test-66f56.firebaseapp.com",
        databaseURL: "https://beezer-test-66f56.firebaseio.com",
        projectId: "beezer-test-66f56",
        storageBucket: "beezer-test-66f56.appspot.com",
        messagingSenderId: "461730474584"
    };

    var firebase = Firebase.initializeApp(config)

export default firebase