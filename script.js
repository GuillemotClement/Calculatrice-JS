// MENU CHOIX CALCUL
// BOUCLE VERIF CHOIX USER
//CREATION DE LA VARIABLE CHOIX QUI CONTIENT LE CHOIX DE CALCUL DE L'USER
let choix, premierNombre, deuxiemeNombre, resultat;
        
//BOUCLE DO WHILE POUR VERIFIER QUE LA SAISIS DE L'USER EST CONFORME AUX ATTENTES
do {
    choix = Number(prompt("Saisir l'opération souhaitée :\n\n1 - Addition\n2 - Soustraction\n3-Multiplication\n4 - Division"));
    // choix = Number(choix);
}  while(choix != 1 && choix != 2 && choix != 3 && choix != 4);      
        
//SAISIS DES NOMBRE A CALCULER ET VERIFICATION DES SAISIS
do {
    premierNombre = Number(prompt("Saisir le premier nombre :"));
    // premierNombre = Number(premierNombre);
} while(isNaN(premierNombre));

do {
    deuxiemeNombre = Number(prompt("Saisir le deuxieme nombre :"));
    // deuxiemeNombre = Number(deuxiemeNombre);
} while(isNaN(deuxiemeNombre));

//FONCTION DES DIFFERENTS CALCUL
function addition(x, y){
    let result = x + y;
    return result;
}

function soustraction(x,y){
    let result = x - y;
    return result;
}

function multiplication(x,y){
    let result = x * y;
    return result;
}

function division(x,y){
    let result = x / y;
    return result;
}

//Appel de la fonction de calcul selon le choix de l'utilisateur
try{
    switch(choix){
        case 1:
            resultat = addition(premierNombre, deuxiemeNombre);
            break;
        case 2:
            resultat = soustraction(premierNombre,deuxiemeNombre);
            break;
        case 3:
            resultat = multiplication(premierNombre,deuxiemeNombre);
            break;
        case 4:
            //Un try qui permet de gérer le problème de la division par zero
            try{
                if(deuxiemeNombre == 0){
                    throw new Error("Impossible de diviser un nombre par zéro !")
                }
            }
            catch(error){
                alert(error);
            }
            resultat = division(premierNombre,deuxiemeNombre);
            break;
        // Permet de gérer une exception en cas de bug dans le switch
        default:
            throw new Error("Erreur rencontrée, veuillez contacter un administrateur.");
    }
}
catch(error){
    alert(error);
}



//Affichage du résultat du calcul
alert("Le résultat de l'opération est : " + resultat);