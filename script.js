function validation() {
  return (isNameEmpty() &&
  emailValidate() &&
  confirmEmailValidate() &&
  genderValidate() &&
  phonevalidate());
}

function isNameEmpty(){
  var fname = document.getElementById('fname').value;
  if(fname == "") {
    document.getElementById('fname-error-msg').innerHTML = "Please Enter First Name";
    return false;
  }
  else {
    document.getElementById('fname-error-msg').innerHTML = "";
  }
  return true;
}

function emailValidate() {
  var email = document.getElementById('email').value;
  var err = document.getElementById('email-err-msg');
  var atposition = email.indexOf("@");
  var dotposition = email.lastIndexOf(".");
  if (atposition<1 || dotposition<atposition+2 || dotposition+2 >= email.length) {
    err.innerHTML = "Enter a valid e-mail address";
    return false;
  }
  else {
    err.innerHTML = "";
  }
  return true;
}

function genderValidate() {
  var male = document.getElementById('male').checked;
  var female = document.getElementById('female').checked;
  if(male == false && female == false) {
    document.getElementById('gender-err-msg').innerHTML = "Select one category in gender";
    return false;
  }
  else {
    document.getElementById('gender-err-msg').innerHTML = "";
  }
  return true;
}

function phonevalidate() {
  var phone = document.getElementById('phnNo').value;
  var err = document.getElementById('phone-err-msg');
  if(phone == "") {
    err.innerHTML = "Enter Phone Number";
    return false;
  }
  else if(phone.length != 10) {
    err.innerHTML = "Enter 10 digit valid phone number";
    return false;
  }
  else if(isNaN(phone)) {
    err.innerHTML = "Enter only numeric value";
    return false;
  }
  else {
    err.innerHTML = "";
  }
  return true;
}

function confirmEmailValidate() {
  var email = document.getElementById('email').value;
  var confirmEmail = document.getElementById('cnfMail').value;
  var err = document.getElementById('confirm-email-err-msg');
  if(!(email === confirmEmail)) {
    err.innerHTML = "Confirm Email donot match with Email";
    return false;
  }
  else {
    err.innerHTML = "";
  }
  return true;
}

function ajaxRecord() {
  $.get("https://reqres.in/api/users/10", function(data, status){
      var row = $('<tr><td>' + data.data.id + '</td><td>' + data.data.first_name + '</td><td>' + data.data.last_name + '</td><td>' + data.data.avatar + '</td></tr>');
      $('#myTable').append(row);
  });
}
ajaxRecord();
