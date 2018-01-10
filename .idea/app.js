(function()
{

    var config = {
        apiKey: "AIzaSyAIOqcdlu_4gL2kPf-CgyVn01WFkd6cs7w",
        authDomain: "messaging-142a2.firebaseapp.com",
        databaseURL: "https://messaging-142a2.firebaseio.com",
        projectId: "messaging-142a2",
        storageBucket: "messaging-142a2.appspot.com",
        messagingSenderId: "472528376027"
    };
    firebase.initializeApp(config);

    const txtEmail=document.getElementById('txtEmail');
    const txtPassword=document.getElementById('txtPassword');
    const btnLogin=document.getElementById('btnLogin');
    const btnSignUp=document.getElementById('btnSignUp');
    const btnLogout=document.getElementById('btnLogout');


}());