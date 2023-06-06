
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import{ getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js"
  

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBU8vVmU0C3chBagi6tyfelVdynQhwCuPM",
    authDomain: "contactos-cd647.firebaseapp.com",
    projectId: "contactos-cd647",
    storageBucket: "contactos-cd647.appspot.com",
    messagingSenderId: "286767967122",
    appId: "1:286767967122:web:98a5f80c66c6a83f416f4b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);
  document.getElementById("submit").addEventListener('click', function(e){
    set(ref(db, 'user/' + document.getElementById("name").value),
    {
        nombreUsuario: document.getElementById("name").value,
        mailusuario: document.getElementById("email").value,
    })
    alert("Acceso permitido");
  })