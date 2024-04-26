        // Fonction pour basculer entre les colonnes
        function toggleColumns(activeColumn, inactiveColumn) {
            activeColumn.classList.remove('hidden');
            inactiveColumn.classList.add('hidden');
        }

        // Récupération des éléments de colonnes
        const biographyColumn = document.getElementById('biography-column');
        const familyColumn = document.getElementById('family-column');

        // Écouteurs d'événements pour les clics sur les boutons
        biographyColumn.addEventListener('click', function() {
            toggleColumns(biographyColumn, familyColumn);
        });

        familyColumn.addEventListener('click', function() {
            toggleColumns(familyColumn, biographyColumn);
        });