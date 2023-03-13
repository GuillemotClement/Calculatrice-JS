// MENU CHOIX CALCUL
// BOUCLE VERIF CHOIX USER
//CREATION DE LA VARIABLE CHOIX QUI CONTIENT LE CHOIX DE CALCUL DE L'USER
let choix, premierNombre, deuxiemeNombre;
        
//BOUCLE DO WHILE POUR VERIFIER QUE LA SAISIS DE L'USER EST CONFORME AUX ATTENTES
do {
    choix = prompt("Saisir l'opération souhaitée :\n\n1 - Addition\n2 - Soustraction\n3-Multiplication\n4 - Division");
}  while(choix != 1 && choix != 2 && choix != 3 && choix != 4);      
        
do {
    premierNombre = prompt("Saisir le premier nombre :");
} while(isNaN(premierNombre));

do {
    deuxiemeNombre = prompt("Saisir le deuxieme nombre :");
} while(isNaN(deuxiemeNombre));