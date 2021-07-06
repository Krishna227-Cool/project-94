  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBFEUF7qKUelR06z0pD-zHhimPEgAk2pkw",
    authDomain: "kwitterfirebasecool.firebaseapp.com",
    databaseURL: "https://kwitterfirebasecool-default-rtdb.firebaseio.com",
    projectId: "kwitterfirebasecool",
    storageBucket: "kwitterfirebasecool.appspot.com",
    messagingSenderId: "985356402528",
    appId: "1:985356402528:web:e0f6d773adf68cf5d36805",
    measurementId: "G-4D0TDN6JS4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class = 'room_name' id" + Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names +"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addroom() {
  room_name = document.getElementById("roomname").value;


  firebase.database().ref("/").child(room_name).update({
      purpose: "Adding room name"
  });

  localStorage.setItem("room_name", room_name)


  window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}