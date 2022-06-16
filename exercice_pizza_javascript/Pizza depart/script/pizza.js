function ChargelesInfosjson() {
  /*Allons chercher notre fichier Json*/
  fetch('../json/pizza.json')
    .then(response => {
      return response.json();
    })
    .then(jsondata => {
      console.log(jsondata);
      CreateDivs(jsondata);
    });//Pour récupérer notre fichier Json
}

function CreateDivs(data) {
  let preview = document.getElementsByClassName("preview")[0];

  let pizzeriaName = document.createElement("div");
  pizzeriaName.innerHTML = data.nom

  let pizzeriaSlogan = document.createElement("div");
  pizzeriaSlogan.innerHTML = data.Slogan;

  // let pizzaImage = document.createElement("img");
  // pizzaImage.src = data.Image;

  // let pizzaIngredient = document.createElement("div");
  // pizzaIngredient.innerHTML = data.Ingredient

  preview.appendChild(pizzeriaName);
  preview.appendChild(pizzeriaSlogan);
  const pizzeriaListPizzas = document.createElement("div");
  pizzeriaListPizzas.setAttribute("class", "contenu");
  pizzeriaListPizzas.setAttribute("id", "PizzaList");
  var listPizzas = data.pizzas;
  for (var x = 0; x < listPizzas.length; x++) {
    
    var pizzaImageElement = document.createElement("div");

    pizzaImageElement.innerHTML = '<div class="image">' + listPizzas[x].nompizza +  '<img src="' + listPizzas[x].image + '"</div>';
    pizzeriaListPizzas.appendChild(pizzaImageElement);
    for (var y = 0; y <   listPizzas[x].ingredients.length; y++) {
      console.log('on est là');
      var pizzaIngredientElement = document.createElement("div");

      pizzaIngredientElement.innerHTML = '<div class="ingredient">' + listPizzas[x].ingredients[y] + '</div>';
      pizzeriaListPizzas.appendChild(pizzaIngredientElement);
    }
  }
  preview.appendChild(pizzeriaListPizzas);

}
function CreerDivs(data) {
  const preview = document.getElementsByClassName("preview")[0];

  let pizzeriaName = document.createElement("div");/*Pour créer notre div avec le nom de notre pizza.*/
  pizzeriaName.innerHTML = data.nom

  let pizzeriaSlogan = document.createElement("div");/*Pour créer notre div et y afficher les élèments de notre json qui est ici le nom du slogan*/
  pizzeriaSlogan.innerHTML = data.Slogan;

  preview.appendChild(pizzeriaName);
  preview.appendChild(pizzeriaSlogan);

  let pizzeriaListPizzas = document.createElement("div"); /*Pour créer notre liste de pizza et d'y récupérer nos éléments dans notre json.*/
  pizzeriaListPizzas.setAttribute("class", "contenu"); /*Pour récupérer les class et nos contenus de notre liste pizza via json*/
  pizzeriaListPizzas.setAttribute("id", "PizzaList"); /*Pour récupérer nos id et notre class pizza liste via json*/

  var listPizzas = data.pizzas;
  for (var x = 0; x < listPizzas.length; x++) {
    var pizzaListeElement = document.createElement("div");
    pizzaListeElement.setAttribute("class", "card");
    pizzaListeElement.innerHTML = '<h1 class="pizzanom">' + listPizzas[x].nompizza + '</h1>' + '<h2 class="pizzaprix">' + listPizzas[x].prix + '</h2> ';
    pizzeriaListPizzas.appendChild(pizzaListeElement);
  }

  preview.appendChild(pizzeriaListPizzas);

}