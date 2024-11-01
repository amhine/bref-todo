function affichercnt() {
    let div = document.getElementById("heden");
    div.style.display = "block";
}


document.getElementById('task-form').addEventListener('submit',function(e){
    e.preventDefault();

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;
    let status = document.getElementById('status').value;
    let type= document.getElementById('type').value;
    
    if (title && description && date && status && type) {
    let taskItem = `<div class="col div bg-white">
                        <h3> ${title}</h3>
                        <p> Description :${description}</p>
                        <p> Date :${date}</p>

                        <div >
                            <button class="btn btn-success  mt-2">Edit</button>
                            <button  class=" btn btn-warning mt-2" >Delet</button>    
                        </div>
                    </div> `;

   
    if (status === 'todo') {
        document.getElementById('todo').innerHTML += taskItem;
    } else if (status === 'doing') {
        document.getElementById('doing').innerHTML += taskItem;
    } else if (status === 'done') {
        document.getElementById('done').innerHTML += taskItem;
    }

    document.getElementById('task-form').reset();
    

    
}else{
    alert("remplire les champt");
}
})


document.getElementById('exit-button').addEventListener('click', function() {
    document.getElementById('task-form').style.display = 'none';
});




