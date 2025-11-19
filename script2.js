document.getElementById("whatsappForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let product = document.getElementById("product").value;
    let quantity = document.getElementById("quantity").value;
    let msg = document.getElementById("message").value;

    let rawMessage =
        "New Inquiry:\n" +
        "Name: " + name + "\n" +
        "City: " + city + "\n" +
        "Phone: " + phone + "\n" +
        "Email: " + email + "\n" +
        "Address: " + address + "\n" +
        "Product: " + product + "\n" +
        "Quantity: " + quantity + "\n" +
        "Message: " + msg;

    let encoded = encodeURIComponent(rawMessage);

    // NEW URL FORMAT (works on devices where wa.me fails)
    let url = "https://api.whatsapp.com/send?phone=9779914647&text=" + encoded;

    window.location.href = url;
});
