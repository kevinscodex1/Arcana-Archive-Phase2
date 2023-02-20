$(document).ready(function () {
    let remember = localStorage.getItem("remember");
    $("#login_form").submit(function (x) {
      // Prevent the form from submitting and refreshing the page
      x.preventDefault();
  
      // Get the values entered in the email and password fields
      const email = $("#email").val();
      const password = $("#password").val();
      const username = $("#email").val();
  
      // Check if the email and password match the criteria for a valid account
      if (
        (email == "blackstar01@samplemail.com" || username == "blackstar01") &&
        password == "stAcked*123"
      ) {
        // Check if the user wants to be remembered
        const rememberMe = $("#remember_me").prop("checked");
        if (rememberMe) {
          // Store the remember me flag in localStorage
          localStorage.setItem("remember", true);
        }
  
        // Redirect to the user page
        window.location.href = "user-premium.html";
      } else if(
        (email == "admin123@gmail.com" || username == "admin123") &&
        password == "Admin*123"
      ) { window.location.href = "user-basic.html"; } else {
        // Show an error message if the email and password don't match
        alert("Invalid input");
      }
    });
  });