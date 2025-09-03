const website = "https://frapollif.github.io/pet-adoption-data"

async function getPetsData() {
    const data = await fetch(`${website}/pets.json`)
    const petsdata = await data.json()
    return petsdata

}

function getage(pet) {
    const date = new Date()
    const year = date.getFullYear() 
    const age = year - pet.birthYear
    if (age == 1) {
        return `${age} year old`}
    else if (age< 1)
        return `less than 1 year old`
    else {
        return `${age} years old`
    }
    

}

async function displaypPets() {
    const pets = await getPetsData();
    const template = document.querySelector
    (`#animal-card-template`)

    const wrapper = document.querySelector(`main`)
    const shown_pets = pets
    
    console.log(template)

    shown_pets.forEach(pet =>{
       const clone = template.content.cloneNode(true)

       //qui modifichiamo il template
        const image = clone.querySelector(`.animal-card-photo img`)
        image.src=pet.photo
        const name = clone.querySelector(`.animal-card-text h1`)
        name.textContent=pet.name
        const description = clone.querySelector(`.animal-card-text p`)
        description.textContent=pet.description
        const specie = clone.querySelector(`.specie`)
        specie.textContent=pet.species
        const anni = clone.querySelector(`.age`)
        anni.textContent= getage(pet)
       //aggiungiamo l'articolo alla pagina
       wrapper.appendChild(clone)

        }
    );
}



// function animal_selection(pet_type){
    
//     if (pet_type =! `all`){
//        const shown_pets = pets;
//     }
//     else {
//         pets.species = pet_type
//         shown_pets = pets.species
//         }

//     return shown_pets
//}



function displayFilteredAnimals(e) {
        let article = document.querySelectorAll("article")
        console.log(e.target.dataset.filter)
        article.forEach(articolo =>{
            const specie = articolo.querySelector(".specie").innerText.toLowerCase()
            console.log(specie)
            if (e.target.dataset.filter == "All"){
               articolo.style.display = "flex" 
            }
            else if (specie !== e.target.dataset.filter){
                articolo.style.display = "none"
            }
            else {
                articolo.style.display = "flex"
            }
        }

        )
    }
   

const filterButtons = document.querySelectorAll("nav button");

filterButtons.forEach(button => {
    button.addEventListener("click", (e)=> {
        displayFilteredAnimals(e)
    }
    )
})


displaypPets()
