//safeguard to ensure that all the html has been loaded
const pets = [
    {name: "fluffers", species: "dog", description: "a good boi"},
    {name: "pet rock", species: "rock", description: "solid"},
    {name: "peter", species: "rabbit", description: "hops"},
    {name: "katniss", species: "cat", description: "a feisty kitty"},
    {name: "simon", species: "cat", description: "a small germlin"},
    {name: "harry", species: "tarantula", description: "ahhhhhhh"},
];

const createPet = (pet) => {
    let petElement = $(`
        <div>
            <h2> ${pet.name} </h2>
            <p> ${pet.name} is a ${pet.species} and is ${pet.description} </p>
        </div>
    `)
    console.log(petElement);
    $(".pet-container").append(petElement);
};

let counter = 0;

$(document).ready(() => {
    $(".add-pet").click((event) =>{
        // do this on click
        let pet = pets[counter];
        createPet(pet);
        counter ++;
    });

    // $(".add-pet").on("click", () => {
    //     console.log('using the on function');
    // });
    // for(let pet of pets) {
    //     createPet(pet);
    // }
});