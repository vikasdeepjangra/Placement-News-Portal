function ShowPostForm(){
    var postForm = document.getElementById("new-post-form-area");
    postForm.classList.add("visible");
};

function HidePostForm(){
    var postForm = document.getElementById("new-post-form-area");
    postForm.classList.add("hidden");
    postForm.classList.remove("visible");
};

var postBtn = document.getElementById('post-btn');
var postForm = document.getElementById('new-post-form');
var companyName = document.getElementById('company-name-label');
var companyDescription = document.getElementById('job-description-label');
const db = firebase.firestore();