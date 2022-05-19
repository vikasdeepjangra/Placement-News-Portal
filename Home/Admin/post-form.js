import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyCP8f5LRHjOeRKIiOg692KTwPtZYQ_Womc",
authDomain: "placement-news-portal-9ab86.firebaseapp.com",
databaseURL: "https://placement-news-portal-9ab86-default-rtdb.firebaseio.com",
projectId: "placement-news-portal-9ab86",
storageBucket: "placement-news-portal-9ab86.appspot.com",
messagingSenderId: "338105220281",
appId: "1:338105220281:web:248f7944fd7d9a6d8e6f68"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var contactFormDB = firebase.database().ref("new-post-form");   
var postBtn = document.getElementById('post-btn');
var postForm = document.getElementById('new-post-form');

document.getElementById('new-post-form').addEventListener("submit", submitForm);

function submitForm(e){

    var companyName = document.getElementById('company-name-label').value;
    var companyDescription = document.getElementById('job-description-label').value;

    console.log(companyName, companyDescription);

    e.preventDefault();
}