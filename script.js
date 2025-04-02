function sendToWhatsapp(){
    let number = "+918779472177"; 
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let url = "https://wa.me/" + number + "?text="
    + "Name: " + name + "%0a"
    + "Email: " + email + "%0a"
    + "Message: " + message+ "%0a50a";

    window.open(url, "_blank").focus();

}