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
    
    user_name = localStorage.getItem("username");
    room_name = localStorage.getItem("room_name");
    function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,     
            like:0
      });
      document.getElementById("msg").value= "";

}
function getData() { firebase.database().ref("/" + room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'> </h4>";
      message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
      like_button = "<button class = 'btn btn-info' id = "+firebase_message_id+" value ="+like+"onclick = 'updateLike(this.id)'>";
      span_with_tag = "<span class = 'glyphicon glyphicon-thums-up'>Like: " + like + "</span></button><h4>";
      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
function updateLike(message_id) {
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}