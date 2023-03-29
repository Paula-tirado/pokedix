const container = document.getElementById("container");
const cardPokemon = document.getElementById("card-pokemon");


const nombrePokemon = document.getElementById("nombres");
const pesoPokemon  = document.getElementById("peso");
const tipoPokemon = document.getElementById ("tipo");
const imgPokemon = document.getElementById("imagen");
const ataquesPokemon = document.getElementById("ataques");
const habilidadesPokemon =document.getElementById("abilidades");
// Obtener el modal
const modal = document.getElementById("myModal");

pokemonGeneral.forEach((pokemon)=> {  
  nombrePokemon.innerHTML= pokemon.collectibles_slug
  pesoPokemon.innerHTML= pokemon.weight
  imgPokemon.src= pokemon.ThumbnailImage

  

  pokemon.type.forEach((type)=>{
    tipoPokemon.innerHTML= type
  })
  pokemon.abilities.forEach((ability)=> {
    habilidadesPokemon.innerHTML = ability
  })
  // Aqui estamos clonando una card
  const cardPokemonClone = cardPokemon.cloneNode(true) // con el true es una clonacion del padre y los elementos hijos (deepClone)
  // Al contenedor padre que agregue la tarjet clonada
  container.appendChild(cardPokemonClone)

  

  // pokemon.attacks.forEach((attack)=> {
  //   ataquesPokemon.innerHTML= attack.name
  // })
 
});




// Obtener el botón que abre el modal
const btn = document.getElementById("myBtn");

// Obtener el elemento <span> que cierra el modal
const span = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en el botón, abra la modal(femenino)
 
btn.onclick = function() {
  modal.style.display = "block";
}


// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}


// Cuando el usuario haga clic en cualquier lugar fuera del modal, ciérrelo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
