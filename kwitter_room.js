// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBxhN5whshg6N9CdcB9BvsLvR1gWsGYUqw",
      authDomain: "class-test-81d6d.firebaseapp.com",
      databaseURL: "https://class-test-81d6d.firebaseio.com",
      projectId: "class-test-81d6d",
      storageBucket: "class-test-81d6d.appspot.com",
      messagingSenderId: "76465595814",
      appId: "1:76465595814:web:50205ecd3abcde4f215b67"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name+"!"; 

   function addRoom()
   {
         room_name = document.getElementById("room_name").value;

         firebase.database().ref("/").child(room_name).update({
               purpose : "adding room name"
         });

         localStorage.setItem("room_name", room_name);

         window.location = "kwitter_page.html";
   }

   function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     console.log("Room Name-"+ Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML +=row;
     });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
       window.location="kwitter_ppage.html";
}

    