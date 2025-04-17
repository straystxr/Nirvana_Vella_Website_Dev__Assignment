//list of variables to store the values of the input fields which are retrieved by their id through the html document
document.getElementById("submitButton").addEventListener("click", function(e) {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const department = document.getElementById("department").value;

    //a condition is set to check if the fields are empty or not by using the "" string
    //if the condition is true an alert will be shown to the user to fill in all fields and the form will not be submitted
    if (
      firstName === "" || lastName === "" || email === "" || phone === "" || subject === "" || message === "" || department === "1") {
        alert("Please fill in all fields.");
        e.preventDefault(); // Prevent form submission
        document.getElementsByTagName("field").style.backgroundColor = "red"; // Change field color to red doesn't work :<<
    }
});