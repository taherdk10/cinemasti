function chngdate() {
			dj=new Date();
			j=dj.getDate();
			m=dj.getMonth()+1;
			a=dj.getFullYear();
			document.getElementById("liste").options[0].textContent= ((j+1)+"/"+m+"/"+a);
			document.getElementById("liste").options[1].textContent= ((j+3)+"/"+m+"/"+a);
			document.getElementById("liste").options[2].textContent= ((j+5)+"/"+m+"/"+a);
			document.getElementById("nb").value="1";
			nb=document.getElementById("listefilm").options[0].value;
			document.getElementById("prix").value=Number(nb)+" dt";
			}
function calcul () {
    nb=document.getElementById("nb").value;
    x=document.getElementById("listefilm").selectedIndex;
    p=document.getElementById("listefilm").options[x].value;
    p=Number(p)*Number(nb);
    document.getElementById("prix").value=p +"dt";
}
function acheter() {
    if(verifNom() == false) {
        alert("nom invalid");
        return false;
    } else if(verifPrenom() == false) {
        alert("prenom invalid");
        return false;
    } else if(verifTel() == false) {
        alert("numero invalid");
        return false;
    } else if(verifEmail() == false) {
        alert("email invalid");
        return false;
    }

    return true;
}

function verifNom() {
    nom = document.getElementById("nom").value;
    
    if(nom == "" || nom.length < 3 || alpha(nom) == false) {
        document.getElementById("nom-err").textContent = "nom invalid";
        return false;
    } else {
        document.getElementById("nom-err").textContent = "";
        return true;
    }
}

function verifPrenom() {
    prenom = document.getElementById("prenom").value;
    
    if(prenom == "" || prenom.length < 3 || alpha(prenom) == false) {
        document.getElementById("prenom-err").textContent = "prenom invalid";
        return false;
    } else {
        document.getElementById("prenom-err").textContent = "";
        return true;
    }
}

function verifTel() {
    num = document.getElementById("num").value;
    
    if(num == "" || num.length != 8 || isNaN(num) || (num[0] == "2" || num[0] == "5" || num[0] == "9") == false) {
        document.getElementById("tel-err").textContent = "numero de telephone invalid";
        return false;
    } else {
        document.getElementById("tel-err").textContent = "";
        return true;
    }
}

function verifEmail() {
    email = document.getElementById("email").value;
    
    if(email == "" || email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.indexOf("@") > email.indexOf(".")) {
        document.getElementById("email-err").textContent = "email invalid";
        return false;
    } else {
        document.getElementById("email-err").textContent = "";
        return true;
    }
}

function alpha(ch) {
    ch = ch.toLowerCase(); 
    ok = true; 
    i = 0; 
    while (i < ch.length && ok) { 
        if (ch[i] < "a" || ch[i] > "z") { 
            ok = false; 
        } 
        i++; 
    } 
    return ok; 
}
