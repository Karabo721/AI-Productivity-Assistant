function showEmailGenerator() {

    let section = document.getElementById("emailGenerator");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}function generateEmail() {

    let purpose = document.getElementById("purpose").value;
    let tone = document.getElementById("tone").value;

    let email = "";

    if (tone === "Formal") {
        email = "Dear Sir/Madam,<br><br>I hope you are well. I am writing regarding " + purpose + ".<br><br>Kind regards.";
    }

    else if (tone === "Friendly") {
        email = "Hi there,<br><br>Hope you're doing great! I'm reaching out about " + purpose + ".<br><br>Best wishes.";
    }

    else {
        email = "Hello,<br><br>I would like to discuss " + purpose + " and explore possible opportunities.<br><br>Thank you.";
    }

    document.getElementById("output").innerHTML = email;
}
