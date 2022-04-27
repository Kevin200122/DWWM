// let compteur = 0;

function chargeInfo() {
    fetch("../absence.json")
      .then((response) => {
        return response.json();//pour récupérer le fichier Json
      })
      .then((absence) => {
        createDivs(absence);
        console.log(absence);
      });
}
function createDivs(absence){
const preview = document.getElementsByClassName('preview') [0];
// preview.innerHTML="";

const Toptitle = document.createElement('div');
Toptitle.getAttribute("id", "title");
Toptitle.innerHTML = '<h1>'+ absence.topTitle + '</h1>';

preview.appendChild(Toptitle);

const motifListAbsence = document.createElement("div");
motifListAbsence.setAttribute("class", "contenu");
motifListAbsence.setAttribute("id", "motifList");


var listMotif = absence.members;
for (var x = 0; x < listMotif.length;x++) {console.log("on est la");
  var membersListeElement = document.createElement("div");
  membersListeElement.setAttribute("id", "option");
  membersListeElement.innerHTML = '<h2>'+ listMotif[x].name+'</h2>'+ 
  '<h3>'+ listMotif[x].title + '</h3>';

  let listOptions = listMotif[x].options;
  for (var y = 0; y < listOptions.length; y++){
    var listOptionsMotif = document.createElement("div");
    listOptionsMotif.setAttribute("class","options");
    listOptionsMotif.innerHTML =
    ''
  }


motifListAbsence.appendChild(membersListeElement);
}
preview.appendChild(motifListAbsence);
}
chargeInfo()