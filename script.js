function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        income: document.getElementById("income").value
    };
    
    emailjs.send("service_6tchy5d", "service_6tchy5d", parms)
        .then(function(response) {
            alert("Email Sent Successfully!");
        }, function(error) {
            console.error("Failed to send email:", error);
            alert("Failed to send email. Please try again later.");
        });
}
