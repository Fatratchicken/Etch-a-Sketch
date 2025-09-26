const container = document.querySelector(".container");

function createGrid(ratio){
    for(let i=0; i<ratio; i++){
        const flexDiv = document.createElement("div");
        flexDiv.classList.add("flexDiv");

        container.appendChild(flexDiv);

        for (let j=0; j<ratio; j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");

            flexDiv.appendChild(cell);
        }
    }

}

container.addEventListener('mouseover', (event) => {
    const target = event.target;
    console.log(1);

    console.log(target.className);

    if (target.className == 'cell'){
        target.classList.add('hover');
    }


})

createGrid(100);