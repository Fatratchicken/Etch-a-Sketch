const container = document.querySelector(".container");
const delButton = document.getElementById("delete");
const ratioButton = document.getElementById("ratio");

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

    if (target.className == 'cell'){
        target.classList.add('hover');
    }
})

delButton.addEventListener('click', () => {
    const cells = document.querySelectorAll(".hover");
    cells.forEach(element => {
        element.classList.remove('hover');
    })

})

ratioButton.addEventListener('click', () => {
    const flexDivs = document.querySelectorAll(".flexDiv");
    flexDivs.forEach(element => {
        element.remove();
    })

    const newRatio = prompt("Enter Dimension: (e.g. 64)");
    createGrid(newRatio);

})

const ratio = prompt("Enter Dimension: (e.g. 64)");

createGrid(ratio);