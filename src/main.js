function login() {
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  document.getElementById('login').style.display = 'block';
  document.getElementById('signup').style.display = 'none';
  document.getElementById('FP').style.display = 'none';

}

function FP() {
  document.getElementById('FP').style.display = 'block';
  document.getElementById('login').style.display = 'none';
  document.getElementById('signup').style.display = 'none';
}

function signup() {
  document.getElementById('signup').style.display = 'block';
  document.getElementById('FP').style.display = 'none';
  document.getElementById('login').style.display = 'none';
}

function closeWhiteBox() {
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  document.getElementById('login').style.display = 'none';
  document.getElementById('FP').style.display = 'none';
  document.getElementById('signup').style.display = 'none';
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}