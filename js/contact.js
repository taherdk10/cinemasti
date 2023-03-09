function alpha(ch) {
    ch = ch.toLowerCase(); 
    ok = true; 
    i = 0; 
    while (i < ch.length && ok) {
        if (ch[i]==" ") {ok= true;} 
        else if (ch[i] < "a" || ch[i] > "z") { 
            ok = false; 
        } 
        i++; 
    } 
    return ok; 
}
function verifEmail() {
    email = document.getElementById("mail").value;
    if(email == "" || email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.indexOf("@") > email.indexOf(".")) {
        document.getElementById("email-err").textContent = "email invalid";
        return false;
    } else {
        document.getElementById("email-err").textContent = "";
        return true;
    }
}
function verifNom() {
    nom = document.getElementById("nom").value;
    
    if(nom == "" || nom.length < 5 || alpha(nom) == false || nom.indexOf(" ") == -1) {
        document.getElementById("nom-err").textContent = "nom invalid";
        return false;
    } else {
        document.getElementById("nom-err").textContent = "";
        return true;
    }
}
function envoyer() {
    if(verifNom() == false) {
        alert("nom invalid");
        return false;
    } else if(verifEmail() == false) {
        alert("email invalid");
        return false;
    }

    return true;
}
