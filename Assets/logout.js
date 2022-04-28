        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
        import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
        import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyCP8f5LRHjOeRKIiOg692KTwPtZYQ_Womc",
          authDomain: "placement-news-portal-9ab86.firebaseapp.com",
          databaseURL: "https://placement-news-portal-9ab86-default-rtdb.firebaseio.com",
          projectId: "placement-news-portal-9ab86",
          storageBucket: "placement-news-portal-9ab86.appspot.com",
          messagingSenderId: "338105220281",
          appId: "1:338105220281:web:248f7944fd7d9a6d8e6f68"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);
        const auth = getAuth();

        const logoutBtn = document.getElementById("logout-btn");

        logoutBtn.addEventListener('click',(e)=>{

        const auth = getAuth();
        signOut(auth).then(() => {
                // Sign-out successful.
                window.location.href = "/whats-new.html";
        }).catch((error) => {
                // An error happened.
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
        });
    