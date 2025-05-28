const website = "https://frapollif.github.io/pet-adoption-data"

async function getPetsData() {
    const data = await fetch(`${website}/pets.json`)
    const petsdata = await data.json()
    return petsdata

}

async function displaypPets() {
    const pets = await getPetsData();
    const template = document.querySelector
    (`#animal-card-template`)

    const wrapper = document.querySelector(`main`)
    
    console.log(template)

    pets.forEach(pet =>{
       const clone = template.content.cloneNode(true)

       //qui modifichiamo il template
        const image = clone.querySelector(`.animal-card-photo img`)
        image.src=pet.photo
        const name = clone.querySelector(`.animal-card-text h1`)
        name.textContent=pet.name
        const description = clone.querySelector(`.animal-card-text p`)
        description.textContent=pet.description
        const specie = clone.querySelector(`.animal-card-text `)
        description.textContent=pet.description
       //aggiungiamo l'articolo alla pagina
       wrapper.appendChild(clone)

        }
    );
}

displaypPets()