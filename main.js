const dinos = [
    {id:  'dino1',
    name: "Bob",
    type: "T Rex",
    age: 22,
    ownder: "michele",
    adventures: [],
    health: 99,
    imageUrl:"data:image/jpeg;base64,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" 
    },

{
    id: 'dino2',
    name: 'Susan',
    type: 'Stegasaurus',
    age: 55,
    owner: 'Luke',
    adventures: [],
    health: 50,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
  },
  {
    id: 'dino3',
    name: 'Steve',
    type: 'Velociraptor',
    age: 1,
    owner: 'Mary',
    adventures: [],
    health: 20,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
  },
];

const closeSingleViewEvent = () => {
printToDom('single-view', '');
printDinos(dinos);

};


const viewSingleDino = (e) => {
    const dinoId = e.target.closest('.card').id;
    const selectedDino = dinos.find((currentDino) => dinoId === currentDino.id);
    console.log('selectedDino',selectedDino);
    let domString = "";
    domString += '<button id="close-single-view" class="btn btn-outline-dark"><i class="fas fa-window-close"></i></button>';
    domString += '<div class = "container">';
    domString += '<div class = "row">';
    domString += '<div class = "col-6">';
    domString += `<img class = "img-fluid" src = "${selectedDino.imageUrl}"alt = ""/>`;
    domString += '</div>';
    domString +=  '<div class = "col-6">';
    domString +=  `<h2>${selectedDino.name}</h2>`;
    domString += `<p> Type: ${selectedDino.type}</p>`;
    domString += `<p> Age: ${selectedDino.age}</p>`
    domString +=`<p> Owner: ${selectedDino.owner}</p>`
    domString += '<div class="progress">';
    domString += `<div class="progress-bar bg-danger" role="progressbar" style="width: ${selectedDino.health}%" aria-valuenow="${selectedDino.health}" aria-valuemin="0" aria-valuemax="100"></div>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    
    printToDom('kennel','');
    printToDom('single-view',domString);
    document.getElementById('close-single-view').addEventListener('click',closeSingleViewEvent);
};


const singleDinoAddEvents=()=>{
    const dinoViewButtons = document.getElementsByClassName('single-dino');
    for (let i = 0; i < dinoViewButtons.length; i++){
        dinoViewButtons[i].addEventListener('click', viewSingleDino);
    };
}

const dinoHealth = (e) => {
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((p) => p.id === dinoId);
    if(dinos[dinoPosition].health  < 100){
 dinos[dinoPosition].health += 1;
 printDinos(dinos);

}
     };


     const feedMe = (e) => {
        const dinoId = e.target.closest('.card').id;
        const dinoPosition = dinos.findIndex((p) => p.id === dinoId);
        if(dinos[dinoPosition].health < 90) {
          dinos[dinoPosition].health += 10;
          printDinos(dinos);
        } else if (dinos[dinoPosition].health > 89 && dinos[dinoPosition].health < 100) {
          dinos[dinoPosition].health = 100;
          printDinos(dinos);
        }
      }


     const feedEvents = () => {
         const dinoFeedButtons = document.getElementsByClassName('feed-button');
         for(let i = 0; i < dinoFeedButtons.length; i++){
             dinoFeedButtons[i].addEventListener('click', feedMe);
         }
     };

     
const petEvents=()=>{
    const dinoPetButtons = document.getElementsByClassName('dino-photo');
    for (let i = 0; i < dinoPetButtons.length; i++){
        dinoPetButtons[i].addEventListener('mouseleave', dinoHealth);
    };

};

const deleteDinoEvent = (e) => {
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((p) => p.id === dinoId);
    dinos.splice(dinoPosition,1);
printDinos(dinos);


};


const deleteEvents=()=>{
    const dinoDeleteButtons = document.getElementsByClassName('delete-dino');
    for (let i = 0; i < dinoDeleteButtons.length; i++){
        dinoDeleteButtons[i].addEventListener('click', deleteDinoEvent);
    }

};




const printToDom = (divId,textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  }
  const printDinos = (dinoArray) => {
    let domString = '';
    for (let i =0; i < dinoArray.length; i++){
      domString += '<div class="col-4">';
      domString += `<div id="${dinoArray[i].id}" class="card">`;
      domString += `<img class="card-img-top dino-photo" src="${dinoArray[i].imageUrl}" alt="Card image cap">`;
      domString += '<div class="card-body">';
      domString += `  <h5 class="card-title">${dinoArray[i].name}</h5>`;
      domString += '<div class="progress">';
      domString += `<div class="progress-bar bg-danger" role="progressbar" style="width: ${dinoArray[i].health}%" aria-valuenow="${dinoArray[i].health}" aria-valuemin="0" aria-valuemax="100"></div>`;
      domString += '</div>';
      domString += '<button class="btn btn-secondary feed-button"><i class="fas fa-bone"></i></button>';
      domString += '<button class="btn btn-secondary single-dino"><i class="fas fa-eye"></i></button>';
      domString += '<button class="btn btn-danger delete-dino"><i class="fas fa-trash"></i></button>';
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
    }
    printToDom('kennel', domString);
    singleDinoAddEvents();
    petEvents();
    deleteEvents();
    feedEvents();
  };



const newDino = (e) => {
e.preventDefault();

const brandNewDino = {

id: `dino${dinos.length + 1}`,
name: document.getElementById('dino-name').value,
type: document.getElementById('dino-type').value,
age: document.getElementById('dino-age').value,
owner: document.getElementById('dino-owner').value,
adventures: [],
health: 100,
imageUrl: document.getElementById('dino-image').value


}

dinos.push(brandNewDino);
document.getElementById('new-dino-form').reset();
console.log("hi from newDino",dinos);
document.getElementById('collapseOne').classList.remove('show');
printDinos(dinos);
};

const init = () => {
document.getElementById('submit-new-dino').addEventListener('click',newDino)

printDinos(dinos);

};



init();