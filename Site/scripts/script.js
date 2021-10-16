// Variables
const menu = document.querySelector('#menu');
const hamburgers = document.querySelectorAll('#hamburger');
const navHeader = document.querySelector('header ul');
const listesUtilite = document.querySelectorAll('.section-utilite img');

// Événements
menu.addEventListener('click', activeHamburger);
listeUtilite();

// Fonctions
function activeHamburger()
{
    navHeader.classList.toggle('affiche');

    hamburgers.forEach(hamburger => 
    {
        hamburger.classList.toggle('active');
    });
}

function listeUtilite()
{
    listesUtilite[0].src = `../ressources/services/marketing-visibilite.png`;
    listesUtilite[1].src = `../ressources/services/brochure.png`;
    listesUtilite[2].src = `../ressources/services/plateformeDeServices.png`;
    listesUtilite[3].src = `../ressources/services/automatisation.png`;
    listesUtilite[4].src = `../ressources/services/donnees.png`;
    listesUtilite[5].src = `../ressources/services/relation-client.png`;
    listesUtilite[6].src = `../ressources/services/image-entreprise.png`;
    listesUtilite[7].src = `../ressources/services/authenticite.png`;
    listesUtilite[8].src = `../ressources/services/rentabilite.png`;
    listesUtilite[9].src = `../ressources/services/objectif.png`;
}

