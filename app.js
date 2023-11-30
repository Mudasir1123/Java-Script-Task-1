let name = prompt("Enter your name:");
  if (!name){
    alert ("Please fill Name")
  }

  let phoneNumber = prompt("Enter your Phone Number:");
  if (!phoneNumber){
    alert ("Please fill Phone number")
  }
  
  let email = prompt("Enter your Email:");
  if (!email){
    alert ("Please fill Email")
  }

  let password = prompt("Enter your password:");
  let confirmPassword = prompt("Confirm your password:");
if (password === confirmPassword) {
        alert("You are successfully registered!");
    } else {
       alert("Error: Passwords do not match.");
}