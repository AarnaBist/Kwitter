
// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCp0IQpucTyjRKfmEpLxmqAC5S_Z9bv1iA",
      authDomain: "kwitter-28b9f.firebaseapp.com",
      databaseURL: "https://kwitter-28b9f-default-rtdb.firebaseio.com",
      projectId: "kwitter-28b9f",
      storageBucket: "kwitter-28b9f.appspot.com",
      messagingSenderId: "1001695662299",
      appId: "1:1001695662299:web:a98b13f7c7f5733d5e3cfe"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML= "Welcome " + user_name;  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomNmae(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name" 
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomNmae(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "index.html";
}