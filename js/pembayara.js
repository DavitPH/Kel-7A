document.getElementById("payment-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Retrieve the input field values
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var cardNumber = document.getElementById("card-number").value;
    var expDate = document.getElementById("exp-date").value;
    var cvv = document.getElementById("cvv").value;

    // Perform validation or additional processing here

    // Display an alert with the payment details
    var message = "Name: " + name + "\nAddress: " + address + "\nCard Number: " + cardNumber +
      "\nExpiration Date: " + expDate + "\nCVV: " + cvv;
    alert("Payment details:\n\n" + message);

    // Reset the form fields
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("card-number").value = "";
    document.getElementById("exp-date").value = "";
    document.getElementById("cvv").value = "";

    // Check if browser supports notifications
    if (Notification.permission === "granted") {
      // Create a new notification
      new Notification("Payment Confirmation", {
        body: "Thank you for your payment!",
        icon: "path/to/notification-icon.png" // Replace with the path to your notification icon
      });
    } else if (Notification.permission !== "denied") {
      // Request permission to show notifications
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          // Create a new notification
          new Notification("Payment Confirmation", {
            body: "Thank you for your payment!",
            icon: "path/to/notification-icon.png" // Replace with the path to your notification icon
          });
        }
      });
    }
  });