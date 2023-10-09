// Function to open tabs
function openTab(tabName) {
    var tabcontent = document.getElementsByClassName('tabcontent');
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';
}


function validatePassword() {
    var enteredPassword = document.getElementById("password").value;
    var expectedPassword = "seujven"; // Replace with your desired password

    if (enteredPassword === expectedPassword) {
        window.location.href = "../protected.html"; // Redirect to protected content
    } else {
        document.getElementById("error-message").innerText = "Incorrect password. Please try again.";
    }
}





