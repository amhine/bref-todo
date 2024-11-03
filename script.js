

// Initialiser les compteurs
let taskCounter = {
    todo: 0,
    doing: 0,
    done: 0
};

function affichercnt() {
    let div = document.getElementById("heden");
    div.style.display = "block";
}

function updateTaskCounters () {
    document.getElementById("todo-conteur").textContent = taskCounter.todo;
    document.getElementById("doing-conteur").textContent = taskCounter.doing;
    document.getElementById("done-conteur").textContent = taskCounter.done;
}

document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let title = document.getElementById('title').value; // Stocage
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;
    let status = document.getElementById('status').value;
    let type = document.getElementById('type').value;

    if (title && description && date && status && type) { // Si tous les champs sont remplis
        
        let taskItem = document.createElement('div'); // Créer un élément div dans taskItem
        taskItem.className = 'col div bg-white'; // Classe du div
        taskItem.innerHTML = `
            <div class="p-3 mt-3 contenu">
                <h3>${title}</h3>
                <p>Description: ${description}</p>
                <p>Date: ${date}</p>
                <div>
                    <button type="button" class="btn btn-success mt-2">Edit</button>
                    <button type="button" class="btn btn-warning mt-2 delet-contenu">Delete</button>
                </div>
            </div>
        `; // Remplissage des éléments

        // Ajouter une tâche selon leur statut 
        document.getElementById(status).appendChild(taskItem);
        
        // Incrémentez le compteur
        taskCounter[status]++;
        updateTaskCounters(); // Met à jour les compteurs
        

        document.getElementById('task-form').reset();

        let contenuDiv = taskItem.querySelector('.contenu'); // Sélection de l'élément contenu  

        if (type === 'P1') {
            contenuDiv.style.border = "2px solid red";    
        } else if (type === 'P2') {
            contenuDiv.style.border = "2px solid orange"; 
        } else if (type === 'P3') {
            contenuDiv.style.border = "2px solid green";  
        }

        let deleteButton = contenuDiv.querySelector('.delet-contenu'); // Sélection delete-contenu pour suppression 
        deleteButton.addEventListener('click', function() {
            taskItem.remove(); 
            taskCounter[status]--; // Décrémentez le compteur
            updateTaskCounters(); // Met à jour les compteurs après la suppression
        });
        
    } else {
        alert("Veuillez remplir tous les champs");
    }
});

document.getElementById('exit-button').addEventListener('click', function() {
    document.getElementById('task-form').style.visibility = 'hidden';
});

document.getElementById('add-button').addEventListener('click', function() {
    document.getElementById('task-form').style.visibility = 'visible'; 
});
