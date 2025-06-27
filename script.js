
document.addEventListener('DOMContentLoaded', () => {

    const skillsData = {
        'HTML5': "HTML5 (HyperText Markup Language 5) est le langage de balisage pour structurer le contenu des pages web. Il introduit de nouvelles balises sémantiques comme <header>, <footer>, <section>.",
        'CSS3': "CSS3 (Cascading Style Sheets 3) est utilisé pour mettre en forme et styliser le contenu HTML. Il permet de gérer les couleurs, les polices, les mises en page et les animations.",
        'JavaScript': "JavaScript est un langage de programmation qui rend les pages web interactives. Il permet de manipuler le contenu, de réagir aux actions de l'utilisateur et de communiquer avec des serveurs.",
        'Responsive Design': "Le Responsive Design est une approche de conception web qui vise à créer des sites qui s'adaptent parfaitement à la taille de l'écran de l'utilisateur (mobile, tablette, ordinateur).",
        'Git': "Git est un système de contrôle de version distribué. Il est essentiel pour suivre les modifications du code, collaborer en équipe et gérer l'historique des projets.",
        'Wordpress': "WordPress est un système de gestion de contenu (CMS) qui permet de créer et de gérer facilement des sites web et des blogs, sans nécessiter de connaissances approfondies en codage."
    };

    const skillsButtonsContainer = document.getElementById('skills-buttons');
    const skillDescriptionElement = document.querySelector('#skill-description-block p');
    const skillsCounterList = document.getElementById('skills-counter-list');


    let clickCounts = JSON.parse(localStorage.getItem('skillClickCounts')) || {};

   

    /**
     * Met à jour l'affichage du compteur pour une compétence spécifique.
     * @param {string} skillName - Le nom de la compétence.
     */
    const updateCounterDisplay = (skillName) => {
        const counterElement = document.getElementById(`count-${skillName}`);
        if (counterElement) {
         
            counterElement.textContent = `${skillName} (${clickCounts[skillName] || 0} clic(s))`;
        }
    };

    /**
     * Gère l'événement de clic sur un bouton de compétence.
     * @param {Event} event 
     */
    const handleSkillClick = (event) => {
        const skillName = event.target.dataset.skill; // Récupère le nom de la compétence depuis l'attribut data-skill.

        if (skillName) {
            // 1. Met à jour la description.
            skillDescriptionElement.textContent = skillsData[skillName];

            // 2. Incrémente le compteur pour cette compétence.
            clickCounts[skillName] = (clickCounts[skillName] || 0) + 1;

            // 3. Met à jour l'affichage du compteur.
            updateCounterDisplay(skillName);

            
            localStorage.setItem('skillClickCounts', JSON.stringify(clickCounts));
        }
    };


    Object.keys(skillsData).forEach(skillName => {
        // Initialise le compteur à 0 si la compétence n'existe pas encore dans clickCounts.
        if (!clickCounts[skillName]) {
            clickCounts[skillName] = 0;
        }

        // Crée le bouton pour la compétence.
        const button = document.createElement('button');
        button.textContent = skillName;
        button.dataset.skill = skillName; // Ajoute un attribut data-* pour identifier le bouton.
        skillsButtonsContainer.appendChild(button);

        // Crée l'élément de liste pour le compteur.
        const listItem = document.createElement('li');
        listItem.id = `count-${skillName}`; // Donne un ID unique pour le retrouver plus tard.
        skillsCounterList.appendChild(listItem);

        // Met à jour l'affichage initial du compteur.
        updateCounterDisplay(skillName);
    });

    // Ajoute un seul écouteur d'événements sur le conteneur des boutons (délégation d'événements).
    skillsButtonsContainer.addEventListener('click', handleSkillClick);

});