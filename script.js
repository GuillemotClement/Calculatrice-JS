// MENU CHOIX CALCUL
// BOUCLE VERIF CHOIX USER
//CREATION DE LA VARIABLE CHOIX QUI CONTIENT LE CHOIX DE CALCUL DE L'USER
let choix, premierNombre, deuxiemeNombre, resultat, restart;

//FONCTION DES DIFFERENTS CALCUL
//Il est judicieux de placer les fonctions en début de code.
function addition(x, y){
    let result = x + y;
    return result;
    //return x + y;
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

//Boucle qui demande si l'user veut recommencer un calcul
do {
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

// COORECTION
// do {
//     var nb1 = Number(prompt("Saisir le premier nombre :"));
//     var nb2 = Number(prompt("Saisir le deuxieme nombre :"));
// } while(isNaN(nb1) || isNaN(nb2))



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
            if(deuxiemeNombre == 0){
                throw new Error("Impossible de diviser un nombre par zéro !")
            }
            resultat = division(premierNombre,deuxiemeNombre);
            break;
        // Permet de gérer une exception en cas de bug dans le switch
        default:
            throw new Error("Erreur rencontrée, veuillez contacter un administrateur.");
    }
    alert("Le résultat de l'opération est : " + resultat);
}
catch(error){
    alert(error);
}

restart = confirm("Souhaitez vous refaire un calcul ?");
} while(restart);

alert("Goodbye");