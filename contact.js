document.getElementById("submitButton").addEventListener("click", function(e) {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const department = document.getElementById("department").value;

    if (
      firstName === "" || lastName === "" || email === "" || phone === "" || subject === "" || message === "" || department === "1") {
        alert("Please fill in all fields.");
        e.preventDefault(); // Prevent form submission
        document.getElementsByTagName("field").style.backgroundColor = "red"; // Change field color to red doesn't work :<<
    }
});