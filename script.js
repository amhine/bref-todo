function affichercnt() {
    let div = document.getElementById("heden");
    div.style.display = "block";
}




document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;//stocage
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;
    let status = document.getElementById('status').value;
    let type = document.getElementById('type').value;

    if (title && description && date && status && type) {//si le champs et tous remplir
        
        let taskItem = document.createElement('div');//cree un element div dans taskitem
        taskItem.className = 'col div bg-white';//class de div
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
        `;//remplisage des elemnts

        
        document.getElementById(status).appendChild(taskItem);//on ajoute un enfents de taskitem selon leur status 

        
        document.getElementById('task-form').reset();

        
        let contenuDiv = taskItem.querySelector('.contenu');//selection de l element contenu  

        
        if (type === 'P1') {
            contenuDiv.style.border = "2px solid red";    
        } else if (type === 'P2') {
            contenuDiv.style.border = "2px solid orange"; 
        } else if (type === 'P3') {
            contenuDiv.style.border = "2px solid green";  
        }

        
        let deleteButton = contenuDiv.querySelector('.delet-contenu');//selection delet-contenu pour suprission 
        deleteButton.addEventListener('click', function() {
            taskItem.remove(); 
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
