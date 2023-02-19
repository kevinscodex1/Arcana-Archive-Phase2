$(document).ready(function () {
    let remember = localStorage.getItem("remember");
    if (remember) {
      // Redirect to the home page if the user was remembered
      window.location.href = "index.html";
    }
  
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
        window.location.href = "user.html";
      } else {
        // Show an error message if the email and password don't match
        alert("Invalid email or password");
      }
    });
  });