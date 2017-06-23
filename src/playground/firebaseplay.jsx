import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD8FvWcELNzCPmee_wb_hSwvpRG9UdMgsM",
    authDomain: "reacttodos-2686b.firebaseapp.com",
    databaseURL: "https://reacttodos-2686b.firebaseio.com",
    projectId: "reacttodos-2686b",
    storageBucket: "reacttodos-2686b.appspot.com",
    messagingSenderId: "26030484217"
  };

  firebase.initializeApp(config);
  
   var data ={
      app:{
          name: 'Todo App', 
          version: '1.0.0'
      },
      isRunning: true,
      user: {
          
      }
  };

  var db = firebase.database().ref();

  db.set(data);
  db.child('user').set({
      'emails':100,
      name: 'Mudasar',
      age: 32
    }
    );
    db.child('user').child('hobbies').set(
        [{'name':'reading0'}, {'name': 'cooking1'}, {'name': 'cooking2'}, {'name': 'cooking3'}, {'name': 'cooking4'}]
    );

    db.update({
        isRunning: false
    });

    db.child('app').update({
        name: 'Todo Application'
    });

    db.child('user/hobbies/0').remove();

    db.child('user/hobbies/1').update({
        name: null
    });


    db.child('user').once('value').then((data) => {
        console.log(data.val());
    });

    db.child('user').on('value', (data) => {
        console.log('printing with on', data.val());
    });